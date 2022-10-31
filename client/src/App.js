import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/Admin/MainPage';
// import Login from './Components/Login'

function App() {
  return (
    <>
      <Router>
          {/* <Login /> */}
          <MainPage />
      </Router> 
      
    </>
  )
}

export default App;