import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "../Admin/Users/Users";
import Department from "../Admin/Departments/Department";
import Category from "../Admin/Categories/Category";
import Assets from "../Admin/Assets/Assets";
import Request from "../Admin/Requests/Request";
import Profile from "./Profile";
import Logout from "./Logout";
import AddAsset from "../Admin/Assets/AddAsset";
import EditAsset from "./Assets/EditAsset";



function NavPage() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Login/>}/> */}
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/department" element={<Department/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/assets" element={<Assets/>}/>
                <Route path="/assets/create" element={<EditAsset/>}/>
                <Route path="/assets/edit/:assetid" element={<AddAsset/>}/>
                <Route path="/request" element={<Request/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default NavPage;