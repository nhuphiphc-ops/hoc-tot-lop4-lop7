// Web Audio API & Direct Studio-Quality Vietnamese Voice Engine for Cong Nguyen & Nhat Minh

const AUDIO_PATHS = {
  PRAISE_NGUYEN: '/audio/voice_praise.mp3',
  ENCOURAGE_NGUYEN: '/audio/voice_encourage.mp3',
  PRAISE_MINH: '/audio/voice_praise_minh.mp3',
  ENCOURAGE_MINH: '/audio/voice_encourage_minh.mp3',
  PRAISE_CHUOT: '/audio/voice_praise_chuot.mp3',
  ENCOURAGE_CHUOT: '/audio/voice_encourage_chuot.mp3',
  PRAISE_SOC: '/audio/voice_praise_soc.mp3',
  ENCOURAGE_SOC: '/audio/voice_encourage_soc.mp3'
};

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.currentAudio = null;
    this.vietnameseVoice = null;
    this.audioCache = {};

    // Read sound setting from localStorage
    try {
      const saved = localStorage.getItem('toan4_sound_enabled');
      if (saved !== null) {
        this.enabled = JSON.parse(saved);
      }
    } catch {
      this.enabled = true;
    }

    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        this.initContext();
        this.loadVoices();
        this.preloadAudios();
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      };
      window.addEventListener('click', unlockAudio, { once: true, passive: true });
      window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });

      // Init speech synthesis voices if available
      if ('speechSynthesis' in window) {
        this.loadVoices();
        window.speechSynthesis.onvoiceschanged = () => {
          this.loadVoices();
        };
      }
    }
  }

  preloadAudios() {
    if (typeof window === 'undefined') return;
    Object.values(AUDIO_PATHS).forEach(path => {
      try {
        const a = new Audio();
        a.src = path;
        a.preload = 'auto';
        this.audioCache[path] = a;
      } catch {}
    });
  }

  loadVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      const voices = window.speechSynthesis.getVoices() || [];
      if (voices.length > 0) {
        this.vietnameseVoice = voices.find(v => 
          v.lang && (v.lang.toLowerCase().startsWith('vi') || v.lang.toLowerCase().includes('vie') || v.lang.toLowerCase().includes('vietnam'))
        ) || null;
      }
    } catch {
      // ignore
    }
  }

  initContext() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('toan4_sound_enabled', JSON.stringify(this.enabled));
    } catch {
      // ignore
    }
    if (this.enabled) {
      this.initContext();
      this.playClick();
      this.speak("Đã bật âm thanh");
    } else {
      if (this.currentAudio) {
        try {
          this.currentAudio.pause();
          this.currentAudio = null;
        } catch {}
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch { /* ignore */ }
      }
    }
    return this.enabled;
  }

  setSoundEnabled(val) {
    this.enabled = !!val;
    try {
      localStorage.setItem('toan4_sound_enabled', JSON.stringify(this.enabled));
    } catch {
      // ignore
    }
  }

  isSoundEnabled() {
    return this.enabled;
  }

  // Play direct Audio file with fallback to SpeechSynthesis or Google TTS
  playVoiceAudio(audioSrc, fallbackText) {
    if (!this.enabled) return;
    if (typeof window === 'undefined') return;

    try {
      // If no local MP3 provided, use Google Translate TTS
      if (!audioSrc && fallbackText) {
        audioSrc = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=' + encodeURIComponent(fallbackText);
      }
      if (!audioSrc) return;

      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio = null;
      }

      let audio = this.audioCache[audioSrc];
      if (!audio) {
        audio = new Audio(audioSrc);
        this.audioCache[audioSrc] = audio;
      }

      this.currentAudio = audio;
      audio.volume = 1.0;
      audio.currentTime = 0;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Audio file play prevented, falling back to Web Speech:", err);
          this.speakWebSpeech(fallbackText);
        });
      }
    } catch (e) {
      this.speakWebSpeech(fallbackText);
    }
  }

  // Submission voice feedback - student personalized
  speakSubmissionFeedback(score, grade = '4') {
    if (!this.enabled) return;

    // Prevent overlapping if called multiple times rapidly
    if (this._lastSpeakTime && Date.now() - this._lastSpeakTime < 1000) return;
    this._lastSpeakTime = Date.now();

    
    let g = String(grade);
    if (g === 'undefined' || g === 'null' || !grade) {
      try {
        g = localStorage.getItem('toan_current_grade') || '4';
      } catch (e) {
        g = '4';
      }
    }

    const delay = score === 100 ? 800 : 300; // wait for chime to finish

    if (['10', '11', '12'].includes(g)) {
      if (score === 100) {
        this.playVictory();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.PRAISE_MINH, "Nhật Minh của bố quá tuyệt vời!"), delay);
      } else {
        this.playCorrect();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.ENCOURAGE_MINH, "Nhật Minh cố gắng hơn tí nữa nhé!"), delay);
      }
    } else if (['1', '2', '3', '4'].includes(g)) {
      if (score === 100) {
        this.playVictory();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.PRAISE_CHUOT, "Bé Chuột giỏi quá!"), delay);
      } else {
        this.playCorrect();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.ENCOURAGE_CHUOT, "Bé Chuột cố gắng thêm nhé!"), delay);
      }
    } else if (['5', '6'].includes(g)) {
      if (score === 100) {
        this.playVictory();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.PRAISE_SOC, "Bé Sóc giỏi quá!"), delay);
      } else {
        this.playCorrect();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.ENCOURAGE_SOC, "Bé Sóc cố gắng thêm nhé!"), delay);
      }
    } else {
      if (score === 100) {
        this.playVictory();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.PRAISE_NGUYEN, "Công Nguyên của bố quá tuyệt vời!"), delay);
      } else {
        this.playCorrect();
        setTimeout(() => this.playVoiceAudio(AUDIO_PATHS.ENCOURAGE_NGUYEN, "Công Nguyên cố gắng hơn tí nữa nhé!"), delay);
      }
    }
  }

  // General Speak method
  speak(text) {
    if (!this.enabled) return;
    if (typeof window === 'undefined') return;

    if (text.includes("Nhật Minh") && text.includes("tuyệt vời")) {
      this.playVoiceAudio(AUDIO_PATHS.PRAISE_MINH, text);
    } else if (text.includes("Nhật Minh") && text.includes("cố gắng")) {
      this.playVoiceAudio(AUDIO_PATHS.ENCOURAGE_MINH, text);
    } else if (text.includes("Công Nguyên") && text.includes("tuyệt vời")) {
      this.playVoiceAudio(AUDIO_PATHS.PRAISE_NGUYEN, text);
    } else if (text.includes("Công Nguyên") && text.includes("cố gắng")) {
      this.playVoiceAudio(AUDIO_PATHS.ENCOURAGE_NGUYEN, text);
    } else {
      this.speakWebSpeech(text);
    }
  }

  speakWebSpeech(text) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();

      if (!this.vietnameseVoice) {
        this.loadVoices();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.volume = 1.0;

      if (this.vietnameseVoice) {
        utterance.voice = this.vietnameseVoice;
      }

      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis error fallback
    }
  }

  playTone(freq, type, duration, delay = 0, gainLevel = 0.15) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {
      // Web Audio playback error catch
    }
  }

  playCorrect() {
    this.playTone(523.25, 'sine', 0.15, 0, 0.2); // C5
    this.playTone(659.25, 'sine', 0.2, 0.1, 0.2); // E5
    this.playTone(783.99, 'sine', 0.3, 0.2, 0.25); // G5
  }

  playWrong() {
    this.playTone(329.63, 'sawtooth', 0.2, 0, 0.15); // E4
    this.playTone(277.18, 'sawtooth', 0.35, 0.15, 0.2); // C#4
  }

  playClick() {
    this.playTone(800, 'triangle', 0.04, 0, 0.08);
  }

  playSelect() {
    this.playTone(700, 'sine', 0.05, 0, 0.1);
  }

  playPop() {
    this.playTone(600, 'sine', 0.06, 0, 0.1);
    this.playTone(900, 'sine', 0.08, 0.04, 0.1);
  }

  playVictory() {
    const notes = [
      { f: 523.25, d: 0.12, t: 0 },    // C5
      { f: 659.25, d: 0.12, t: 0.12 }, // E5
      { f: 783.99, d: 0.12, t: 0.24 }, // G5
      { f: 1046.50, d: 0.4, t: 0.36 }  // C6
    ];
    notes.forEach(n => this.playTone(n.f, 'triangle', n.d, n.t, 0.25));
  }

  playUnlock() {
    const notes = [
      { f: 440, d: 0.1, t: 0 },    // A4
      { f: 554.37, d: 0.1, t: 0.08 }, // C#5
      { f: 659.25, d: 0.1, t: 0.16 }, // E5
      { f: 880, d: 0.3, t: 0.24 }     // A5
    ];
    notes.forEach(n => this.playTone(n.f, 'sine', n.d, n.t, 0.2));
  }

  playStart() {
    this.playTone(440, 'triangle', 0.1, 0, 0.15);
    this.playTone(880, 'triangle', 0.2, 0.08, 0.2);
  }

  playStreak() {
    const notes = [
      { f: 392.00, d: 0.1, t: 0 },    // G4
      { f: 523.25, d: 0.1, t: 0.09 }, // C5
      { f: 659.25, d: 0.1, t: 0.18 }, // E5
      { f: 783.99, d: 0.1, t: 0.27 }, // G5
      { f: 1046.50, d: 0.35, t: 0.36 } // C6
    ];
    notes.forEach(n => this.playTone(n.f, 'sine', n.d, n.t, 0.25));
  }

  playTimerTick() {
    this.playTone(1200, 'sine', 0.03, 0, 0.05);
  }

  playTimerWarning() {
    this.playTone(880, 'sawtooth', 0.08, 0, 0.12);
  }
}

const sounds = new SoundManager();
export default sounds;
