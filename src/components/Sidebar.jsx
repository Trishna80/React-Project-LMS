import React from 'react';
import Sidebar from './Sidebar'; // Importing the rewritten sidebar we just created

const CreateCoursePage = () => {
  return (
    <div className="flex min-h-screen bg-[#f3f4f6]">
      {/* 1. Sidebar - using your specific component and menu type */}
      <Sidebar menuType="admin" />

      {/* 2. Main Content Area */}
      <main className="flex-1">
        
        {/* Top Header/Privacy Bar */}
        <div className="w-full flex justify-end items-center px-10 py-4 text-xs text-gray-400 gap-4">
          <p>A Firefox Terms of Use and updated our Privacy Notice. Please take a moment to review and accept.</p>
          <button className="bg-[#0025cc] text-white px-5 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
            Accept
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="px-12 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Course</h1>

          {/* Form Card */}
          <div className="bg-white rounded-[2rem] shadow-sm p-10 max-w-5xl border border-gray-100">
            <h2 className="text-xl font-bold text-gray-700 mb-8">New Course</h2>
            
            <div className="space-y-6">
              {/* Course Title Input */}
              <div>
                <input 
                  type="text" 
                  placeholder="Course Title" 
                  className="w-full p-4 bg-[#e8eaed] rounded-xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-700 placeholder-gray-500 transition-all"
                />
              </div>
              
              {/* Course Code Input */}
              <div>
                <input 
                  type="text" 
                  placeholder="Course Code (e.g. CS301)" 
                  className="w-full p-4 bg-[#e8eaed] rounded-xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-700 placeholder-gray-500 transition-all"
                />
              </div>
              
              {/* Course Description TextArea */}
              <div>
                <textarea 
                  placeholder="Course Description" 
                  rows="6"
                  className="w-full p-4 bg-[#e8eaed] rounded-xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-700 placeholder-gray-500 transition-all resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button className="bg-[#0015ff] text-white px-10 py-3.5 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
                  Create Course
                </button>
              </div>
            </div>
          </div>

          {/* My Courses Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h2>
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-3xl text-center text-gray-500 font-medium">
              No courses created yet
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CreateCoursePage;