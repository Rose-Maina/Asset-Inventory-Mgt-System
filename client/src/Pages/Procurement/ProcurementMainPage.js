import React from 'react';
import ProcurementNavbar from '..Pages/Procurement/ProcurementNavbar';
import ProcurementNavPage from '../Pages/Procurement/ProcurementNavPage';
import ProcurementSidebar from '../Pages/Procurement/ProcurementSidebar';

function ProcurementMainPage() {
  return (
    <>
      {/* navbar section */}
      <div>
        <ProcurementNavbar/>
      </div>

      {/* sidebar section */}
      <div className='sidebar-container'>
        <div className='side-bar'>
          <ProcurementSidebar/>
        </div>

        <div className='nav-page'>
          <ProcurementNavPage/>
        </div>
      </div>
    </>
  )
}

export default ProcurementMainPage;