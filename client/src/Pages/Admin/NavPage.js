import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "../Admin/Users/Users";
import Department from "../Admin/Departments/Department";
import Category from "../Admin/Categories/Category";
import AddCategory from "../Admin/Categories/AddCategory";
import Assets from "../Admin/Assets/Assets";
import Request from "../Admin/Requests/Requests";
import Profile from "./Profile";
import Logout from "./Logout";
import AddAsset from "../Admin/Assets/AddAsset";
import EditAsset from "../Admin/Assets/EditAsset";
import ViewAsset from "../Admin/Assets/ViewAsset";
import EditCategory from "../Admin/Categories/EditCategory";
import AddDepartment from "../Admin/Departments/AddDepartment";
import EditDepartment from "../Admin/Departments/EditDepartment";
import AddUser from "../Admin/Users/AddUser";
import EditUser from "../Admin/Users/EditUser";
import ViewUser from "../Admin/Users/ViewUser";
import ViewRequest from "../Admin/Requests/ViewRequest";
import AddRequest from "../Admin/Requests/AddRequest";
import EditRequest from "../Admin/Requests/EditRequest";




function NavPage() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Login/>}/> */}
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/Admin/Users/Users.js" element={<Users/>}/> 
                <Route path="/user/view/:id" element={<ViewUser/>}/>
                <Route path="/user/create" element={<AddUser/>}/>
                <Route path="/user/edit/:id" element={<EditUser/>}/>
                <Route path="/department/" element={<Department />} />
                <Route path="/department/create" element={<AddDepartment/>}/>
                <Route path="/department/edit/:id" element={<EditDepartment/>}/>
                <Route path="/category/" element={<Category/>}/>
                <Route path="/category/create" element={<AddCategory/>}/>
                <Route path="/category/edit/:id" element={<EditCategory/>}/>
                <Route path="/assets" element={<Assets/>}/>
                <Route path="/asset/create" element={<AddAsset/>}/>
                <Route path="/asset/view/:id" element={<ViewAsset/>}/>
                <Route path="/asset/edit/:id" element={<EditAsset/>}/>
                <Route path="/requests" element={<Request/>}/>
                <Route path="/request/view/:id" element={<ViewRequest/>}/>
                <Route path="/request/create" element={<AddRequest/>}/>
                <Route path="/request/edit/:id" element={<EditRequest/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default NavPage;