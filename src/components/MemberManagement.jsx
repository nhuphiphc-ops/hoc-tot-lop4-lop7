import React, { useState } from 'react';
import {
  UserPlus, Shield, Key, Trash2, Eye, EyeOff, CheckCircle2,
  X, AlertTriangle, Users, Lock, Settings, Database, Edit3,
  FileText, Download, Check, ShieldAlert
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

export const MemberManagement = () => {
  const { gradePermissions, updateGradePermissions } = useLearning();
  const [showPassword, setShowPassword] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Grade permission is device-wide (one shared config), not per-account — see updateGradePermissions.
  // Missing entries default to 'sua' (fully open) so this matches the app's default behavior.
  const getEffectivePermissions = () =>
    Object.fromEntries(PHC_MODULES.map(m => [m.id, gradePermissions[m.id] || 'sua']));

  const [users, setUsers] = useState([
    {
      id: 1,
      email: 'admin@phuchung.com.vn',
      name: 'Nguyễn Như Phi',
      role: 'admin',
      roleLabel: 'Quản trị viên',
      createdAt: '2026-07-07 10:05',
      permissions: getEffectivePermissions(),
      exportExcel: true,
      importExcel: true
    },
    {
      id: 2,
      email: 'ductaikt53a@gmail.com',
      name: 'Đào Đức Tài',
      role: 'hoc_sinh',
      roleLabel: 'Học sinh',
      createdAt: '17:04:32 26/8/2026',
      permissions: getEffectivePermissions(),
      exportExcel: true,
      importExcel: false
    }
  ]);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    role: 'khach'
  });

  const getPermissionSummary = (perms) => {
    const vals = Object.values(perms || {});
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
    if (!editingUser) return;
    const newPerms = {};
    PHC_MODULES.forEach(m => {
      newPerms[m.id] = roleId === 'khach' ? 'an' : 'sua';
    });
    setEditingUser({ ...editingUser, permissions: newPerms, role: roleId });
  };

  const setAllPermissions = (level) => {
    if (!editingUser) return;
    const newPerms = {};
    PHC_MODULES.forEach(m => newPerms[m.id] = level);
    setEditingUser({ ...editingUser, permissions: newPerms });
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 p-4 md:p-8 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-8 h-8 text-sky-400" />
          <h1 className="text-3xl font-bold text-white tracking-tight">Quản Lý Thành Viên</h1>
        </div>
        <p className="text-slate-400 text-sm mb-4">Mời người dùng mới và thu hồi quyền truy cập hệ thống của họ</p>
        
        <div className="bg-emerald-950/30 border border-emerald-800/50 rounded-lg p-3 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <p className="text-xs text-emerald-300">
            <span className="font-bold">Chế độ Firebase:</span> Tài khoản tạo ở đây là tài khoản đăng nhập thật, mật khẩu được lưu an toàn trên Firebase.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-1 bg-[#111827] border border-slate-800 rounded-xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
            <UserPlus className="w-5 h-5 text-slate-100" />
            <h2 className="text-lg font-bold text-slate-100">Mời Thành Viên Mới</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Email người nhận
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
                Thiết lập mật khẩu cấp
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Nhập mật khẩu cấp cho họ" 
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
                Vai trò truy cập
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

            <button className="w-full mt-4 bg-sky-500 hover:bg-sky-400 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-sky-500/20">
              <UserPlus className="w-4 h-4" />
              Tạo & Mời Thành Viên
            </button>
            
            <div className="flex items-center gap-1.5 mt-3 text-amber-500">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs font-semibold">Vui lòng nhập email hợp lệ!</span>
            </div>
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
                  {users.length}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Chỉ Admin mới xóa được tài khoản</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <p className="text-xs text-slate-400">
                Danh sách và phân quyền đang ở <span className="text-emerald-400 font-semibold">kho chung</span> — mọi người đăng nhập ở máy nào cũng nhận đúng quyền.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800">
                    <th className="pb-3 px-2">Email</th>
                    <th className="pb-3 px-2">Họ Tên</th>
                    <th className="pb-3 px-2">Vai Trò</th>
                    <th className="pb-3 px-2">Quyền</th>
                    <th className="pb-3 px-2">Ngày Tạo</th>
                    <th className="pb-3 px-2 text-center">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-slate-800/20 transition-colors">
                      <td className="py-4 px-2 text-slate-300">{user.email}</td>
                      <td className="py-4 px-2 font-medium text-slate-200">{user.name}</td>
                      <td className="py-4 px-2">
                        <div className="inline-flex flex-col items-center gap-1">
                          <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-950/50 border border-indigo-900/50 px-2 py-0.5 rounded flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            {user.roleLabel}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        {getPermissionSummary(user.permissions)}
                      </td>
                      <td className="py-4 px-2 text-xs text-slate-400">
                        {user.createdAt.split(' ').map((line, i) => <div key={i}>{line}</div>)}
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => setEditingUser(user)}
                            className="p-1.5 rounded bg-sky-950/50 text-sky-400 hover:bg-sky-900/50 border border-sky-900/50 transition-colors"
                            title="Phân quyền"
                          >
                            <Settings className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-1.5 rounded bg-indigo-950/50 text-indigo-400 hover:bg-indigo-900/50 border border-indigo-900/50 transition-colors"
                            title="Đổi mật khẩu"
                          >
                            <Key className="w-4 h-4" />
                          </button>
                          <button 
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

          <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 flex gap-3 text-xs text-slate-500">
            <Database className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-400 mb-1">Nguồn dữ liệu: Firebase Authentication - Cập nhật 09/09/2026 12:42</p>
              <p>Đăng nhập bằng tài khoản riêng qua Firebase Auth. Bảng phân quyền: lưu ở kho chung, mọi máy cùng áp dụng.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Permissions Modal */}
      {editingUser && (
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
                onClick={() => setEditingUser(null)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{editingUser.name}</h3>
                <p className="text-sm text-slate-400">
                  {editingUser.email} · đang dùng <span className="text-slate-300 font-semibold">mẫu quyền của vai trò {editingUser.roleLabel}</span>
                </p>
                <p className="text-xs text-amber-400 mt-2">
                  Lưu ý: bảng quyền bên dưới áp dụng cho <span className="font-semibold">toàn bộ thiết bị</span> (một cấu hình chung), không tách riêng theo từng tài khoản.
                </p>
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-400 mr-2">Áp nhanh theo mẫu vai trò:</span>
                  {ROLES.map(r => (
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
                      const perm = editingUser.permissions[mod.id] || 'an';
                      const isHidden = perm === 'an';
                      return (
                        <tr key={mod.id} className="hover:bg-slate-800/30">
                          <td className="px-4 py-3 text-slate-200 font-medium">{mod.name}</td>
                          <td className="px-4 py-3">
                            <div className="inline-flex rounded-lg border border-slate-700 p-0.5 bg-[#0F172A]">
                              <button
                                onClick={() => setEditingUser(prev => ({...prev, permissions: {...prev.permissions, [mod.id]: 'an'}}))}
                                className={"flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors " + (isHidden ? 'bg-slate-800 text-slate-200' : 'text-slate-500 hover:text-slate-300')}
                              >
                                <EyeOff className="w-3.5 h-3.5" /> Ẩn
                              </button>
                              <button
                                onClick={() => setEditingUser(prev => ({...prev, permissions: {...prev.permissions, [mod.id]: 'sua'}}))}
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

              {/* Extras */}
              <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 mb-6 space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={"w-5 h-5 rounded border flex items-center justify-center transition-colors " + (editingUser.exportExcel ? 'bg-sky-500 border-sky-500' : 'border-slate-600 group-hover:border-slate-500')}>
                    {editingUser.exportExcel && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={editingUser.exportExcel} onChange={e => setEditingUser({...editingUser, exportExcel: e.target.checked})} />
                  <span className="text-sm text-slate-300">Được <span className="font-bold text-white">xuất báo cáo</span> ra Excel và PDF</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={"w-5 h-5 rounded border flex items-center justify-center transition-colors " + (editingUser.importExcel ? 'bg-sky-500 border-sky-500' : 'border-slate-600 group-hover:border-slate-500')}>
                    {editingUser.importExcel && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={editingUser.importExcel} onChange={e => setEditingUser({...editingUser, importExcel: e.target.checked})} />
                  <span className="text-sm text-slate-300">Được <span className="font-bold text-white">nhập dữ liệu</span> từ tệp Excel <span className="text-amber-500/80">(ghi đè số liệu toàn hệ thống)</span></span>
                </label>
              </div>

              {/* Warning */}
              <div className="bg-amber-950/20 border border-amber-900/50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2 text-amber-500">
                  <AlertTriangle className="w-5 h-5" />
                  <h4 className="font-bold">Giới hạn cần biết</h4>
                </div>
                <p className="text-sm text-amber-500/80 leading-relaxed">
                  Đây là lớp chặn ở <span className="font-bold text-amber-500">giao diện</span>. Toàn bộ dữ liệu vẫn được tải về máy người xem, nên người biết dùng công cụ nhà phát triển của trình duyệt vẫn đọc được số liệu của phân hệ đã bị ẩn. Dùng để phân chia phạm vi làm việc thì đủ; đừng dựa vào đây để giữ bí mật với người có ý tìm.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-800 bg-[#111827]">
              <button 
                onClick={() => setEditingUser(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  updateGradePermissions(editingUser.permissions);
                  setUsers(users.map(u => ({ ...u, permissions: editingUser.permissions })));
                  setEditingUser(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20"
              >
                <Database className="w-4 h-4" />
                Lưu lên kho chung
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
