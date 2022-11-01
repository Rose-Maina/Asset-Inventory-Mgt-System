import React from "react";
import {Route, Routes} from "react-router-dom";
import ProcurementDashboard from "../Pages/Procurement/ProcurementDashboard";
import CategoryList from "../Pages/Procurement/CategoryList";
import AssetList from "../Pages/Procurement/AssetList";
import RequestList from "../Pages/Procurement/RequestList";
import ProcurementProfile from "../Pages/Procurement/ProcurementProfile";
import Logout from "../Pages/Procurement/Logout";
import EditAssetList from "../Pages/Procurement/EditAssetList";
import AddAssetList from "../Pages/Procurement/AddAssetList";
import EditRequestList from "../Pages/Procurement/EditRequestList";


function ProcurementNavPage() {
    return (
        <>
            <Routes>
                <Route path="/procurementdashboard" element={<ProcurementDashboard/>}/>
                <Route path="/category" element={<CategoryList/>}/>
                <Route path="/assets" element={<AssetList/>}/>
                <Route path="/asset/edit/:id" element={<EditAssetList/>}/>
                <Route path="/asset/create" element={<AddAssetList/>}/>
                <Route path="/request" element={<RequestList/>}/>
                <Route path="/request/edit/:id" element={<EditRequestList/>}/>
                <Route path="/profile" element={<ProcurementProfile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default ProcurementNavPage;