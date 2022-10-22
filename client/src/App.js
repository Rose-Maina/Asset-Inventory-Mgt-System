import React from 'react';
import MainPage from './Components/MainPage';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';





function App() {
  return (
    <>
      <Router>
        <MainPage/>
      </Router> 
    </>
  )
}

export default App;