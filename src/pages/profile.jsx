import React from 'react';
import { User, Mail, ShieldCheck, Edit3 } from 'lucide-react';

export default function Profile() {
  // Mock data matching your dashboard state
  const userData = {
    name: "Demo User",
    email: "demo@example.com",
    role: "Student",
    accountType: "Student Account",
    initials: "D"
  };

  return (
    <div className="w-full h-full p-8 lg:p-12">
      {/* Header (Initials & Name) */}
      <div className="flex items-center gap-6 mb-12 pb-8 border-b border-gray-100">
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-blue-600/20">
          {userData.initials}
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">{userData.name}</h2>
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mt-1">
            {userData.role}
          </p>
        </div>
      </div>

      {/* Info Fields Grid */}
      <div className="max-w-3xl space-y-6 mb-10">
        
        {/* Name Info Row */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-blue-100 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
            <User size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</p>
            <p className="text-gray-700 font-semibold">{userData.name}</p>
          </div>
        </div>

        {/* Email Info Row */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-blue-100 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
            <p className="text-gray-700 font-semibold">{userData.email}</p>
          </div>
        </div>

        {/* Account Type Info Row */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-blue-100 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account Status</p>
            <p className="text-gray-700 font-semibold">{userData.accountType}</p>
          </div>
        </div>

      </div>

      {/* Action Button */}
      <div className="pt-4">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all group">
          <Edit3 size={18} className="group-hover:rotate-12 transition-transform" />
          Edit Profile
        </button>
      </div>
    </div>
  );
}