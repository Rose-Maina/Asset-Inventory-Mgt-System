import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import MainPage from "../Pages/Admin/MainPage";


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info"))
  navigate('/');
  }, [])
  


  function login() {
    
 console.warn(email,password)


  }
  
  return (
    <div>
     
     <MainPage/>
      <h2>Login page</h2>
      <div className="col-sm-6 offset-sm-3">
        <input type="text" placeholder="Enter your email address"
          onChange = {(e)=>setEmail(e.target.value)     }
          className="form-control" />
        
        <input type="password" placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control" />

       <button className="btn btn-primary" type="submit" onClick={login}>Login</button>
      </div>
      
    
    </div>


)}

export default Login 