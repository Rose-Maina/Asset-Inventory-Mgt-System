import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "..//Pages/Admin/Dashboard";
import Users from "../Pages/Admin/Users";
import Department from "../Pages/Admin/Department";
import Category from "../Pages/Admin/Category";
import Assets from "../Pages/Admin/Assets";
import Request from "../Pages/Admin/Request";
import Profile from "../Pages/Admin/Profile";
import Logout from "../Pages/Admin/Logout";
import Login from "./Login";



function NavPage() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/department" element={<Department/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/assets" element={<Assets/>}/>
                <Route path="/request" element={<Request/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default NavPage;