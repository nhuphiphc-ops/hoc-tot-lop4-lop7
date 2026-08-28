// Web Audio API & Native Web Speech API Voice Synthesizer for instant, reliable kid sound effects & Vietnamese voice narration

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.voicesLoaded = false;
    this.vietnameseVoice = null;

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
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      };
      window.addEventListener('click', unlockAudio, { once: true, passive: true });
      window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });

      // Init speech synthesis voices
      if ('speechSynthesis' in window) {
        this.loadVoices();
        window.speechSynthesis.onvoiceschanged = () => {
          this.loadVoices();
        };
      }
    }
  }

  loadVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      const voices = window.speechSynthesis.getVoices() || [];
      if (voices.length > 0) {
        this.voicesLoaded = true;
        this.vietnameseVoice = voices.find(v => 
          v.lang && (v.lang.toLowerCase().startsWith('vi') || v.lang.toLowerCase().includes('vie') || v.lang.toLowerCase().includes('vietnam'))
        ) || null;
      }
    } catch {
      // ignore
    }
  }

  initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
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
      this.playClick();
      this.speak("Đã bật âm thanh");
    } else {
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

  // Reliable, direct Web Speech API Vietnamese Voice Speech
  speak(text) {
    if (!this.enabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      // 1. Resume audio context & synthesis queue in case browser suspended it
      this.initContext();
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();

      // 2. Refresh voices if not cached
      if (!this.vietnameseVoice) {
        this.loadVoices();
      }

      // 3. Create fresh utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95; // Friendly and clear rate
      utterance.pitch = 1.05; // Cheerful pitch
      utterance.volume = 1.0; // Max volume

      if (this.vietnameseVoice) {
        utterance.voice = this.vietnameseVoice;
      }

      // 4. Speak
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("SpeechSynthesis error:", e);
    }
  }

  // Submission voice feedback
  speakSubmissionFeedback(score) {
    if (!this.enabled) return;
    if (score === 100) {
      this.playVictory();
      this.speak("Công Nguyên của bố quá tuyệt vời!");
    } else {
      this.playCorrect();
      this.speak("Công Nguyên cố gắng hơn tí nữa nhé!");
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, startDelay = 0) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime + startDelay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Ignore audio scheduling exceptions
    }
  }

  // Click button sound (warm wooden pop)
  playClick() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.06);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
      // ignore
    }
  }

  // Pop sound
  playPop() {
    this.playClick();
  }

  // Start exam sound
  playStart() {
    if (!this.enabled) return;
    this.playTone(440, 'sine', 0.12, 0.12, 0);    // A4
    this.playTone(554.37, 'sine', 0.12, 0.12, 0.08); // C#5
    this.playTone(659.25, 'sine', 0.25, 0.15, 0.16); // E5
  }

  // Option selected sound
  playSelect() {
    if (!this.enabled) return;
    this.playTone(523.25, 'sine', 0.1, 0.12); // C5
  }

  // Correct answer sound (Joyful sparkling bell)
  playCorrect() {
    if (!this.enabled) return;
    this.playTone(523.25, 'sine', 0.18, 0.15, 0);    // C5
    this.playTone(659.25, 'sine', 0.22, 0.15, 0.08); // E5
    this.playTone(783.99, 'triangle', 0.35, 0.18, 0.16); // G5
  }

  // Wrong answer sound (Gentle soft bonk)
  playWrong() {
    if (!this.enabled) return;
    this.playTone(280, 'sine', 0.15, 0.12, 0);
    this.playTone(220, 'triangle', 0.22, 0.12, 0.1);
  }

  // Complete exam / Victory fanfare
  playVictory() {
    if (!this.enabled) return;
    const notes = [
      { f: 523.25, d: 0.12, t: 0 },    // C5
      { f: 659.25, d: 0.12, t: 0.1 },  // E5
      { f: 783.99, d: 0.12, t: 0.2 },  // G5
      { f: 1046.5, d: 0.45, t: 0.3 },  // C6
    ];
    notes.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.16, n.t);
    });
  }

  // Unlock next stage/week sound
  playUnlock() {
    if (!this.enabled) return;
    const notes = [
      { f: 440, t: 0 },
      { f: 554.37, t: 0.08 },
      { f: 659.25, t: 0.16 },
      { f: 880, t: 0.24 },
    ];
    notes.forEach(n => {
      this.playTone(n.f, 'sine', 0.25, 0.12, n.t);
    });
  }
}

const rawSounds = new SoundManager();

// Safe Proxy to prevent ANY missing sound method from crashing React
export const sounds = new Proxy(rawSounds, {
  get(target, prop) {
    if (prop in target) {
      return typeof target[prop] === 'function' ? target[prop].bind(target) : target[prop];
    }
    // Fallback if an unknown sound method is called
    return () => {
      try {
        target.playClick();
      } catch {
        // ignore
      }
    };
  }
});

export default sounds;
