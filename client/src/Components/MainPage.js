import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

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

      </div>
    </>
  )
}

export default MainPage;