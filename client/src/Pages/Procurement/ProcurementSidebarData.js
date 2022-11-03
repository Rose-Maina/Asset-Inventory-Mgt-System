import * as FaIcons from "react-icons/fa";
// import * as FaIcons from "react-icons/fa";
// import * as FcIcons from "react-icons/fc";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";


export const ProcurementSidebarData=[
      {
        title: "Dashboard",
        path: "/procurementdashboard",
        icon: <MdIcons.MdDashboard />,
      },

      {
        title: "Users",
        path: "/userslist",
        icon: <FaIcons.FaUsers />,
      },
      {
        title: "Department",
        path: "/departmentlist",
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
        path: "/procurementprofile",
        icon: <CgIcons.CgProfile />,
        
      },
      
      {
        title: "Logout",
        path: "/logout",
        icon: <MdIcons. MdLogout />,
       
      },
]