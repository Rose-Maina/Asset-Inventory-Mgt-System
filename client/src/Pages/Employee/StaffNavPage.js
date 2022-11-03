import React from "react";
import {Route, Routes} from "react-router-dom";
import Requests from "../Admin/Requests/Requests";
import StaffProfile from "./StaffProfile";
import StaffDashboard from "./StaffDashboard";
import Logout from "../Admin/Logout";


function StaffNavPage() {
    return (
        <>
            <Routes>
                <Route path="/staffdashboard" element={<StaffDashboard/>}/>
                <Route path="/requests" element={<Requests/>}/>
                <Route path="/staffprofile" element={<StaffProfile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default StaffNavPage;
