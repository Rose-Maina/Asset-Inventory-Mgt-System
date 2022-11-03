import React from 'react';
import FinanceNavbar from './FinanceNavbar';
import FinanceNavPage from './FinanceNavPage';
import FinanceSidebar from './FinanceSidebar';

function FinanceMainPage() {
  return (
    <>
      {/* navbar section */}
      <div>
        <FinanceNavbar/>
      </div>

      {/* sidebar section */}
      <div className='sidebar-container'>
        <div className='side-bar'>
          <FinanceSidebar/>
        </div>

        <div className='nav-page'>
          <FinanceNavPage/>
        </div>
      </div>
    </>
  )
}

export default FinanceMainPage;