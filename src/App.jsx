// import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/homepage";
import Signup from "./pages/signup";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import CreateCourse from "./pages/createcourse";
import EnrollCourses from "./pages/enrolledcourse";
import EditProfile from "./pages/editprofile";
import Profile from "./pages/profile";
import Download from "./pages/downloads";  

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/create-course" element={<CreateCourse/>} />
        <Route path="/enroll-courses" element={<EnrollCourses/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/download" element={<Download/>} />
      </Routes>
    </BrowserRouter>
  );
}