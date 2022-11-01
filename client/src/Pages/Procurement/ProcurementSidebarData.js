import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";


export const ProcurementSidebarData=[
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdIcons.MdDashboard />,
      },
      
      {
        title: "Category",
        path: "/category",
        icon: <MdIcons.MdCategory />,
      },
     
      {
        title: "Assets",
        path: "/assetlist",
        icon: <AiIcons.AiOutlineBars />,
      },
      {
        title: "Request",
        path: "/requestlist",
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