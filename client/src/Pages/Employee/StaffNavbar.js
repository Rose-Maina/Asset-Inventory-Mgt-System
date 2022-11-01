import React from 'react';
import {FaBars} from 'react-icons/fa';

function StaffNavbar() {
  return (
    <>
      <div className='nav-bar'>
        <div className='menu-bars'>
          <FaBars/>
        </div>

        <div>
          <p className='title-admin'>Staff</p>
        </div>
      </div>
    </>
  )
}

export default StaffNavbar;
