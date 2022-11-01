import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import MainPage from './Pages/Admin/MainPage';
import StaffMainPage from './Pages/Employee/StaffMainPage';

function App() {
  return (
    <>
      <Router>

          <StaffMainPage />
          {/* <MainPage /> */}
          
      
      </Router> 
      
    </>
  )
}

export default App;