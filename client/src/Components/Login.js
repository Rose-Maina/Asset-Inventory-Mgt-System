// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// // import bg1 from "./bg1.jpg";



// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const data = {
//     email: email,
//     password: password,
//   };

//   function submitLoginForm(e) {
//     e.preventDefault();
    
//     axios.post("/login", data)
    
//     .then(navigate("/dashboard"));
//   }

//   // style={{ backgroundImage: `url(${bg1})` }}

//   return (
//     <div className="container py-5">
//       <center>
//         <div className="py-5">
//           <div style={{ maxWidth: 500 }}>
//             <div className="py-5">
//               <form onSubmit={submitLoginForm}>
//                 <div className="py-5">
//                 <h3 className="py-4"><strong>Sign In</strong></h3> 
//                 </div>
//                   <div className="form-group">
//                     <label><strong>Email</strong></label>
//                     <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" required />
//                   </div>
//                   <div className="form-group">
//                     <label><strong>Password</strong></label>
//                     <input  type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" required />
//                   </div>
//                 <div className="py-5">
//                   <button type="submit" className="btn btn-success" value="Add">
//                     LOGIN
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </center>
//     </div>
//   );
// }

// export default Login;