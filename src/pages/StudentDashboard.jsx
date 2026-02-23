import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import EnrolledCourses from "./enrolledcourse";
import DownloadPage from "./downloads"; // Renamed import to avoid icon conflict
import Profile from "./profile"; 
import { BookOpen, FileText, Download as DownloadIcon, Bell } from "lucide-react";

export default function StudentDashboard() {
  const [activeView, setActiveView] = useState("Dashboard");

  const renderContent = () => {
    switch (activeView) {
      case "Dashboard":
        return <EnrolledCourses />; 
      case "My Courses":
        return <EnrolledCourses />; 
      case "Downloads": // <--- CHANGED FROM "Download" TO "Downloads"
        return <DownloadPage />;
      case "Profile":
        return <Profile />;
      default:
        return <EnrolledCourses />;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar 
        menuType="student" 
        activeLabel={activeView} 
        onMenuClick={(label) => setActiveView(label)} 
      />

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex justify-between items-center p-8 pb-4">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{activeView}</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
            Logout
          </button>
        </div>

        {activeView === "Dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 mb-4">
            <StatCard title="My Courses" value="4" icon={<BookOpen />} color="bg-blue-600" />
            <StatCard title="Available Notes" value="18" icon={<FileText />} color="bg-green-600" />
            <StatCard title="Downloads" value="9" icon={<DownloadIcon />} color="bg-purple-600" />
            <StatCard title="Updates" value="3" icon={<Bell />} color="bg-orange-600" />
          </div>
        )}

        <main className="flex-1 p-8 pt-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white min-h-[calc(100vh-250px)] overflow-hidden">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}