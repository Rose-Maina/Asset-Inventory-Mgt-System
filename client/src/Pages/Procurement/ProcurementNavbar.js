import React from 'react';
import {FaBars} from 'react-icons/fa';

function ProcurementNavbar() {
  return (
    <>
      <div className='nav-bar'>
        <div className='menu-bars'>
          <FaBars/>
        </div>

        <div>
          <p className='title-admin'>Procurement Manager</p>
        </div>
      </div>
    </>
  )
}

export default ProcurementNavbar;