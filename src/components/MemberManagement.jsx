import React, { useState } from 'react';
import {
  UserPlus, Shield, Key, Trash2, Eye, EyeOff, CheckCircle2,
  X, AlertTriangle, Users, Lock, Settings, Database, Edit3,
  ShieldAlert, ShieldOff
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

const PHC_MODULES = [
  { id: 'lop1',  name: 'Lớp 1  — Tiểu học' },
  { id: 'lop2',  name: 'Lớp 2  — Tiểu học' },
  { id: 'lop3',  name: 'Lớp 3  — Tiểu học' },
  { id: 'lop4',  name: 'Lớp 4  — Tiểu học' },
  { id: 'lop5',  name: 'Lớp 5  — Tiểu học' },
  { id: 'lop6',  name: 'Lớp 6  — THCS' },
  { id: 'lop7',  name: 'Lớp 7  — THCS' },
  { id: 'lop8',  name: 'Lớp 8  — THCS' },
  { id: 'lop9',  name: 'Lớp 9  — THCS' },
  { id: 'lop10', name: 'Lớp 10 — THPT' },
  { id: 'lop11', name: 'Lớp 11 — THPT' },
  { id: 'lop12', name: 'Lớp 12 — THPT' },
];

const ROLES = [
  { id: 'admin',      label: 'Quản trị viên (Admin)' },
  { id: 'giao_vien',  label: 'Giáo viên' },
  { id: 'phu_huynh',  label: 'Phụ huynh' },
  { id: 'hoc_sinh',   label: 'Học sinh' },
  { id: 'khach',      label: 'Khách (Chỉ xem)' },
];

const roleLabelOf = (roleId) => ROLES.find(r => r.id === roleId)?.label || roleId;

export const MemberManagement = () => {
  const { accounts, currentAccount, createAccount, updateAccountPermissions, deleteAccount, changeAccountPassword } = useLearning();

  const [showPassword, setShowPassword] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null); // local working copy of permissions while modal is open
  const [passwordAccount, setPasswordAccount] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formData, setFormData] = useState({ email: '', name: '', password: '', role: 'khach' });
  const [formError, setFormError] = useState('');
  const [creating, setCreating] = useState(false);

  if (currentAccount?.role !== 'admin') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="bg-white border-2 border-rose-200 rounded-2xl p-8 max-w-md text-center shadow-lg">
          <ShieldOff className="w-10 h-10 text-rose-400 mx-auto mb-3" />
          <h2 className="text-lg font-black text-slate-800 mb-1">Không có quyền truy cập</h2>
          <p className="text-sm text-slate-500">Chỉ tài khoản Quản trị viên mới xem được trang Quản Lý Thành Viên.</p>
        </div>
      </div>
    );
  }

  const getPermissionSummary = (account) => {
    if (account.role === 'admin') {
      return (
        <div className="flex flex-col text-xs text-slate-300">
          <span className="font-semibold text-rose-400">Toàn quyền</span>
          <span className="text-slate-500 text-[10px]">Admin luôn thấy mọi lớp</span>
        </div>
      );
    }
    const vals = Object.values(account.permissions || {});
    const an = vals.filter(v => v === 'an').length;
    const sua = vals.length - an;
    return (
      <div className="flex flex-col text-xs text-slate-300">
        <span><span className="font-semibold text-sky-400">{sua}</span> sửa - <span className="text-slate-400">{an}</span> ẩn</span>
        <span className="text-slate-500 text-[10px]">/{PHC_MODULES.length} lớp</span>
      </div>
    );
  };

  const applyTemplate = (roleId) => {
    if (!editingAccount) return;
    const newPerms = {};
    PHC_MODULES.forEach(m => { newPerms[m.id] = roleId === 'khach' ? 'an' : 'sua'; });
    setEditingAccount({ ...editingAccount, permissions: newPerms, role: roleId });
  };

  const setAllPermissions = (level) => {
    if (!editingAccount) return;
    const newPerms = {};
    PHC_MODULES.forEach(m => newPerms[m.id] = level);
    setEditingAccount({ ...editingAccount, permissions: newPerms });
  };

  const handleCreate = async () => {
    setFormError('');
    setCreating(true);
    const result = await createAccount(formData);
    setCreating(false);
    if (!result.ok) {
      setFormError(result.error);
      return;
    }
    setFormData({ email: '', name: '', password: '', role: 'khach' });
  };

  const handleDelete = (account) => {
    if (account.id === currentAccount.id) {
      alert('Bạn không thể tự xoá tài khoản đang đăng nhập.');
      return;
    }
    if (!window.confirm(`Xoá tài khoản "${account.name}" (${account.email})?`)) return;
    const result = deleteAccount(account.id);
    if (!result.ok) alert(result.error);
  };

  const handleSavePassword = async () => {
    setPasswordError('');
    if (!newPassword.trim()) {
      setPasswordError('Vui lòng nhập mật khẩu mới.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Mật khẩu xác nhận không khớp.');
      return;
    }
    const result = await changeAccountPassword(passwordAccount.id, newPassword);
    if (!result.ok) {
      setPasswordError(result.error);
      return;
    }
    setPasswordAccount(null);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 p-4 md:p-8 font-sans">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-8 h-8 text-sky-400" />
          <h1 className="text-3xl font-bold text-white tracking-tight">Quản Lý Thành Viên</h1>
        </div>
        <p className="text-slate-400 text-sm mb-4">Tạo tài khoản cho từng thành viên trong nhà và phân quyền lớp học cho từng người</p>

        <div className="bg-sky-950/30 border border-sky-800/50 rounded-lg p-3 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
          <p className="text-xs text-sky-300">
            <span className="font-bold">Đăng nhập cục bộ:</span> tài khoản và mật khẩu được lưu ngay trên thiết bị này (không có máy chủ), dùng để phân chia phạm vi học tập giữa các thành viên trong nhà — không phải lớp bảo mật chống người rành kỹ thuật.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column: Form */}
        <div className="lg:col-span-1 bg-[#111827] border border-slate-800 rounded-xl p-6 shadow-xl h-fit">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
            <UserPlus className="w-5 h-5 text-slate-100" />
            <h2 className="text-lg font-bold text-slate-100">Thêm Thành Viên Mới</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="vd: hocsinh@gmail.com"
                className="w-full bg-[#0F172A] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                className="w-full bg-[#0F172A] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ít nhất 4 ký tự"
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-lg pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Vai trò
              </label>
              <select
                className="w-full bg-[#0F172A] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all appearance-none"
                value={formData.role}
                onChange={e => setFormData({...formData, role: e.target.value})}
              >
                {ROLES.map(r => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleCreate}
              disabled={creating || !formData.email || !formData.name || !formData.password}
              className="w-full mt-4 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
            >
              <UserPlus className="w-4 h-4" />
              {creating ? 'Đang tạo...' : 'Tạo Tài Khoản'}
            </button>

            {formError && (
              <div className="flex items-center gap-1.5 mt-3 text-rose-500">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold">{formError}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: List */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="bg-[#111827] border border-slate-800 rounded-xl p-6 shadow-xl flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-slate-100" />
                <h2 className="text-lg font-bold text-slate-100">Thành Viên Có Quyền Truy Cập</h2>
                <span className="bg-slate-800 text-slate-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-slate-700">
                  {accounts.length}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Không thể xoá quản trị viên cuối cùng</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800">
                    <th className="pb-3 px-2">Email</th>
                    <th className="pb-3 px-2">Họ Tên</th>
                    <th className="pb-3 px-2">Vai Trò</th>
                    <th className="pb-3 px-2">Quyền</th>
                    <th className="pb-3 px-2 text-center">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {accounts.map(account => (
                    <tr key={account.id} className="hover:bg-slate-800/20 transition-colors">
                      <td className="py-4 px-2 text-slate-300">
                        {account.email}
                        {account.id === currentAccount.id && (
                          <span className="ml-2 text-[10px] font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-900/50 px-1.5 py-0.5 rounded">bạn</span>
                        )}
                      </td>
                      <td className="py-4 px-2 font-medium text-slate-200">{account.name}</td>
                      <td className="py-4 px-2">
                        <div className="inline-flex flex-col items-center gap-1">
                          <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-950/50 border border-indigo-900/50 px-2 py-0.5 rounded flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            {roleLabelOf(account.role)}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        {getPermissionSummary(account)}
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => setEditingAccount({ ...account, permissions: { ...account.permissions } })}
                            className="p-1.5 rounded bg-sky-950/50 text-sky-400 hover:bg-sky-900/50 border border-sky-900/50 transition-colors disabled:opacity-40"
                            title="Phân quyền"
                            disabled={account.role === 'admin'}
                          >
                            <Settings className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => { setPasswordAccount(account); setNewPassword(''); setConfirmPassword(''); setPasswordError(''); }}
                            className="p-1.5 rounded bg-indigo-950/50 text-indigo-400 hover:bg-indigo-900/50 border border-indigo-900/50 transition-colors"
                            title="Đổi mật khẩu"
                          >
                            <Key className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(account)}
                            className="p-1.5 rounded bg-rose-950/50 text-rose-400 hover:bg-rose-900/50 border border-rose-900/50 transition-colors"
                            title="Xóa thành viên"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Permissions Modal */}
      {editingAccount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0B1120] border border-slate-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#111827]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-500/10 rounded-lg">
                  <UserPlus className="w-5 h-5 text-sky-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Phân quyền truy cập</h2>
              </div>
              <button
                onClick={() => setEditingAccount(null)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{editingAccount.name}</h3>
                <p className="text-sm text-slate-400">
                  {editingAccount.email} · vai trò <span className="text-slate-300 font-semibold">{roleLabelOf(editingAccount.role)}</span>
                </p>
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-400 mr-2">Áp nhanh theo mẫu vai trò:</span>
                  {ROLES.filter(r => r.id !== 'admin').map(r => (
                    <button
                      key={r.id}
                      onClick={() => applyTemplate(r.id)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-colors"
                    >
                      {r.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400 mr-2">Đặt tất cả:</span>
                  <button onClick={() => setAllPermissions('an')} className="px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors">Ẩn hết</button>
                  <button onClick={() => setAllPermissions('sua')} className="px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors">Cho sửa hết</button>
                </div>
              </div>

              {/* Permissions Table */}
              <div className="border border-slate-800 rounded-xl overflow-hidden mb-6 bg-[#111827]">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#0F172A] border-b border-slate-800">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-slate-400">PHÂN HỆ</th>
                      <th className="px-4 py-3 font-semibold text-slate-400">MỨC QUYỀN</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {PHC_MODULES.map(mod => {
                      const perm = editingAccount.permissions[mod.id] || 'an';
                      const isHidden = perm === 'an';
                      return (
                        <tr key={mod.id} className="hover:bg-slate-800/30">
                          <td className="px-4 py-3 text-slate-200 font-medium">{mod.name}</td>
                          <td className="px-4 py-3">
                            <div className="inline-flex rounded-lg border border-slate-700 p-0.5 bg-[#0F172A]">
                              <button
                                onClick={() => setEditingAccount(prev => ({...prev, permissions: {...prev.permissions, [mod.id]: 'an'}}))}
                                className={"flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors " + (isHidden ? 'bg-slate-800 text-slate-200' : 'text-slate-500 hover:text-slate-300')}
                              >
                                <EyeOff className="w-3.5 h-3.5" /> Ẩn
                              </button>
                              <button
                                onClick={() => setEditingAccount(prev => ({...prev, permissions: {...prev.permissions, [mod.id]: 'sua'}}))}
                                className={"flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors " + (!isHidden ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-500 hover:text-slate-300')}
                              >
                                <Edit3 className="w-3.5 h-3.5" /> Sửa
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Warning */}
              <div className="bg-amber-950/20 border border-amber-900/50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2 text-amber-500">
                  <AlertTriangle className="w-5 h-5" />
                  <h4 className="font-bold">Giới hạn cần biết</h4>
                </div>
                <p className="text-sm text-amber-500/80 leading-relaxed">
                  Đây là lớp chặn ở <span className="font-bold text-amber-500">giao diện</span>, gắn theo tài khoản đã đăng nhập trên thiết bị này. Người biết dùng công cụ nhà phát triển của trình duyệt vẫn có thể đọc được dữ liệu đã tải về máy. Dùng để phân chia phạm vi học tập thì đủ; đừng dựa vào đây để giữ bí mật với người có ý tìm.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-800 bg-[#111827]">
              <button
                onClick={() => setEditingAccount(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  updateAccountPermissions(editingAccount.id, editingAccount.permissions, editingAccount.role);
                  setEditingAccount(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
              >
                <Database className="w-4 h-4" />
                Lưu quyền cho tài khoản này
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {passwordAccount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0B1120] border border-slate-800 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#111827]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <Key className="w-5 h-5 text-indigo-400" />
                </div>
                <h2 className="text-lg font-bold text-white">Đổi mật khẩu</h2>
              </div>
              <button
                onClick={() => setPasswordAccount(null)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-400">
                Cho <span className="text-slate-200 font-semibold">{passwordAccount.name}</span> ({passwordAccount.email})
              </p>
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Mật khẩu mới</label>
                <input
                  type="password"
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
              {passwordError && (
                <div className="flex items-center gap-1.5 text-rose-500">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold">{passwordError}</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-800 bg-[#111827]">
              <button
                onClick={() => setPasswordAccount(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={handleSavePassword}
                className="px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
              >
                <Lock className="w-4 h-4" />
                Lưu mật khẩu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
