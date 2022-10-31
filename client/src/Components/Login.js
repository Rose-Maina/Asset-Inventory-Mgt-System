// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';

// function Login() {
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//         <MDBCol col='12'>

//           <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
//             <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

//               <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//               <p className="text-white-50 mb-5">Please enter your login and password!</p>

//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

//               <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
//               <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
//                 Login
//               </MDBBtn>

//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

function LoginPage({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
        console.log(user);
        toast.success("Login successful");
        navigate("/mainpage");
      } else {
        res.json().then((data) => {
          console.log(data.error);
          toast.error(
            "Login failed! Please check your email address and password, and then try again."
          );
        });
      }
    });
  }

  return (
    <div className="text-center m-5-auto">
      <h2>Welcome!</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>

        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>

        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>

    </div>
  );
}

export default LoginPage;