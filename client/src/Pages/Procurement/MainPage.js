import React from 'react';
import Navbar from '..Pages/Procurement/Navbar';
import NavPage from '../Pages/Procurement/NavPage';
import Sidebar from '../Pages/Procurement/Sidebar';

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