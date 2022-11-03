import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [user_type, setUser_Type] = useState("");
  const [department_id, setDepartment_Id] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  

  const navigate = useNavigate();
  const data = {
    name: name,
    email: email,
    contact: contact,
    user_type: user_type,
    department_id: department_id,
    password: password,
    password_confirmation: password_confirmation,
  };

  function submitForm(e) {
    e.preventDefault();
    
    axios.post("/users", data).then(navigate("/users"));
  }
  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={submitForm}>
                <div>
                <h3 className="py-4"><strong>Add New Employee</strong></h3> 
                </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Contact</label>
                    <input type="text" value={contact} onChange={e=>setContact(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <select className="form-control" name="request_type" value={user_type}
                    onChange={(e) => setUser_Type(e.target.value)}required>
                    <option value="Admin" selected>Admin</option>
                    <option value="Procurement">Procurement</option>
                    <option value="Finance">Finance</option>
                    <option value="Staff">Staff</option>
                  </select>
                  </div>
                  <div className="form-group">
                    <label>Department</label>
                    <select className="form-control" name="request_type" value={department_id}
                    onChange={(e) => setDepartment_Id(e.target.value)}required>
                    <option value="1" selected>Admin</option>
                    <option value="2">Procurement</option>
                    <option value="3">Finance</option>
                    <option value="4">Accounts</option>
                  </select>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Re-enter Password</label>
                    <input type="password" value={password_confirmation} onChange={e=>setPassword_Confirmation(e.target.value)} className="form-control" required />
                  </div>
                <div>
                  <Link to="/users" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Add">
                    Add New Employee
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

export default AddUser;