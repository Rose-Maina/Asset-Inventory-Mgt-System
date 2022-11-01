import React from 'react';
import StaffNavbar from '..Pages/Employee/StaffNavbar';
import StaffNavPage from '..Pages/Employee/StaffNavPage';
import StaffSidebar from '..Pages/Employee/StaffSidebar';

function StaffMainPage() {
  return (
    <>
      {/* navbar section */}
      <div>
        <StaffNavbar/>
      </div>

      {/* sidebar section */}
      <div className='sidebar-container'>
        <div className='side-bar'>
          <StaffSidebar/>
        </div>

        <div className='nav-page'>
          <StaffNavPage/>
        </div>
      </div>
    </>
  )
}

export default StaffMainPage;
