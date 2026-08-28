import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, CheckCircle, Share, PlusSquare } from 'lucide-react';
import sounds from '../utils/soundEffects';

export const InstallAppBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode (already installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isStandalone) {
      return;
    }

    // Check if dismissed before
    const dismissed = localStorage.getItem('toan_pwa_banner_dismissed');
    if (dismissed && Date.now() - Number(dismissed) < 1000 * 60 * 60 * 24 * 3) {
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    if (isIosDevice) {
      setShowBanner(true);
    }

    // Listen for beforeinstallprompt on Android / Chromium
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    sounds.playClick();
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } else {
      setShowIOSModal(true);
    }
  };

  const handleDismiss = () => {
    sounds.playClick();
    setShowBanner(false);
    localStorage.setItem('toan_pwa_banner_dismissed', Date.now().toString());
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-3 sm:px-4 py-2 shadow-md flex items-center justify-between gap-2 z-30 relative animate-slide-down">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-black flex-1 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-base sm:text-lg flex-shrink-0">
            📱
          </div>
          <p className="truncate">
            <span className="font-extrabold">Cài đặt App trên điện thoại</span> • Học nhanh, mượt mà và không lo mất bài!
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3 py-1 bg-white hover:bg-amber-50 text-amber-900 font-black text-xs rounded-xl shadow-sm transition-all btn-bouncy flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-amber-600" />
            <span>Cài App</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            title="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* iOS Safari Install Guide Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border-3 border-amber-300 shadow-2xl space-y-4 text-slate-800 text-center animate-scale-in">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-3xl shadow-sm">
              📲
            </div>

            <h3 className="text-lg font-black text-slate-800">
              Cách Cài Đặt App Trên iPhone / iPad
            </h3>

            <div className="text-left space-y-2.5 text-xs sm:text-sm font-bold text-slate-600 bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-amber-950 font-black text-xs flex items-center justify-center flex-shrink-0">1</span>
                <span>Bấm vào nút <strong className="text-blue-600 inline-flex items-center gap-1">Chia sẻ <Share className="w-3.5 h-3.5" /></strong> ở thanh dưới cùng Safari.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-amber-950 font-black text-xs flex items-center justify-center flex-shrink-0">2</span>
                <span>Cuộn xuống và chọn <strong className="text-slate-800 inline-flex items-center gap-1">Thêm vào MH chính <PlusSquare className="w-3.5 h-3.5" /></strong> (Add to Home Screen).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-amber-950 font-black text-xs flex items-center justify-center flex-shrink-0">3</span>
                <span>Bấm <strong className="text-emerald-700">Thêm (Add)</strong> ở góc trên bên phải màn hình.</span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm rounded-2xl shadow-bouncy-sm btn-bouncy"
            >
              Đã Hiểu
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InstallAppBanner;
