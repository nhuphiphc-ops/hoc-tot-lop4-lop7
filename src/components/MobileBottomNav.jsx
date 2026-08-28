import React from 'react';
import { 
  Compass, 
  BookOpen, 
  RotateCcw, 
  BarChart3, 
  Award 
} from 'lucide-react';
import sounds from '../utils/soundEffects';

export const MobileBottomNav = ({ currentTab, onSelectTab, wrongCount = 0 }) => {
  const tabs = [
    { id: 'roadmap', label: 'Lộ Trình', icon: Compass },
    { id: 'practice', label: 'Luyện Thi', icon: BookOpen },
    { id: 'wrong', label: 'Sửa Sai', icon: RotateCcw, badge: wrongCount > 0 ? wrongCount : null },
    { id: 'dashboard', label: 'Phụ Huynh', icon: BarChart3 },
    { id: 'badges', label: 'Bộ Sưu Tập', icon: Award },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t-2 border-amber-200 shadow-lg px-2 py-1.5 safe-bottom">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                sounds.playClick();
                onSelectTab(tab.id);
              }}
              className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all relative cursor-pointer ${
                isActive
                  ? 'text-amber-900 font-black'
                  : 'text-slate-500 font-bold hover:text-slate-800'
              }`}
            >
              {/* Active Pill Indicator */}
              <div className={`p-1 rounded-xl transition-transform ${
                isActive ? 'bg-amber-100 scale-110 shadow-xs' : ''
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-amber-600 stroke-[2.5]' : 'stroke-[2]'}`} />
              </div>

              <span className="text-[10px] leading-tight mt-0.5 whitespace-nowrap">
                {tab.label}
              </span>

              {/* Badge for Wrong Questions */}
              {tab.badge && (
                <span className="absolute top-0.5 right-2 px-1.5 py-0.2 bg-rose-500 text-white font-black text-[9px] rounded-full shadow-xs animate-bounce">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
