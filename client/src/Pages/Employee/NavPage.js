import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Employee/Dashboard";
import UserAssets from "../Pages/Employee/UserAssets";
import UserRequest from "../Pages/Employee/UserRequest";
import Profile from "../Pages/Employee/Profile";
import Logout from "../Pages/Employee/Logout";



function NavPage() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/assets" element={<UserAssets/>}/>
                <Route path="/request" element={<UserRequest/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default NavPage;
