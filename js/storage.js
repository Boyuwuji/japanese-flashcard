/**
 * LocalStorage 数据管理模块
 */

const Storage = {
    KEYS: {
        CARDS: 'flashcard_cards',
        SETTINGS: 'flashcard_settings',
        STATS: 'flashcard_stats'
    },

    /**
     * 获取所有卡片状态
     */
    getCards() {
        const data = localStorage.getItem(this.KEYS.CARDS);
        return data ? JSON.parse(data) : {};
    },

    /**
     * 保存卡片状态
     */
    saveCards(cards) {
        localStorage.setItem(this.KEYS.CARDS, JSON.stringify(cards));
    },

    /**
     * 获取或创建单个卡片
     */
    getCard(vocabId) {
        const cards = this.getCards();
        if (!cards[vocabId]) {
            cards[vocabId] = SM2.createCard(vocabId);
            this.saveCards(cards);
        }
        return cards[vocabId];
    },

    /**
     * 更新单个卡片
     */
    updateCard(card) {
        const cards = this.getCards();
        cards[card.vocabId] = card;
        this.saveCards(cards);
    },

    /**
     * 获取设置
     */
    getSettings() {
        const data = localStorage.getItem(this.KEYS.SETTINGS);
        return data ? JSON.parse(data) : {
            newCardsPerDay: 20,
            selectedLessons: [3, 4, 5, 6],  // 默认选择第3-6课
            darkMode: false
        };
    },

    /**
     * 保存设置
     */
    saveSettings(settings) {
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    },

    /**
     * 获取今日统计
     */
    getTodayStats() {
        const data = localStorage.getItem(this.KEYS.STATS);
        const stats = data ? JSON.parse(data) : {};
        const today = new Date().toDateString();

        if (stats.date !== today) {
            return {
                date: today,
                newLearned: 0,
                reviewed: 0
            };
        }
        return stats;
    },

    /**
     * 更新今日统计
     */
    updateTodayStats(type) {
        const stats = this.getTodayStats();
        if (type === 'new') {
            stats.newLearned++;
        } else if (type === 'review') {
            stats.reviewed++;
        }
        localStorage.setItem(this.KEYS.STATS, JSON.stringify(stats));
        return stats;
    },

    /**
     * 获取学习进度统计
     */
    getProgress() {
        const cards = this.getCards();
        const settings = this.getSettings();

        let total = 0;
        let learned = 0;
        let mastered = 0;

        VOCABULARY_DATA.forEach(vocab => {
            if (settings.selectedLessons.includes(vocab.lesson)) {
                total++;
                const card = cards[vocab.id];
                if (card) {
                    if (card.repetitions > 0) learned++;
                    if (card.interval >= 21) mastered++;  // 21天以上算掌握
                }
            }
        });

        return { total, learned, mastered };
    },

    /**
     * 导出所有数据
     */
    exportData() {
        return JSON.stringify({
            cards: this.getCards(),
            settings: this.getSettings(),
            stats: this.getTodayStats(),
            exportDate: new Date().toISOString()
        }, null, 2);
    },

    /**
     * 导入数据
     */
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.cards) this.saveCards(data.cards);
            if (data.settings) this.saveSettings(data.settings);
            return true;
        } catch (e) {
            console.error('导入失败:', e);
            return false;
        }
    },

    /**
     * 重置所有数据
     */
    resetAll() {
        localStorage.removeItem(this.KEYS.CARDS);
        localStorage.removeItem(this.KEYS.STATS);
    }
};
