import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";


export const StaffSidebarData=[
      {
        title: "StaffDashboard",
        path: "/staffdashboard",
        icon: <MdIcons.MdDashboard />,
      },
     
      {
        title: "Staff Assets",
        path: "/assets",
        icon: <AiIcons.AiOutlineBars />,
      },
      {
        title: "Staff Request",
        path: "/requests",
        icon: <MdIcons.MdRequestPage />,
      },
      {
        title: "StaffProfile",
        path: "/profile",
        icon: <CgIcons.CgProfile />,
        
      },
      {
        title: "Logout",
        path: "/logout",
        icon: <MdIcons. MdLogout />,
       
      },
]