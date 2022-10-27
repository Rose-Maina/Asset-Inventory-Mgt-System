import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";


export const SidebarData=[
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdIcons.MdDashboard />,
      },
     
      {
        title: "User Assets",
        path: "/assets",
        icon: <AiIcons.AiOutlineBars />,
      },
      {
        title: "User Request",
        path: "/request",
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