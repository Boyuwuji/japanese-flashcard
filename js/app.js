/**
 * 日语单词记忆卡片 - 主应用
 */

const App = {
    // 当前状态
    state: {
        currentQueue: [],      // 当前学习队列
        currentIndex: 0,       // 当前卡片索引
        isFlipped: false,      // 卡片是否翻转
        mode: 'home',          // home, study, stats, settings
        todayNewCount: 0       // 今日已学新卡片数
    },

    /**
     * 初始化应用
     */
    init() {
        this.bindEvents();
        this.loadSettings();
        this.showHome();
    },

    /**
     * 绑定事件
     */
    bindEvents() {
        // 导航按钮
        document.getElementById('nav-home').addEventListener('click', () => this.showHome());
        document.getElementById('nav-stats').addEventListener('click', () => this.showStats());
        document.getElementById('nav-settings').addEventListener('click', () => this.showSettings());

        // 首页按钮
        document.getElementById('btn-start-new').addEventListener('click', () => this.startStudy('new'));
        document.getElementById('btn-start-review').addEventListener('click', () => this.startStudy('review'));

        // 卡片交互
        document.getElementById('flashcard').addEventListener('click', () => this.flipCard());

        // 评分按钮
        document.getElementById('btn-again').addEventListener('click', () => this.rateCard(SM2.RATING.AGAIN));
        document.getElementById('btn-hard').addEventListener('click', () => this.rateCard(SM2.RATING.HARD));
        document.getElementById('btn-good').addEventListener('click', () => this.rateCard(SM2.RATING.GOOD));
        document.getElementById('btn-easy').addEventListener('click', () => this.rateCard(SM2.RATING.EASY));

        // 设置
        document.getElementById('new-cards-per-day').addEventListener('change', (e) => this.updateSetting('newCardsPerDay', parseInt(e.target.value)));
        document.getElementById('dark-mode-toggle').addEventListener('change', (e) => this.toggleDarkMode(e.target.checked));
        document.getElementById('btn-export').addEventListener('click', () => this.exportData());
        document.getElementById('btn-import').addEventListener('click', () => this.importData());
        document.getElementById('btn-reset').addEventListener('click', () => this.resetData());

        // 课程选择
        document.querySelectorAll('.lesson-checkbox').forEach(cb => {
            cb.addEventListener('change', () => this.updateLessonSelection());
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // 模态对话框
        document.getElementById('modal-close').addEventListener('click', () => this.closeModal());
        document.querySelector('.modal-backdrop').addEventListener('click', () => this.closeModal());
    },

    /**
     * 加载设置
     */
    loadSettings() {
        const settings = Storage.getSettings();
        document.getElementById('new-cards-per-day').value = settings.newCardsPerDay;
        document.getElementById('dark-mode-toggle').checked = settings.darkMode;

        if (settings.darkMode) {
            document.body.classList.add('dark-mode');
        }

        // 加载课程选择
        document.querySelectorAll('.lesson-checkbox').forEach(cb => {
            cb.checked = settings.selectedLessons.includes(parseInt(cb.value));
        });
    },

    /**
     * 显示首页
     */
    showHome() {
        this.state.mode = 'home';
        this.hideAllPages();
        document.getElementById('page-home').classList.add('active');
        document.getElementById('nav-home').classList.add('active');

        this.updateHomeStats();
    },

    /**
     * 更新首页统计
     */
    updateHomeStats() {
        const settings = Storage.getSettings();
        const cards = Storage.getCards();
        const todayStats = Storage.getTodayStats();
        const progress = Storage.getProgress();

        // 计算待复习数量
        let dueCount = 0;
        let newCount = 0;

        VOCABULARY_DATA.forEach(vocab => {
            if (settings.selectedLessons.includes(vocab.lesson)) {
                const card = cards[vocab.id];
                if (!card || card.status === 'new') {
                    newCount++;
                } else if (SM2.isDue(card)) {
                    dueCount++;
                }
            }
        });

        // 今日剩余新卡片
        const remainingNew = Math.max(0, settings.newCardsPerDay - todayStats.newLearned);
        const newToShow = Math.min(remainingNew, newCount);

        document.getElementById('new-count').textContent = newToShow;
        document.getElementById('review-count').textContent = dueCount;
        document.getElementById('progress-learned').textContent = progress.learned;
        document.getElementById('progress-total').textContent = progress.total;

        // 更新进度条
        const progressPercent = progress.total > 0 ? (progress.learned / progress.total * 100) : 0;
        document.getElementById('progress-bar-fill').style.width = progressPercent + '%';
    },

    /**
     * 开始学习
     */
    startStudy(type) {
        const settings = Storage.getSettings();
        const cards = Storage.getCards();
        const todayStats = Storage.getTodayStats();

        this.state.currentQueue = [];

        if (type === 'new') {
            // 新卡片学习
            const remainingNew = settings.newCardsPerDay - todayStats.newLearned;
            VOCABULARY_DATA.forEach(vocab => {
                if (settings.selectedLessons.includes(vocab.lesson)) {
                    const card = cards[vocab.id];
                    if (!card || card.status === 'new') {
                        this.state.currentQueue.push({ vocab, isNew: true });
                    }
                }
            });
            // 限制数量
            this.state.currentQueue = this.state.currentQueue.slice(0, remainingNew);
        } else {
            // 复习
            VOCABULARY_DATA.forEach(vocab => {
                if (settings.selectedLessons.includes(vocab.lesson)) {
                    const card = cards[vocab.id];
                    if (card && card.status !== 'new' && SM2.isDue(card)) {
                        this.state.currentQueue.push({ vocab, isNew: false });
                    }
                }
            });
        }

        if (this.state.currentQueue.length === 0) {
            alert(type === 'new' ? '今日新卡片已学完!' : '没有待复习的卡片!');
            return;
        }

        // 随机打乱顺序
        this.shuffleArray(this.state.currentQueue);

        this.state.currentIndex = 0;
        this.state.isFlipped = false;
        this.showStudyPage();
    },

    /**
     * 显示学习页面
     */
    showStudyPage() {
        this.state.mode = 'study';
        this.hideAllPages();
        document.getElementById('page-study').classList.add('active');

        this.showCurrentCard();
    },

    /**
     * 显示当前卡片
     */
    showCurrentCard() {
        if (this.state.currentIndex >= this.state.currentQueue.length) {
            this.finishStudy();
            return;
        }

        const flashcard = document.getElementById('flashcard');

        // 先禁用过渡动画,瞬间翻转回正面
        flashcard.style.transition = 'none';
        flashcard.classList.remove('flipped');

        // 强制回流,确保样式立即应用
        flashcard.offsetHeight;

        // 恢复过渡动画
        flashcard.style.transition = '';

        const item = this.state.currentQueue[this.state.currentIndex];
        const vocab = item.vocab;

        // 更新进度
        document.getElementById('study-progress').textContent =
            `${this.state.currentIndex + 1} / ${this.state.currentQueue.length}`;

        // 更新卡片内容
        document.getElementById('card-word').textContent = vocab.word;
        document.getElementById('card-reading').textContent = vocab.reading !== vocab.word ? vocab.reading : '';
        document.getElementById('card-pitch').textContent = vocab.pitch ? `声调: ${vocab.pitch}` : '';
        document.getElementById('card-pos').textContent = vocab.pos;
        document.getElementById('card-meaning').textContent = vocab.meaning;
        document.getElementById('card-lesson').textContent = `第${vocab.lesson}课`;

        // 重置翻转状态
        this.state.isFlipped = false;
        document.getElementById('rating-buttons').classList.add('hidden');
        document.getElementById('flip-hint').classList.remove('hidden');
    },

    /**
     * 翻转卡片
     */
    flipCard() {
        if (this.state.mode !== 'study') return;

        this.state.isFlipped = !this.state.isFlipped;
        document.getElementById('flashcard').classList.toggle('flipped');

        if (this.state.isFlipped) {
            document.getElementById('rating-buttons').classList.remove('hidden');
            document.getElementById('flip-hint').classList.add('hidden');
        }
    },

    /**
     * 评分卡片
     */
    rateCard(rating) {
        const item = this.state.currentQueue[this.state.currentIndex];
        let card = Storage.getCard(item.vocab.id);

        // 更新卡片状态
        card = SM2.reviewCard(card, rating);
        Storage.updateCard(card);

        // 更新统计
        if (item.isNew) {
            Storage.updateTodayStats('new');
        } else {
            Storage.updateTodayStats('review');
        }

        // 如果选择"忘记",将卡片添加到队列末尾
        if (rating === SM2.RATING.AGAIN) {
            this.state.currentQueue.push(item);
        }

        // 下一张卡片
        this.state.currentIndex++;
        this.showCurrentCard();
    },

    /**
     * 完成学习
     */
    finishStudy() {
        const todayStats = Storage.getTodayStats();
        this.showModal(
            '学习完成!',
            `今日新学: ${todayStats.newLearned} 个<br>今日复习: ${todayStats.reviewed} 个`,
            () => this.showHome()
        );
    },

    /**
     * 显示模态对话框
     */
    showModal(title, body, onClose) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').innerHTML = body;
        document.getElementById('modal').classList.remove('hidden');
        this._modalCallback = onClose;
    },

    /**
     * 关闭模态对话框
     */
    closeModal() {
        document.getElementById('modal').classList.add('hidden');
        if (this._modalCallback) {
            this._modalCallback();
            this._modalCallback = null;
        }
    },

    /**
     * 显示统计页面
     */
    showStats() {
        this.state.mode = 'stats';
        this.hideAllPages();
        document.getElementById('page-stats').classList.add('active');
        document.getElementById('nav-stats').classList.add('active');

        this.updateStats();
    },

    /**
     * 更新统计数据
     */
    updateStats() {
        const todayStats = Storage.getTodayStats();
        const progress = Storage.getProgress();
        const settings = Storage.getSettings();

        document.getElementById('stats-today-new').textContent = todayStats.newLearned;
        document.getElementById('stats-today-review').textContent = todayStats.reviewed;
        document.getElementById('stats-total-learned').textContent = progress.learned;
        document.getElementById('stats-mastered').textContent = progress.mastered;

        // 按课程统计
        const lessonStats = {};
        const cards = Storage.getCards();

        VOCABULARY_DATA.forEach(vocab => {
            if (!lessonStats[vocab.lesson]) {
                lessonStats[vocab.lesson] = { total: 0, learned: 0 };
            }
            lessonStats[vocab.lesson].total++;
            const card = cards[vocab.id];
            if (card && card.repetitions > 0) {
                lessonStats[vocab.lesson].learned++;
            }
        });

        // 渲染课程统计
        const container = document.getElementById('lesson-stats');
        container.innerHTML = '';
        Object.keys(lessonStats).sort((a, b) => a - b).forEach(lesson => {
            const stat = lessonStats[lesson];
            const percent = Math.round(stat.learned / stat.total * 100);
            container.innerHTML += `
        <div class="lesson-stat-item">
          <span>第${lesson}课</span>
          <div class="mini-progress">
            <div class="mini-progress-fill" style="width: ${percent}%"></div>
          </div>
          <span>${stat.learned}/${stat.total}</span>
        </div>
      `;
        });
    },

    /**
     * 显示设置页面
     */
    showSettings() {
        this.state.mode = 'settings';
        this.hideAllPages();
        document.getElementById('page-settings').classList.add('active');
        document.getElementById('nav-settings').classList.add('active');
    },

    /**
     * 更新设置
     */
    updateSetting(key, value) {
        const settings = Storage.getSettings();
        settings[key] = value;
        Storage.saveSettings(settings);
    },

    /**
     * 更新课程选择
     */
    updateLessonSelection() {
        const settings = Storage.getSettings();
        settings.selectedLessons = [];
        document.querySelectorAll('.lesson-checkbox:checked').forEach(cb => {
            settings.selectedLessons.push(parseInt(cb.value));
        });
        Storage.saveSettings(settings);

        if (this.state.mode === 'home') {
            this.updateHomeStats();
        }
    },

    /**
     * 切换深色模式
     */
    toggleDarkMode(enabled) {
        document.body.classList.toggle('dark-mode', enabled);
        this.updateSetting('darkMode', enabled);
    },

    /**
     * 导出数据
     */
    exportData() {
        const data = Storage.exportData();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `flashcard-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    },

    /**
     * 导入数据
     */
    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                if (Storage.importData(event.target.result)) {
                    alert('导入成功!');
                    this.loadSettings();
                    this.showHome();
                } else {
                    alert('导入失败,请检查文件格式');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    },

    /**
     * 重置数据
     */
    resetData() {
        if (confirm('确定要重置所有学习进度吗?此操作不可恢复!')) {
            Storage.resetAll();
            this.showHome();
        }
    },

    /**
     * 键盘快捷键
     */
    handleKeyboard(e) {
        if (this.state.mode !== 'study') return;

        switch (e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault();
                if (!this.state.isFlipped) {
                    this.flipCard();
                }
                break;
            case '1':
                if (this.state.isFlipped) this.rateCard(SM2.RATING.AGAIN);
                break;
            case '2':
                if (this.state.isFlipped) this.rateCard(SM2.RATING.HARD);
                break;
            case '3':
                if (this.state.isFlipped) this.rateCard(SM2.RATING.GOOD);
                break;
            case '4':
                if (this.state.isFlipped) this.rateCard(SM2.RATING.EASY);
                break;
        }
    },

    /**
     * 隐藏所有页面
     */
    hideAllPages() {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    },

    /**
     * 打乱数组
     */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
};

// 启动应用
document.addEventListener('DOMContentLoaded', () => App.init());
