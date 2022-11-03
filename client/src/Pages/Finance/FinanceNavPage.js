import React from "react";
import {Route, Routes} from "react-router-dom";
import Requests from "../Admin/Requests/Requests";
import FinanceProfile from "./FinanceProfile";
import FinanceDashboard from "./FinanceDashboard";
import Logout from "../Admin/Logout";
import EditRequestList from "./EditRequestList";
import AssetListFinance from "./AssetListFinance";
import AssetViewFinance from "./AssetViewFinance";


function FinanceNavPage() {
    return (
        <>
            <Routes>
                <Route path="/financedashboard" element={<FinanceDashboard/>}/>
                <Route path="/assetlistfinance" element={<AssetListFinance/>}/>
                <Route path="/assetviewfinance/view/:id" element={<AssetViewFinance/>}/>
                <Route path="/requests" element={<Requests/>}/>
                <Route path="/requestlist/edit/:id" element={<EditRequestList/>}/>
                <Route path="/financeprofile" element={<FinanceProfile/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export default FinanceNavPage;