import React from "react";
import {Route, Routes} from "react-router-dom";
import Category from "../Admin/Categories/Category";
import Assets from "../Admin/Assets/Assets";
import Requests from "../Admin/Requests/Requests";
import FinanceProfile from "./FinanceProfile";
import FinanceDashboard from "./FinanceDashboard";
import Logout from "../Admin/Logout";
import EditRequestList from "./EditRequestList";
import UsersList from "../Procurement/UsersList";
import ViewUser from "../Admin/Users/ViewUser";
import CategoryList from "./CategoryList";
import ViewAsset from "../Admin/Assets/ViewAsset";
import DepartmentList from "../Procurement/DepartmentList";
import AssetListFinance from "./AssetListFinance";
import AssetViewFinance from "./AssetViewFinance";


function FinanceNavPage() {
    return (
        <>
            <Routes>
                <Route path="/financedashboard" element={<FinanceDashboard/>}/>
                {/* <Route path="/userslist" element={<UsersList/>}/> */}
                {/* <Route path="/departmentlist" element={<DepartmentList/>}/> */}
                {/* <Route path="/user/view/:id" element={<ViewUser/>}/> */}
                {/* <Route path="/category" element={<Category/>}/> */}
                {/* <Route path="/categorylist" element={<CategoryList/>}/> */}
                {/* <Route path="/category/create" element={<AddCategory/>}/> */}
                {/* <Route path="/category/edit/:id" element={<EditCategory/>}/> */}
                <Route path="/assetlistfinance" element={<AssetListFinance/>}/>
                {/* <Route path="/asset/create" element={<AddAsset/>}/> */}
                {/* <Route path="/assetviewfinance/view/:id" element={<AssetViewFinance/>}/> */}
                {/* <Route path="/asset/view/:id" element={<ViewAsset/>}/> */}
                {/* <Route path="/asset/edit/:id" element={<EditAsset/>}/> */}
                <Route path="/requests" element={<Requests/>}/>
                <Route path="/requestlist/edit/:id" element={<EditRequestList/>}/>
                <Route path="/financeprofile" element={<FinanceProfile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default FinanceNavPage;