import React from "react";
import {Route, Routes} from "react-router-dom";
import ProcurementDashboard from "./ProcurementDashboard";
import Category from "../Admin/Categories/Category";
import Assets from "../Admin/Assets/Assets";
import Requests from "../Admin/Requests/Requests";
import ProcurementProfile from "./ProcurementProfile";
import Logout from "../Admin/Logout";
import EditRequestList from "./EditRequestList";
import UsersList from "./UsersList";
import ViewUser from "../Admin/Users/ViewUser";
import AddCategory from "../Admin/Categories/AddCategory";
import EditCategory from "../Admin/Categories/EditCategory";
import AddAsset from "../Admin/Assets/AddAsset";
import EditAsset from "../Admin/Assets/EditAsset";
import ViewAsset from "../Admin/Assets/ViewAsset";
import DepartmentList from "./DepartmentList";


function ProcurementNavPage() {
    return (
        <>
            <Routes>
                <Route path="/procurementdashboard" element={<ProcurementDashboard/>}/>
                <Route path="/userslist" element={<UsersList/>}/>
                <Route path="/departmentlist" element={<DepartmentList/>}/>
                <Route path="/user/view/:id" element={<ViewUser/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/category/create" element={<AddCategory/>}/>
                <Route path="/category/edit/:id" element={<EditCategory/>}/>
                <Route path="/assets" element={<Assets/>}/>
                <Route path="/asset/create" element={<AddAsset/>}/>
                <Route path="/asset/view/:id" element={<ViewAsset/>}/>
                <Route path="/asset/edit/:id" element={<EditAsset/>}/>
                <Route path="/requests" element={<Requests/>}/>
                <Route path="/requestlist/edit/:id" element={<EditRequestList/>}/>
                <Route path="/procurementprofile" element={<ProcurementProfile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default ProcurementNavPage;