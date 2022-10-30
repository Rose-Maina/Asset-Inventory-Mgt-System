import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users/Users";
import Department from "./Departments/Department";
import Category from "./Categories/Category"

import Assets from "./Assets/Assets";
import Request from "./Requests/Request"
import Profile from "./Profile";
import Logout from "./Logout";
// import Login from "../../Components/Login";




function NavPage() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Login/>}/> */}
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/department/*" element={<Department/>}/>

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