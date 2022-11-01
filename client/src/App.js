import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
// import MainPage from './Pages/Admin/MainPage';
// import StaffMainPage from './Pages/Employee/StaffMainPage';
// import ProcurementDashboard from './Pages/Procurement/ProcurementDashboard';

function App() {
  return (
    <>
      <Router>
        <Login />
          {/* <StaffMainPage /> */}
          {/* <ProcurementDashboard/> */}
          {/* <MainPage /> */}
          
      
      </Router> 
      
    </>
  )
}

export default App;