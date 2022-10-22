import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Department from "../pages/Department";
import Category from "../pages/Category";
import Assets from "../pages/Assets";
import Request from "../pages/Request";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import Logout from "../pages/Logout";



function NavPage() {
    return (
        <>
            <di>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/department" element={<Department/>}/>
                    <Route path="/category" element={<Category/>}/>
                    <Route path="/assets" element={<Assets/>}/>
                    <Route path="/request" element={<Request/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
            </di>
        </>
    )
}

export default NavPage;