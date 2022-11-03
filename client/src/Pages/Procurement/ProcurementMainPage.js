import React from 'react';
import ProcurementNavbar from './ProcurementNavbar';
import ProcurementNavPage from './ProcurementNavPage';
import ProcurementSidebar from './ProcurementSidebar';

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