import React from 'react';
import Navbar from '..Pages/Employee/Navbar';
import NavPage from '..Pages/Employee/NavPage';
import Sidebar from '..Pages/Employee/Sidebar';

function MainPage() {
  return (
    <>
      {/* navbar section */}
      <div>
        <Navbar/>
      </div>

      {/* sidebar section */}
      <div className='sidebar-container'>
        <div className='side-bar'>
          <Sidebar/>
        </div>

        <div className='nav-page'>
          <NavPage/>
        </div>
      </div>
    </>
  )
}

export default MainPage;
