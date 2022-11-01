
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [user_type, setUser_Type] = useState("");
    const [department_id, setDepartment_Id] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_Confirmation] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/users/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setContact(res.data.contact);
      setUser_Type(res.data.user_type);
      setDepartment_Id(res.data.department_id);
      setPassword(res.data.password);
      setPassword_Confirmation(res.data.password_confirmation);
    });
  }, []);

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

  function updateUser(e) {
    e.preventDefault();
    
    axios.put(`/users/${id}`, data).then(navigate("/users"));
  }
  return (
    <div className="container py-5">
    <center>
      <div>
        <div style={{ maxWidth: 400 }}>
          <div>
            <form onSubmit={updateUser}>
              <div>
              <h3 className="py-4"><strong>Update Employee Details</strong></h3> 
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
                  <option value="staff" selected>Staff</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
                </div>
                <div className="form-group">
                  <label>Department ID</label>
                  <input type="text" value={department_id} onChange={e=>setDepartment_Id(e.target.value)} className="form-control" required />
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
                  Update Employee
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

export default EditUser;


