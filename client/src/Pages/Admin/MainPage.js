import React from "react";
import './MainPage.css'

// pages

import ProcurementMainPage from "../Procurement/ProcurementMainPage";
import AdminMainPage from "./AdminMainPage";
import FinanceMainPage from "../Finance/FinanceMainPage";
import axios from "axios";

const Dash = ({ role }) => {
  return role === "admin" ? (
    <AdminMainPage/>
  ) : role === "manager" ? (
      <ProcurementMainPage
      />
  ) : (
    <FinanceMainPage />
  )
}

function DummyLogin({ setRole, role }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
    const data = {
    email: email,
    password: password,
  };

  function submitLoginForm(e) {
    e.preventDefault();
    axios.post("/login", data)
    .then(res => {
      console.log(res.data)
      if (res?.data?.message.includes('admin'))  {
        localStorage.setItem(
          'role', 'admin'
        )
        setRole('admin');
      }
      else if (res?.data?.message.includes('manager'))  {
        localStorage.setItem(
          'role', 'manager'
        )
        setRole('manager');
      }
      else {
        localStorage.setItem('role', 'regular')
        setRole('regular');
      }
      // navigate('/dashboard')
    });
  }

  // style={{ backgroundImage: `url(${bg1})` }}

  return role != null ? 'Login Success, click on the left menu to navigate!' :(
    <div className="container py-5">
      <center>
        <div className="py-5">
          <div style={{ maxWidth: 500 }}>
            <div className="py-5">
              <form className="form" onSubmit={submitLoginForm}>
                <div className="py-5">
                <h3 className="py-4"><strong>Sign In</strong></h3>
                </div>
                  <div className="form-group">
                    <label><strong>Email</strong></label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label><strong>Password</strong></label>
                    <input  type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" required />
                  </div>
                <div className="py-5">
                  <button type="submit" className="btn btn-primary" value="Add">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

function MainPage() {
  const altRole = localStorage.getItem('role');
  const [role, setRole] = React.useState(altRole)
  return role != null ? (
    <Dash role={role} />
  ) : (
    <DummyLogin setRole={setRole} role={role} /> )
}

export default MainPage;