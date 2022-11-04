import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Login from './Components/Login';
import MainPage from './Pages/Admin/MainPage';
// import StaffMainPage from './Pages/Employee/StaffMainPage';
// import ProcurementMainPage from './Pages/Procurement/ProcurementMainPage';

// import FinanceMainPage from './Pages/Finance/FinanceMainPage';

function App() {
  return (
    <>
      <Router>
        {/* <Login /> */}
          {/* <StaffMainPage /> */}
          {/* <FinanceMainPage /> */}
          {/* <ProcurementMainPage/> */}
          <MainPage />
          
      </Router> 
      
    </>
  )
}

export default App;