/**
 * SM-2 间隔重复算法实现
 * 基于SuperMemo 2算法,与Anki相似
 */

const SM2 = {
  // 默认参数
  DEFAULT_EASE: 2.5,
  MIN_EASE: 1.3,
  
  // 评分等级
  RATING: {
    AGAIN: 0,    // 忘记
    HARD: 1,     // 困难
    GOOD: 2,     // 良好
    EASY: 3      // 简单
  },
  
  /**
   * 创建新卡片的初始状态
   */
  createCard(vocabId) {
    return {
      vocabId: vocabId,
      ease: this.DEFAULT_EASE,
      interval: 0,          // 当前间隔(天)
      repetitions: 0,       // 复习次数
      dueDate: Date.now(),  // 下次复习时间
      lastReview: null,     // 上次复习时间
      status: 'new'         // new, learning, review
    };
  },
  
  /**
   * 根据用户评分更新卡片状态
   * @param {Object} card - 卡片状态
   * @param {number} rating - 用户评分 (0-3)
   * @returns {Object} 更新后的卡片状态
   */
  reviewCard(card, rating) {
    const now = Date.now();
    const newCard = { ...card };
    
    newCard.lastReview = now;
    
    if (rating === this.RATING.AGAIN) {
      // 忘记: 重置进度
      newCard.repetitions = 0;
      newCard.interval = 0;
      newCard.ease = Math.max(this.MIN_EASE, newCard.ease - 0.2);
      newCard.dueDate = now + 1 * 60 * 1000; // 1分钟后再复习
      newCard.status = 'learning';
    } else if (rating === this.RATING.HARD) {
      // 困难
      if (newCard.repetitions === 0) {
        newCard.interval = 1;
      } else {
        newCard.interval = Math.max(1, Math.round(newCard.interval * 1.2));
      }
      newCard.ease = Math.max(this.MIN_EASE, newCard.ease - 0.15);
      newCard.repetitions++;
      newCard.dueDate = now + newCard.interval * 24 * 60 * 60 * 1000;
      newCard.status = 'review';
    } else if (rating === this.RATING.GOOD) {
      // 良好
      if (newCard.repetitions === 0) {
        newCard.interval = 1;
      } else if (newCard.repetitions === 1) {
        newCard.interval = 6;
      } else {
        newCard.interval = Math.round(newCard.interval * newCard.ease);
      }
      newCard.repetitions++;
      newCard.dueDate = now + newCard.interval * 24 * 60 * 60 * 1000;
      newCard.status = 'review';
    } else if (rating === this.RATING.EASY) {
      // 简单
      if (newCard.repetitions === 0) {
        newCard.interval = 4;
      } else {
        newCard.interval = Math.round(newCard.interval * newCard.ease * 1.3);
      }
      newCard.ease = newCard.ease + 0.15;
      newCard.repetitions++;
      newCard.dueDate = now + newCard.interval * 24 * 60 * 60 * 1000;
      newCard.status = 'review';
    }
    
    return newCard;
  },
  
  /**
   * 检查卡片是否到期需要复习
   */
  isDue(card) {
    return card.dueDate <= Date.now();
  },
  
  /**
   * 获取下次复习的友好显示文本
   */
  getNextReviewText(card) {
    const now = Date.now();
    const diff = card.dueDate - now;
    
    if (diff <= 0) return '现在';
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 60) return `${minutes}分钟后`;
    if (hours < 24) return `${hours}小时后`;
    if (days === 1) return '明天';
    return `${days}天后`;
  }
};
