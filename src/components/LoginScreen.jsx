import React, { useState } from 'react';
import { LogIn, UserPlus, ShieldCheck, ArrowLeft, Eye, EyeOff, AlertTriangle, Lock } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

const ROLE_LABELS = {
  admin: 'Quản trị viên',
  giao_vien: 'Giáo viên',
  phu_huynh: 'Phụ huynh',
  hoc_sinh: 'Học sinh',
  khach: 'Khách (chỉ xem)'
};

const ROLE_BADGE_COLOR = {
  admin: 'bg-rose-100 text-rose-700 border-rose-300',
  giao_vien: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  phu_huynh: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  hoc_sinh: 'bg-sky-100 text-sky-700 border-sky-300',
  khach: 'bg-slate-100 text-slate-700 border-slate-300'
};

const AVATAR_COLORS = [
  'from-pink-400 to-rose-500', 'from-amber-400 to-orange-500', 'from-emerald-400 to-teal-500',
  'from-sky-400 to-blue-500', 'from-violet-400 to-purple-500', 'from-fuchsia-400 to-pink-500'
];

const avatarColorFor = (id) => {
  let sum = 0;
  for (const ch of id) sum += ch.charCodeAt(0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
};

export const LoginScreen = () => {
  const { accounts, createAccount, login } = useLearning();
  const isFirstRun = accounts.length === 0;

  // Account-picker flow
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  // First-run setup flow
  const [setupForm, setSetupForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!selectedAccount) return;
    setError('');
    setBusy(true);
    const result = await login(selectedAccount.email, password);
    setBusy(false);
    if (!result.ok) {
      setError(result.error);
      setPassword('');
    }
  };

  const handleSetup = async (e) => {
    e.preventDefault();
    setError('');
    if (setupForm.password !== setupForm.confirm) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }
    setBusy(true);
    const result = await createAccount(
      { name: setupForm.name, email: setupForm.email, password: setupForm.password, role: 'admin' },
      { autoLogin: true }
    );
    setBusy(false);
    if (!result.ok) setError(result.error);
  };

  const wrapperClass = 'min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 flex items-center justify-center p-4';

  if (isFirstRun) {
    return (
      <div className={wrapperClass}>
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border-2 border-amber-200 p-6 sm:p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl shadow-md mb-3">
              🎓
            </div>
            <h1 className="text-xl font-black text-slate-800">Chào mừng! Hãy tạo tài khoản đầu tiên</h1>
            <p className="text-sm text-slate-500 mt-1">Tài khoản này sẽ là Quản trị viên, có toàn quyền trên hệ thống.</p>
          </div>

          <form onSubmit={handleSetup} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Họ và tên</label>
              <input
                type="text" required
                className="w-full mt-1 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
                placeholder="Nguyễn Văn A"
                value={setupForm.name}
                onChange={(e) => setSetupForm({ ...setupForm, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</label>
              <input
                type="email" required
                className="w-full mt-1 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
                placeholder="ban@giadinh.com"
                value={setupForm.email}
                onChange={(e) => setSetupForm({ ...setupForm, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mật khẩu</label>
              <input
                type="password" required minLength={4}
                className="w-full mt-1 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
                placeholder="Ít nhất 4 ký tự"
                value={setupForm.password}
                onChange={(e) => setSetupForm({ ...setupForm, password: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Xác nhận mật khẩu</label>
              <input
                type="password" required minLength={4}
                className="w-full mt-1 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
                value={setupForm.confirm}
                onChange={(e) => setSetupForm({ ...setupForm, confirm: e.target.value })}
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /> {error}
              </div>
            )}

            <button
              type="submit" disabled={busy}
              className="w-full mt-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md disabled:opacity-60"
            >
              <ShieldCheck className="w-5 h-5" /> {busy ? 'Đang tạo...' : 'Tạo tài khoản & Vào học'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (selectedAccount) {
    return (
      <div className={wrapperClass}>
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border-2 border-amber-200 p-6 sm:p-8">
          <button
            onClick={() => { setSelectedAccount(null); setPassword(''); setError(''); }}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Chọn tài khoản khác
          </button>

          <div className="flex flex-col items-center text-center mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarColorFor(selectedAccount.id)} flex items-center justify-center text-2xl font-black text-white shadow-md mb-3`}>
              {selectedAccount.name.trim().charAt(0).toUpperCase()}
            </div>
            <h1 className="text-lg font-black text-slate-800">{selectedAccount.name}</h1>
            <p className="text-xs text-slate-500">{selectedAccount.email}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mật khẩu</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'} required autoFocus
                  className="w-full border-2 border-slate-200 rounded-xl pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-amber-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /> {error}
              </div>
            )}

            <button
              type="submit" disabled={busy}
              className="w-full mt-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md disabled:opacity-60"
            >
              <LogIn className="w-5 h-5" /> {busy ? 'Đang vào...' : 'Đăng nhập'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border-2 border-amber-200 p-6 sm:p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl shadow-md mb-3">
            🎓
          </div>
          <h1 className="text-xl font-black text-slate-800">Bạn là ai nhỉ?</h1>
          <p className="text-sm text-slate-500 mt-1">Chọn tài khoản của bạn để tiếp tục</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {accounts.map((acc) => (
            <button
              key={acc.id}
              onClick={() => { setSelectedAccount(acc); setError(''); }}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${avatarColorFor(acc.id)} flex items-center justify-center text-lg font-black text-white shadow-sm`}>
                {acc.name.trim().charAt(0).toUpperCase()}
              </div>
              <span className="text-xs font-bold text-slate-700 leading-tight text-center line-clamp-2">{acc.name}</span>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${ROLE_BADGE_COLOR[acc.role] || 'bg-slate-100 text-slate-700 border-slate-300'}`}>
                {ROLE_LABELS[acc.role] || acc.role}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-6 justify-center">
          <Lock className="w-3.5 h-3.5" />
          <span>Đăng nhập cục bộ trên thiết bị này — dùng để phân chia phạm vi học tập giữa các thành viên trong nhà.</span>
        </div>
      </div>
    </div>
  );
};
