import React from "react";
import {Route, Routes} from "react-router-dom";
import StaffDashboard from "../Pages/Employee/StaffDashboard";
import StaffAssets from "../Pages/Employee/StaffAssets";
import StaffRequest from "../Pages/Employee/StaffRequest";
import StaffProfile from "../Pages/Employee/StaffProfile";
import Logout from "../Pages/Employee/Logout";



function StaffNavPage() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<StaffDashboard/>}/>
                <Route path="/assets" element={<StaffAssets/>}/>
                <Route path="/request" element={<StaffRequest/>}/>
                <Route path="/profile" element={<StaffProfile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default StaffNavPage;
