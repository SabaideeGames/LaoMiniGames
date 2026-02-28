/**
 * 🎮 Shared Game Utilities — Lao Game Hub
 * Common functions for all games: storage, audio, vibration, etc.
 */

const GameUtils = {
  // ========== LOCAL STORAGE ==========

  /**
   * Save data to localStorage with game prefix
   * @param {string} gameId - Game identifier (e.g., 'stack-tower')
   * @param {string} key - Data key
   * @param {*} value - Data value (will be JSON serialized)
   */
  save(gameId, key, value) {
    try {
      localStorage.setItem(`game_${gameId}_${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn("localStorage save failed:", e);
    }
  },

  /**
   * Load data from localStorage
   * @param {string} gameId - Game identifier
   * @param {string} key - Data key
   * @param {*} defaultValue - Default if not found
   * @returns {*} Parsed value or default
   */
  load(gameId, key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(`game_${gameId}_${key}`);
      return raw !== null ? JSON.parse(raw) : defaultValue;
    } catch (e) {
      console.warn("localStorage load failed:", e);
      return defaultValue;
    }
  },

  /**
   * Update high score if new score is higher
   * @returns {boolean} true if new high score
   */
  updateHighScore(gameId, score) {
    const current = this.load(gameId, "highScore", 0);
    if (score > current) {
      this.save(gameId, "highScore", score);
      return true;
    }
    return false;
  },

  getHighScore(gameId) {
    return this.load(gameId, "highScore", 0);
  },

  // ========== DAILY CHALLENGE ==========

  /**
   * Get today's date string for daily challenges
   * @returns {string} e.g., '2026-02-28'
   */
  getTodayKey() {
    return new Date().toISOString().slice(0, 10);
  },

  /**
   * Deterministic random from seed (for daily puzzles)
   * @param {number} seed
   * @returns {function} Random function returning 0-1
   */
  seededRandom(seed) {
    let s = seed;
    return function () {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 0xffffffff;
    };
  },

  /**
   * Convert date string to numeric seed
   * @param {string} dateStr - e.g., '2026-02-28'
   * @returns {number}
   */
  dateToSeed(dateStr) {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  },

  // ========== STREAK TRACKING ==========

  /**
   * Update play streak
   * @returns {{ current: number, best: number, isNew: boolean }}
   */
  updateStreak(gameId) {
    const today = this.getTodayKey();
    const lastPlay = this.load(gameId, "lastPlayDate", "");
    let current = this.load(gameId, "currentStreak", 0);
    let best = this.load(gameId, "bestStreak", 0);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().slice(0, 10);

    let isNew = false;
    if (lastPlay === today) {
      // Already played today
    } else if (lastPlay === yesterdayKey) {
      current += 1;
    } else {
      current = 1;
    }

    if (current > best) {
      best = current;
      isNew = true;
    }

    this.save(gameId, "lastPlayDate", today);
    this.save(gameId, "currentStreak", current);
    this.save(gameId, "bestStreak", best);

    return { current, best, isNew };
  },

  // ========== STATS ==========

  incrementStat(gameId, statKey, amount = 1) {
    const current = this.load(gameId, `stat_${statKey}`, 0);
    this.save(gameId, `stat_${statKey}`, current + amount);
    return current + amount;
  },

  getStat(gameId, statKey, defaultValue = 0) {
    return this.load(gameId, `stat_${statKey}`, defaultValue);
  },

  // ========== AUDIO ==========

  /**
   * Simple beep sound using Web Audio API
   * @param {number} frequency - Hz
   * @param {number} duration - ms
   * @param {string} type - 'sine', 'square', 'triangle', 'sawtooth'
   * @param {number} volume - 0-1
   */
  _audioCtx: null,
  _soundEnabled: true,

  _audioUnlocked: false,

  initAudio() {
    if (!this._audioCtx) {
      this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this._audioCtx.state === "suspended") {
      this._audioCtx.resume();
    }
  },

  /**
   * Call once on page load to ensure AudioContext unlocks on mobile.
   * Registers a one-time touch/click listener that creates & resumes audio.
   */
  unlockAudio() {
    if (this._audioUnlocked) return;
    const unlock = () => {
      this.initAudio();
      this._audioUnlocked = true;
      document.removeEventListener("touchstart", unlock, true);
      document.removeEventListener("touchend", unlock, true);
      document.removeEventListener("click", unlock, true);
    };
    document.addEventListener("touchstart", unlock, true);
    document.addEventListener("touchend", unlock, true);
    document.addEventListener("click", unlock, true);
  },

  playTone(frequency = 440, duration = 100, type = "sine", volume = 0.3) {
    if (!this._soundEnabled || !this._audioCtx) return;
    try {
      const osc = this._audioCtx.createOscillator();
      const gain = this._audioCtx.createGain();
      osc.type = type;
      osc.frequency.value = frequency;
      gain.gain.value = volume;
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        this._audioCtx.currentTime + duration / 1000,
      );
      osc.connect(gain);
      gain.connect(this._audioCtx.destination);
      osc.start();
      osc.stop(this._audioCtx.currentTime + duration / 1000);
    } catch (e) {
      /* ignore audio errors */
    }
  },

  // Preset sounds
  playSuccess() {
    this.playTone(523, 100, "sine", 0.3);
    setTimeout(() => this.playTone(659, 100, "sine", 0.3), 100);
    setTimeout(() => this.playTone(784, 150, "sine", 0.3), 200);
  },
  playClick() {
    this.playTone(600, 50, "square", 0.15);
  },
  playFail() {
    this.playTone(200, 300, "sawtooth", 0.2);
  },
  playPerfect() {
    this.playTone(880, 80, "sine", 0.25);
    setTimeout(() => this.playTone(1108, 120, "sine", 0.25), 80);
  },

  toggleSound() {
    this._soundEnabled = !this._soundEnabled;
    return this._soundEnabled;
  },

  // ========== VIBRATION ==========

  vibrate(pattern = 50) {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  },

  vibrateSuccess() {
    this.vibrate([30, 50, 30]);
  },
  vibrateFail() {
    this.vibrate([100, 30, 100]);
  },

  // ========== UI HELPERS ==========

  /**
   * Format large numbers (e.g., 1500 → 1.5K)
   */
  formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e4) return (num / 1e3).toFixed(1) + "K";
    return num.toLocaleString();
  },

  /**
   * Animate a number counting up
   */
  animateNumber(element, from, to, duration = 500) {
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(from + (to - from) * eased);
      element.textContent = this.formatNumber(current);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  },

  /**
   * Show a floating text animation (e.g., "+10")
   */
  showFloatingText(container, text, x, y, color = "var(--accent-primary)") {
    const el = document.createElement("div");
    el.textContent = text;
    el.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      color: ${color};
      font-size: 1.5rem;
      font-weight: 700;
      pointer-events: none;
      z-index: 50;
      animation: floatUp 0.8s ease-out forwards;
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), 800);
  },

  // ========== SCREEN MANAGEMENT ==========

  showScreen(id) {
    document
      .querySelectorAll(".screen")
      .forEach((s) => s.classList.add("hidden"));
    const screen = document.getElementById(id);
    if (screen) screen.classList.remove("hidden");
  },

  showOverlay(id) {
    const overlay = document.getElementById(id);
    if (overlay) overlay.classList.remove("hidden");
  },

  hideOverlay(id) {
    const overlay = document.getElementById(id);
    if (overlay) overlay.classList.add("hidden");
  },
};
