import {
  LayoutDashboard,
  BookOpen,
  Upload,
  Download,
  User,
} from "lucide-react";

export const sidebarMenus = {
  teacher: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Courses", icon: BookOpen },
    { label: "Manage Uploads", icon: Upload },
    { label: "Profile", icon: User },
  ],
  student: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Courses", icon: BookOpen },
    { label: "Downloads", icon: Download },
    { label: "Profile", icon: User },
  ],
};
