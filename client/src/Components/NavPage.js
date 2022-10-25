import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";
import Department from "../Pages/Department";
import Category from "../Pages/Category";
import Assets from "../Pages/Assets";
import Request from "../Pages/Request";
import Profile from "../Pages/Profile";
import Setting from "../Pages/Setting";
import Logout from "../Pages/Logout";
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
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default NavPage;