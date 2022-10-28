import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/Admin/MainPage';

function App() {
  return (
    <>
      <Router>
        
          <MainPage />
      
      </Router> 
      
    </>
  )
}

export default App;