import React from "react";
import StaffNavbar from "./StaffNavbar";
import StaffNavPage from "./StaffNavPage";
import StaffSidebar from "./StaffMainPage";

function StaffMainPage() {
  return (
    <>
      {/* navbar section */}
      <div>
        <StaffNavbar />
      </div>

      {/* sidebar section */}
      <div className="sidebar-container">
        <div className="side-bar">
          <StaffSidebar />
        </div>

        <div className="nav-page">
          <StaffNavPage />
        </div>
      </div>
    </>
  );
}

export default StaffMainPage;
