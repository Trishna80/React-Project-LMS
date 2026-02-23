import React from 'react';
import Sidebar from "../components/Sidebar";
import { User, Mail, Camera } from 'lucide-react';

export default function EditProfile() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 1. Consistent Sidebar */}
      <Sidebar menuType="student" />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Scrollable Content Container */}
        <div className="p-8 lg:p-12 overflow-y-auto">
          
          {/* Page Title */}
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Edit Profile</h1>
          </header>

          {/* MAIN FLOATING CARD */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-white p-8 lg:p-12 max-w-4xl relative overflow-hidden">
            
            {/* Decorative Blue Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-10 -mt-10 opacity-50"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-gray-700 mb-8">Personal Information</h2>
              
              <form className="space-y-6">
                
                {/* Full Name Field */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-500 mb-2 ml-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-blue-600/20 focus:ring-4 focus:ring-blue-600/5 transition-all text-gray-700 font-medium"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-500 mb-2 ml-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-blue-600/20 focus:ring-4 focus:ring-blue-600/5 transition-all text-gray-700 font-medium"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6">
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    Save Changes
                  </button>
                  <button 
                    type="button"
                    className="bg-gray-100 text-gray-500 px-10 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}