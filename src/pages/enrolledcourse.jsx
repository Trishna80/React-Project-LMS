export default function EnrolledCourses() {
  const courses = [
    { title: "Web Engineering", code: "CS301" },
    { title: "Software Engineering", code: "CS302" },
    { title: "Database Systems", code: "CS303" },
  ];

  return (
    /* Background wrapper to provide contrast for the "lift" */
    <div className="w-full bg-gray-100/50 p-4 min-h-full">
      
      {/* Main Overlapping Card */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white p-8 lg:p-12 transform -mt-2">
        
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Enroll Courses</h1>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full mt-2"></div>
        </header>

        {/* Available Courses Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-bold text-gray-700">Available Courses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="group bg-[#f8f9ff] p-8 rounded-[2rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 font-bold text-sm mt-1 tracking-widest uppercase">
                    {course.code}
                  </p>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 active:scale-95 transition-all">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* My Enrolled Courses Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-6">My Enrolled Courses</h2>
          <div className="bg-gray-50/50 rounded-[2rem] p-16 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <p className="text-gray-400 font-semibold italic">
              Your learning journey is waiting. <br />
              Enroll in a course to get started.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}