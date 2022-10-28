import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "..//Pages/Procurement/Dashboard";
import Category from "../Pages/Procurement/Category";
import AssetList from "../Pages/Procurement/AssetList";
import RequestList from "../Pages/Procurement/RequestList";
import Profile from "../Pages/Procurement/Profile";
import Logout from "../Pages/Procurement/Logout";


function NavPage() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/assets" element={<AssetList/>}/>
                <Route path="/request" element={<RequestList/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default NavPage;