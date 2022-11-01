import React from "react";
import {Route, Routes} from "react-router-dom";
import StaffDashboard from "./StaffDashboard";
import StaffAssets from "./StaffAssets";
import StaffRequest from "./StaffRequest";
import StaffProfile from "./StaffProfile";
import Logout from "./Logout";



function StaffNavPage() {
    return (
        <>
            <Routes>
                <Route path="/staffdashboard" element={<StaffDashboard/>}/>
                <Route path="/staffassets" element={<StaffAssets/>}/>
                <Route path="/staffrequest" element={<StaffRequest/>}/>
                <Route path="/staffprofile" element={<StaffProfile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default StaffNavPage;
