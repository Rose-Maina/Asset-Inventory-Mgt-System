import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "../Admin/Users/Users";
import Department from "../Admin/Departments/Department";
import Category from "../Admin/Categories/Category";
import Assets from "../Admin/Assets/Assets";
import Request from "../Admin/Requests/Requests";
import Profile from "./Profile";
import Logout from "./Logout";
import AddAsset from "../Admin/Assets/AddAsset";
import EditAsset from "../Admin/Assets/EditAsset";
import AddRequest from "../Admin/Requests/AddRequest";
import EditRequest from "../Admin/Requests/EditRequest";
import ViewAsset from "../Admin/Assets/ViewAsset";



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
                <Route path="/asset/create" element={<AddAsset/>}/>
                <Route path="/assets/view/:assetid" element={<ViewAsset/>}/>
                <Route path="/assets/edit/:assetid" element={<EditAsset/>}/>
                <Route path="/requests" element={<Request/>}/>
                <Route path="/request/create" element={<AddRequest/>}/>
                <Route path="/requests/edit/:requestid" element={<EditRequest/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default NavPage;