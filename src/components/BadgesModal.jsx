import React, { useState } from 'react';
import { 
  Award, 
  Lock, 
  Sparkles, 
  Footprints, 
  ShieldCheck, 
  Zap, 
  Crown, 
  Flame, 
  Star,
  BookOpen,
  Feather,
  Coins,
  ShoppingBag,
  CheckCircle2,
  Calculator,
  BookMarked,
  GraduationCap
} from 'lucide-react';
import { BADGE_DEFINITIONS, SHOP_MASCOTS, useLearning } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const BadgesModal = () => {
  const { 
    unlockedBadges, 
    totalStars, 
    coins, 
    profile, 
    unlockedMascots, 
    buyShopMascot 
  } = useLearning();

  const [activeTab, setActiveTab] = useState('badges'); // 'badges' | 'shop'
  const [shopFeedback, setShopFeedback] = useState(null);

  const getBadgeIcon = (iconName, isUnlocked) => {
    const props = { className: `w-8 h-8 ${isUnlocked ? 'text-amber-950' : 'text-slate-400'}` };
    switch (iconName) {
      case 'Footprints': return <Footprints {...props} />;
      case 'Award': return <Award {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Star': return <Star {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Feather': return <Feather {...props} />;
      case 'Calculator': return <Calculator {...props} />;
      case 'BookMarked': return <BookMarked {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      default: return <Award {...props} />;
    }
  };

  const handleBuyMascot = (mascot) => {
    const res = buyShopMascot(mascot.id, mascot.price);
    setShopFeedback(res);
    setTimeout(() => {
      setShopFeedback(null);
    }, 3500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-3xl p-6 sm:p-8 text-white shadow-bouncy">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-xl">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider mb-2 inline-block">
              Phòng Truyền Thống & Cửa Hàng Vinh Danh
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mb-1 text-slate-900">
              Bộ Sưu Tập & Cửa Hàng Đổi Thưởng 🏆
            </h1>
            <p className="text-xs sm:text-sm font-bold text-amber-950">
              Tích lũy điểm số, thu thập sao và dùng Xu thưởng để mở khóa các linh vật thần thoại & danh hiệu vinh danh độc quyền!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/30 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 text-center">
              <div className="text-[11px] font-black text-amber-950">HUY HIỆU</div>
              <div className="text-xl font-black text-slate-900">
                {unlockedBadges.length} / {BADGE_DEFINITIONS.length}
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 text-center">
              <div className="text-[11px] font-black text-amber-950">XU HIỆN CÓ</div>
              <div className="text-xl font-black text-yellow-950 flex items-center justify-center gap-1">
                <Coins className="w-5 h-5 text-yellow-300 fill-yellow-400" />
                <span>{coins}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Switch Tabs */}
      <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-2">
        <button
          onClick={() => { sounds.playClick(); setActiveTab('badges'); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm transition-all cursor-pointer ${
            activeTab === 'badges'
              ? 'bg-amber-400 text-amber-950 shadow-sm scale-105'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Danh Hiệu & Huy Hiệu ({unlockedBadges.length}/{BADGE_DEFINITIONS.length})</span>
        </button>

        <button
          onClick={() => { sounds.playClick(); setActiveTab('shop'); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm transition-all cursor-pointer ${
            activeTab === 'shop'
              ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-sm scale-105'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Cửa Hàng Đổi Linh Vật Bằng Xu 🛍️</span>
        </button>
      </div>

      {/* Feedback Alert if in Shop */}
      {shopFeedback && (
        <div className={`p-4 rounded-2xl border-2 font-black text-sm flex items-center gap-2 animate-scale-in ${
          shopFeedback.success 
            ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
            : 'bg-rose-50 border-rose-300 text-rose-800'
        }`}>
          {shopFeedback.success ? '🎉' : '⚠️'} {shopFeedback.message}
        </div>
      )}

      {/* Badges Grid Tab */}
      {activeTab === 'badges' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BADGE_DEFINITIONS.map(badge => {
            const isUnlocked = unlockedBadges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`rounded-3xl border-3 p-5 flex items-start gap-4 transition-all ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-amber-50 to-yellow-100/60 border-amber-300 shadow-bouncy-sm'
                    : 'bg-slate-50/70 border-slate-200 opacity-60'
                }`}
              >
                {/* Badge Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                  isUnlocked 
                    ? 'bg-gradient-to-br from-amber-400 to-yellow-400' 
                    : 'bg-slate-200'
                }`}>
                  {getBadgeIcon(badge.icon, isUnlocked)}
                </div>

                {/* Badge Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className={`font-black text-base ${isUnlocked ? 'text-slate-800' : 'text-slate-500'}`}>
                      {badge.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 leading-snug mb-2">
                    {badge.desc}
                  </p>

                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                      <Sparkles className="w-3 h-3 text-emerald-600" /> Đã đạt được
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      <Lock className="w-3 h-3" /> Chưa mở khóa
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Shop Tab */}
      {activeTab === 'shop' && (
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-4 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center justify-between flex-wrap gap-2">
            <span>🪙 Mỗi bài làm đạt điểm cao sẽ giúp bé tích lũy thêm Xu để đổi quà!</span>
            <span className="font-extrabold text-emerald-700">Số dư hiện tại: {coins} Xu</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SHOP_MASCOTS.map((mascot) => {
              const isOwned = (unlockedMascots || []).includes(mascot.id);
              const isEquipped = profile.mascot === mascot.id;
              const canAfford = coins >= mascot.price;

              return (
                <div
                  key={mascot.id}
                  className={`rounded-3xl border-3 p-5 flex flex-col justify-between transition-all ${
                    isEquipped
                      ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-300'
                      : isOwned
                      ? 'bg-white border-emerald-300 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl p-2 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
                      {mascot.emoji}
                    </span>
                    <div>
                      <h4 className="font-black text-base text-slate-800">
                        {mascot.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500">
                        {mascot.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="font-black text-sm text-yellow-900 flex items-center gap-1">
                      {mascot.price === 0 ? (
                        <span className="text-xs text-slate-400">Miễn phí</span>
                      ) : (
                        <>
                          <Coins className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                          <span>{mascot.price} Xu</span>
                        </>
                      )}
                    </div>

                    {isEquipped ? (
                      <span className="px-3 py-1.5 bg-amber-400 text-amber-950 font-black text-xs rounded-xl shadow-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đang dùng
                      </span>
                    ) : isOwned ? (
                      <button
                        onClick={() => handleBuyMascot(mascot)}
                        className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
                      >
                        Chọn dùng
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBuyMascot(mascot)}
                        disabled={!canAfford}
                        className={`px-3 py-1.5 font-black text-xs rounded-xl transition-all shadow-xs ${
                          canAfford
                            ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950 hover:scale-105 cursor-pointer'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {canAfford ? 'Đổi ngay' : 'Chưa đủ Xu'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
