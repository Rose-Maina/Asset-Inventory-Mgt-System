import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";


export const SidebarData=[
    // {
    //     title: "Home",
    //     path: "/",
    //     icon: <FaIcons.FaHome />,
    //   },
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdIcons.MdDashboard />,
      },
      
      {
        title: "Users",
        path: "/users",
        icon: <FaIcons.FaUsers />,
      },
      {
        title: "Department",
        path: "/department",
        icon: <FcIcons.FcDepartment />,
      },
      {
        title: "Category",
        path: "/category",
        icon: <MdIcons.MdCategory />,
      },
     
      {
        title: "Assets",
        path: "/assets",
        icon: <AiIcons.AiOutlineBars />,
      },
      {
        title: "Request",
        path: "/requests",
        icon: <MdIcons.MdRequestPage />,
      },
      {
        title: "Profile",
        path: "/profile",
        icon: <CgIcons.CgProfile />,
        
      },
      {
        title: "Logout",
        path: "/logout",
        icon: <MdIcons. MdLogout />,
       
      },
]