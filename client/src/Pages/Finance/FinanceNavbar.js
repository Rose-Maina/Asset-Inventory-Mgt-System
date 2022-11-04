import React from 'react';
import {FaBars} from 'react-icons/fa';

function FinanceNavbar() {
  return (
    <>
      <div className='nav-bar'>
        <div className='menu-bars'>
          <FaBars/>
        </div>

        <div>
          <p className='title-admin'>General Staff</p>
        </div>
      </div>
    </>
  )
}


export default FinanceNavbar;
