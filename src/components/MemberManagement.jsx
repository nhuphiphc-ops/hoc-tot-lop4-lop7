import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Shield, 
  Crown, 
  GraduationCap, 
  BookOpen, 
  User, 
  Zap, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  Search, 
  Filter, 
  Edit3, 
  Key, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Unlock, 
  Layers, 
  Calendar, 
  Clock, 
  UserCheck,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const MemberManagement = () => {
  const { 
    membersList, 
    activeAdminUser, 
    addMember, 
    updateMemberPermissions, 
    updateMemberPassword, 
    toggleMemberStatus, 
    deleteMember, 
    switchActiveUser,
    availableClasses,
    systemRoles 
  } = useLearning();

  // New Member Form State
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    role: 'thanh_vien_bks',
    assignedClasses: ['lop_6a', 'lop_7a', 'lop_7b']
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState('');
  const [formErrorMessage, setFormErrorMessage] = useState('');

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterClass, setFilterClass] = useState('all');

  // Modals State
  const [editingMember, setEditingMember] = useState(null);
  const [passwordModalMember, setPasswordModalMember] = useState(null);
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [deleteConfirmMember, setDeleteConfirmMember] = useState(null);
  const [previewUser, setPreviewUser] = useState(null);

  // Helper to get Role Icon
  const getRoleIcon = (roleId) => {
    switch (roleId) {
      case 'truong_bks': return <Crown className="w-4 h-4 text-purple-400" />;
      case 'thanh_vien_bks': return <Shield className="w-4 h-4 text-sky-400" />;
      case 'giang_vien': return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'chu_nhiem': return <BookOpen className="w-4 h-4 text-amber-400" />;
      case 'admin': return <Zap className="w-4 h-4 text-rose-400" />;
      default: return <User className="w-4 h-4 text-slate-400" />;
    }
  };

  // Helper to get Role Details
  const getRoleDetails = (roleId) => {
    return systemRoles.find(r => r.id === roleId) || {
      id: roleId,
      label: 'Khách',
      color: 'border-slate-500/50 bg-slate-500/10 text-slate-300',
      badgeColor: 'bg-slate-600'
    };
  };

  // Class Selection Handlers for Form
  const handleToggleClass = (classId) => {
    sounds.playClick();
    setFormData(prev => {
      const isSelected = prev.assignedClasses.includes(classId);
      let updated;
      if (isSelected) {
        updated = prev.assignedClasses.filter(c => c !== classId);
      } else {
        updated = [...prev.assignedClasses, classId];
      }
      return { ...prev, assignedClasses: updated };
    });
  };

  const handleSelectAllClasses = () => {
    sounds.playClick();
    setFormData(prev => ({
      ...prev,
      assignedClasses: availableClasses.map(c => c.id)
    }));
  };

  const handleDeselectAllClasses = () => {
    sounds.playClick();
    setFormData(prev => ({
      ...prev,
      assignedClasses: []
    }));
  };

  const handleSelectGradeGroup = (groupName) => {
    sounds.playClick();
    const groupClasses = availableClasses.filter(c => c.group === groupName).map(c => c.id);
    setFormData(prev => {
      const isAllGroupSelected = groupClasses.every(c => prev.assignedClasses.includes(c));
      let updated;
      if (isAllGroupSelected) {
        updated = prev.assignedClasses.filter(c => !groupClasses.includes(c));
      } else {
        const set = new Set([...prev.assignedClasses, ...groupClasses]);
        updated = Array.from(set);
      }
      return { ...prev, assignedClasses: updated };
    });
  };

  // Submit Add Member
  const handleSubmitNewMember = (e) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setFormErrorMessage('Vui lòng nhập Email người nhận!');
      sounds.playWrong();
      return;
    }
    if (!formData.email.includes('@')) {
      setFormErrorMessage('Định dạng Email không hợp lệ!');
      sounds.playWrong();
      return;
    }
    if (!formData.fullName.trim()) {
      setFormErrorMessage('Vui lòng nhập Họ và tên thành viên!');
      sounds.playWrong();
      return;
    }
    if (!formData.password.trim() || formData.password.length < 6) {
      setFormErrorMessage('Mật khẩu cấp phải có tối thiểu 6 ký tự!');
      sounds.playWrong();
      return;
    }
    if (formData.assignedClasses.length === 0) {
      setFormErrorMessage('Vui lòng gán ít nhất 1 lớp học truy cập cho thành viên!');
      sounds.playWrong();
      return;
    }

    // Check duplicate email
    if (membersList.some(m => m.email.toLowerCase() === formData.email.trim().toLowerCase())) {
      setFormErrorMessage('Email này đã tồn tại trong hệ thống thành viên!');
      sounds.playWrong();
      return;
    }

    sounds.playVictory();
    addMember(formData);

    setFormSuccessMessage(`Đã khởi tạo và gửi lời mời thành công tới: ${formData.email}!`);
    setFormErrorMessage('');

    // Reset Form
    setFormData({
      email: '',
      fullName: '',
      password: '',
      role: 'thanh_vien_bks',
      assignedClasses: ['lop_6a', 'lop_7a', 'lop_7b']
    });

    setTimeout(() => {
      setFormSuccessMessage('');
    }, 5000);
  };

  // Filter Members
  const filteredMembers = membersList.filter(member => {
    const matchSearch = 
      member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchRole = filterRole === 'all' || member.role === filterRole;
    
    const matchClass = filterClass === 'all' || 
      (member.assignedClasses.includes('all') || member.assignedClasses.includes(filterClass));

    return matchSearch && matchRole && matchClass;
  });

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-nunito p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-sky-500/20 flex-shrink-0">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
                Security & RBAC
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Firestore Ready
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Quản Lý Thành Viên & Phân Quyền Lớp Học 🛡️
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-400">
              Thiết lập tài khoản, phân bổ vai trò Ban Kiểm Soát & gán phạm vi lớp học được phép xem dữ liệu
            </p>
          </div>
        </div>

        {/* Active User Indicator */}
        <div className="flex items-center gap-3 bg-[#1E293B] border border-slate-700/80 rounded-2xl p-3 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-sm">
            {activeAdminUser?.fullName?.charAt(0) || 'A'}
          </div>
          <div className="text-left">
            <div className="text-xs text-slate-400 font-bold">Đang thao tác với quyền:</div>
            <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
              <span>{activeAdminUser?.fullName}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-black">
                {getRoleDetails(activeAdminUser?.role).label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Statistics Banner */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#1E293B] border border-slate-700/70 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-black">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">{membersList.length}</div>
            <div className="text-xs font-bold text-slate-400">Tổng thành viên</div>
          </div>
        </div>

        <div className="bg-[#1E293B] border border-slate-700/70 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400">
              {membersList.filter(m => m.status === 'active').length}
            </div>
            <div className="text-xs font-bold text-slate-400">Đang hoạt động</div>
          </div>
        </div>

        <div className="bg-[#1E293B] border border-slate-700/70 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-purple-400">
              {membersList.filter(m => m.role === 'truong_bks' || m.role === 'thanh_vien_bks').length}
            </div>
            <div className="text-xs font-bold text-slate-400">Ban Kiểm Soát</div>
          </div>
        </div>

        <div className="bg-[#1E293B] border border-slate-700/70 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-amber-400">{availableClasses.length}</div>
            <div className="text-xs font-bold text-slate-400">Lớp học hệ thống</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ========================================================================= */}
        {/* SECTION 1: FORM MỜI THÀNH VIÊN MỚI (COL 12 -> 5 on LG) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1E293B] border-2 border-slate-700/80 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400"></div>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  Mời Thành Viên Mới ✨
                </h2>
                <p className="text-xs text-slate-400 font-semibold">
                  Cấp tài khoản & cấu hình quyền lớp truy cập
                </p>
              </div>
            </div>

            {/* Notification messages */}
            {formSuccessMessage && (
              <div className="mb-4 p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-bounce">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <span>{formSuccessMessage}</span>
              </div>
            )}

            {formErrorMessage && (
              <div className="mb-4 p-3.5 rounded-2xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 text-rose-400" />
                <span>{formErrorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmitNewMember} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                  Email người nhận <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="ví dụ: gv.toan@school.edu.vn"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm font-bold focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                  Họ và tên <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="ví dụ: Nguyễn Văn An"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm font-bold focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                />
              </div>

              {/* Password with Toggle */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                  Thiết lập mật khẩu cấp <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Tối thiểu 6 ký tự"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm font-bold focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Role Selector */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                  Vai trò truy cập <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {systemRoles.map((role) => {
                    const isSelected = formData.role === role.id;
                    return (
                      <button
                        type="button"
                        key={role.id}
                        onClick={() => { sounds.playClick(); setFormData({ ...formData, role: role.id }); }}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? `${role.color} border-2 shadow-sm scale-[1.02]`
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex-shrink-0">{getRoleIcon(role.id)}</div>
                        <div className="min-w-0">
                          <div className="text-xs font-black truncate text-white">{role.label}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ========================================================================= */}
              {/* PHÂN QUYỀN LỚP HỌC TRUY CẬP (MULTI-CHECKBOX) */}
              {/* ========================================================================= */}
              <div className="pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-extrabold text-slate-200 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>Gán Quyền Lớp Học Truy Cập</span>
                    <span className="text-emerald-400">({formData.assignedClasses.length} lớp)</span>
                  </label>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <button
                    type="button"
                    onClick={handleSelectAllClasses}
                    className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 text-[11px] font-black border border-sky-500/30 transition-all cursor-pointer"
                  >
                    ⚡ Tất cả lớp
                  </button>
                  <button
                    type="button"
                    onClick={handleDeselectAllClasses}
                    className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 text-[11px] font-black border border-rose-500/30 transition-all cursor-pointer"
                  >
                    ❌ Bỏ chọn tất cả
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectGradeGroup('Tiểu học')}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-[11px] font-black border border-amber-500/30 transition-all cursor-pointer"
                  >
                    🎒 Khối 4-5
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectGradeGroup('THCS')}
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-[11px] font-black border border-emerald-500/30 transition-all cursor-pointer"
                  >
                    🏫 Khối 6-9
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectGradeGroup('THPT')}
                    className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 text-[11px] font-black border border-purple-500/30 transition-all cursor-pointer"
                  >
                    🎓 Khối 10-12
                  </button>
                </div>

                {/* Multi-Checkbox Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1 select-none custom-scrollbar">
                  {availableClasses.map((cls) => {
                    const isChecked = formData.assignedClasses.includes(cls.id);
                    return (
                      <label
                        key={cls.id}
                        onClick={() => handleToggleClass(cls.id)}
                        className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-black cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-emerald-950/70 border-emerald-500/80 text-emerald-300 shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center border transition-all ${
                          isChecked
                            ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                            : 'border-slate-600 bg-slate-800'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{cls.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-slate-950 font-black text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-5 h-5" />
                <span>+ Tạo & Mời Thành Viên</span>
              </button>
            </form>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: DANH SÁCH THÀNH VIÊN CÓ QUYỀN TRUY CẬP (COL 12 -> 7 on LG) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#1E293B] border-2 border-slate-700/80 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>Danh Sách Thành Viên Có Quyền ({filteredMembers.length})</span>
                </h2>
                <p className="text-xs text-slate-400 font-semibold">
                  Quản lý phân quyền, đổi mật khẩu và cấp phát lớp học
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Tìm tên hoặc email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs font-bold focus:border-cyan-400 focus:outline-none"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <Filter className="w-3.5 h-3.5" />
                <span>Lọc theo:</span>
              </div>

              {/* Role Filter */}
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold focus:border-cyan-400 focus:outline-none"
              >
                <option value="all">Tất cả vai trò</option>
                {systemRoles.map(r => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>

              {/* Class Filter */}
              <select
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold focus:border-cyan-400 focus:outline-none"
              >
                <option value="all">Tất cả lớp học</option>
                {availableClasses.map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>

              {(filterRole !== 'all' || filterClass !== 'all' || searchTerm) && (
                <button
                  onClick={() => { setFilterRole('all'); setFilterClass('all'); setSearchTerm(''); }}
                  className="text-xs text-rose-400 hover:underline font-bold ml-auto"
                >
                  Xóa bộ lọc
                </button>
              )}
            </div>

            {/* Members Cards List */}
            <div className="space-y-3.5">
              {filteredMembers.length === 0 ? (
                <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-slate-800">
                  <Users className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-400">Không tìm thấy thành viên nào phù hợp bộ lọc!</p>
                </div>
              ) : (
                filteredMembers.map((member) => {
                  const roleDetail = getRoleDetails(member.role);
                  const isSuspended = member.status === 'suspended';
                  const isSelf = activeAdminUser?.id === member.id;

                  return (
                    <div
                      key={member.id}
                      className={`rounded-2xl border p-4 sm:p-5 transition-all ${
                        isSuspended
                          ? 'bg-slate-900/40 border-slate-800 opacity-60'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-md'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        {/* Member Identity */}
                        <div className="flex items-start gap-3.5">
                          <div className={`w-11 h-11 rounded-2xl ${roleDetail.badgeColor} text-white flex items-center justify-center font-black text-sm shadow-md flex-shrink-0`}>
                            {member.fullName.charAt(0)}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm sm:text-base font-black text-white">
                                {member.fullName}
                              </h3>
                              {isSelf && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold border border-cyan-500/30">
                                  Bạn
                                </span>
                              )}
                              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-black flex items-center gap-1 ${roleDetail.color} border`}>
                                {getRoleIcon(member.role)}
                                <span>{roleDetail.label}</span>
                              </span>
                            </div>

                            <div className="text-xs font-semibold text-slate-400 mt-0.5">
                              {member.email}
                            </div>
                          </div>
                        </div>

                        {/* Status Toggle & Simulation Switcher */}
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <button
                            onClick={() => { sounds.playClick(); switchActiveUser(member); }}
                            title="Mô phỏng phiên làm việc với tài khoản này"
                            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 flex items-center gap-1 cursor-pointer transition-all"
                          >
                            <RefreshCw className="w-3 h-3 text-cyan-400" />
                            <span>Mô phỏng xem</span>
                          </button>

                          <button
                            onClick={() => { sounds.playClick(); toggleMemberStatus(member.id); }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border cursor-pointer transition-all flex items-center gap-1 ${
                              member.status === 'active'
                                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
                                : 'bg-amber-950/60 border-amber-500/50 text-amber-400'
                            }`}
                          >
                            {member.status === 'active' ? (
                              <>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span>Hoạt động</span>
                              </>
                            ) : (
                              <>
                                <Lock className="w-3 h-3 text-amber-400" />
                                <span>Tạm khóa</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Assigned Classes Tags */}
                      <div className="mt-3.5 pt-3 border-t border-slate-800/80">
                        <div className="text-[11px] font-bold text-slate-400 mb-1.5 flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-sky-400" />
                          <span>Quyền lớp học được phân công:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {member.assignedClasses.includes('all') ? (
                            <span className="px-2.5 py-0.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40 text-[11px] font-black flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-sky-400" />
                              <span>Toàn quyền tất cả các lớp ({availableClasses.length} lớp)</span>
                            </span>
                          ) : (
                            member.assignedClasses.map(clsId => {
                              const clsObj = availableClasses.find(c => c.id === clsId);
                              return (
                                <span
                                  key={clsId}
                                  className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-bold"
                                >
                                  {clsObj?.label || clsId}
                                </span>
                              );
                            })
                          )}
                        </div>
                      </div>

                      {/* Footer Info & Action Buttons */}
                      <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-4 text-slate-500 text-[11px]">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>Tạo: {new Date(member.createdAt).toLocaleDateString('vi-VN')}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Đăng nhập: {member.lastLogin ? new Date(member.lastLogin).toLocaleTimeString('vi-VN') : 'Chưa đăng nhập'}</span>
                          </span>
                        </div>

                        {/* Action Buttons Toolbar */}
                        <div className="flex items-center gap-1.5 ml-auto">
                          {/* Edit Permissions */}
                          <button
                            onClick={() => { sounds.playClick(); setEditingMember(member); }}
                            className="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Sửa quyền</span>
                          </button>

                          {/* Change Password */}
                          <button
                            onClick={() => { 
                              sounds.playClick(); 
                              setPasswordModalMember(member); 
                              setNewPasswordInput(''); 
                              setShowNewPassword(false);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all"
                          >
                            <Key className="w-3.5 h-3.5" />
                            <span>Đổi MK</span>
                          </button>

                          {/* Delete Member (Only if not self) */}
                          {!isSelf && (
                            <button
                              onClick={() => { sounds.playWrong(); setDeleteConfirmMember(member); }}
                              className="px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Thu hồi</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: SỬA PHÂN QUYỀN LỚP HỌC (EDIT PERMISSIONS MODAL) */}
      {/* ========================================================================= */}
      {editingMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] border-2 border-slate-700 rounded-3xl p-6 max-w-xl w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">
                    Cập Nhật Phân Quyền: {editingMember.fullName}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">{editingMember.email}</p>
                </div>
              </div>
              <button
                onClick={() => setEditingMember(null)}
                className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Role Switcher in Modal */}
            <div>
              <label className="block text-xs font-extrabold text-slate-300 mb-2">Vai trò mới:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {systemRoles.map((role) => (
                  <button
                    type="button"
                    key={role.id}
                    onClick={() => { sounds.playClick(); setEditingMember({ ...editingMember, role: role.id }); }}
                    className={`p-2 rounded-xl border text-xs font-black cursor-pointer transition-all flex items-center gap-1.5 ${
                      editingMember.role === role.id
                        ? `${role.color} border-2 shadow-sm`
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    {getRoleIcon(role.id)}
                    <span className="truncate">{role.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Classes Multi-Checkbox in Modal */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold text-slate-300">
                  Lớp học được gán ({editingMember.assignedClasses.length} lớp):
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingMember({ ...editingMember, assignedClasses: availableClasses.map(c => c.id) })}
                    className="text-[11px] text-sky-400 hover:underline font-black cursor-pointer"
                  >
                    Chọn tất cả
                  </button>
                  <span className="text-slate-600">•</span>
                  <button
                    type="button"
                    onClick={() => setEditingMember({ ...editingMember, assignedClasses: [] })}
                    className="text-[11px] text-rose-400 hover:underline font-black cursor-pointer"
                  >
                    Bỏ chọn
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
                {availableClasses.map((cls) => {
                  const isChecked = editingMember.assignedClasses.includes(cls.id);
                  return (
                    <button
                      type="button"
                      key={cls.id}
                      onClick={() => {
                        sounds.playClick();
                        const updated = isChecked
                          ? editingMember.assignedClasses.filter(c => c !== cls.id)
                          : [...editingMember.assignedClasses, cls.id];
                        setEditingMember({ ...editingMember, assignedClasses: updated });
                      }}
                      className={`p-2 rounded-xl border text-xs font-black flex items-center gap-2 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600 bg-slate-800'
                      }`}>
                        {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <span className="truncate">{cls.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-700">
              <button
                type="button"
                onClick={() => setEditingMember(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={() => {
                  sounds.playVictory();
                  updateMemberPermissions(editingMember.id, {
                    role: editingMember.role,
                    assignedClasses: editingMember.assignedClasses
                  });
                  setEditingMember(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-950 font-black text-xs cursor-pointer hover:opacity-95 shadow-md"
              >
                Lưu Thay Đổi Phân Quyền
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: ĐỔI MẬT KHẨU CẤP (CHANGE PASSWORD MODAL) */}
      {/* ========================================================================= */}
      {passwordModalMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] border-2 border-slate-700 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">
                    Đổi Mật Khẩu Cấp
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">{passwordModalMember.fullName}</p>
                </div>
              </div>
              <button
                onClick={() => setPasswordModalMember(null)}
                className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 mb-1.5">
                Mật khẩu mới (Tối thiểu 6 ký tự):
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu mới..."
                  value={newPasswordInput}
                  onChange={(e) => setNewPasswordInput(e.target.value)}
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm font-bold focus:border-amber-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-700">
              <button
                onClick={() => setPasswordModalMember(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  if (newPasswordInput.length < 6) {
                    alert("Mật khẩu mới phải có tối thiểu 6 ký tự!");
                    return;
                  }
                  sounds.playVictory();
                  updateMemberPassword(passwordModalMember.id, newPasswordInput);
                  setPasswordModalMember(null);
                  alert(`Đã đổi mật khẩu thành công cho ${passwordModalMember.fullName}!`);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs cursor-pointer hover:opacity-95 shadow-md"
              >
                Xác Nhận Đổi Mật Khẩu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: THU HỒI / XÓA QUYỀN TRUY CẬP (DELETE CONFIRM MODAL) */}
      {/* ========================================================================= */}
      {deleteConfirmMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] border-2 border-rose-500/80 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center gap-3.5 text-rose-400">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Xác Nhận Thu Hồi Quyền?</h3>
                <p className="text-xs text-slate-400 font-semibold">{deleteConfirmMember.email}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-bold">
              Bạn có chắc chắn muốn xóa và thu hồi toàn bộ quyền truy cập hệ thống của thành viên <span className="text-rose-400 font-black">{deleteConfirmMember.fullName}</span> không?
            </p>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-700">
              <button
                onClick={() => setDeleteConfirmMember(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                onClick={() => {
                  sounds.playWrong();
                  deleteMember(deleteConfirmMember.id);
                  setDeleteConfirmMember(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs cursor-pointer shadow-md shadow-rose-600/30"
              >
                Xóa & Thu Hồi Quyền
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
