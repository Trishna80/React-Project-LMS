import React from 'react';
import { sidebarMenus } from './sidebarmenu';

export default function Sidebar({ menuType = 'student', onMenuClick, activeLabel }) {
  const menuItems = sidebarMenus[menuType] || sidebarMenus.student;

  return (
    <div className="w-64 bg-[#0015ff] text-white flex flex-col min-h-screen shadow-2xl z-20 shrink-0">
      {/* Logo Section */}
      <div className="p-8 mb-4">
        <h2 className="text-2xl font-bold tracking-tighter">LMS</h2>
        <div className="h-1 w-8 bg-blue-400 rounded-full mt-1"></div>
      </div>

      {/* Menu Links */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          
          // CRITICAL: Ensure this matches the string in StudentDashboard.jsx switch case
          const isActive = activeLabel === item.label;

          return (
            <div
              key={index}
              onClick={() => {
                console.log("Sidebar sending label:", item.label); // Debugging line
                onMenuClick(item.label);
              }}
              className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 group ${
                isActive 
                  ? "bg-white text-[#0015ff] shadow-lg shadow-blue-900/20" 
                  : "hover:bg-white/10 text-white/80 hover:text-white"
              }`}
            >
              <Icon 
                size={20} 
                className={isActive ? "text-[#0015ff]" : "opacity-70 group-hover:opacity-100"} 
              />
              <span className="font-bold text-sm tracking-wide">
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>

      {/* User Footer */}
      <div className="p-6 border-t border-white/10">
        <div className="flex items-center gap-3 px-2 text-white/70">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs shadow-inner">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-tight text-white">Demo Student</span>
            <span className="text-[10px] opacity-50">Student Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}