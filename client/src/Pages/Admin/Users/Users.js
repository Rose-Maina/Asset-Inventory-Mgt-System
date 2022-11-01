import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("/users").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios.delete(`/users/${id}`).then(loadUsers());
  }

  return (
    <>


<div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2><strong>Employees</strong></h2>
                </div>
                <div class="col-sm-6">
                  <Link to="/user/create" className="btn btn-success">
                    <i class="material-icons">&#xE147;</i>
                    Add New Employee
                  </Link>
                </div>
              </div>
            </div>
            
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user, index) => (
                  <tr key={index}>
                    <td>
                    {index + 1}
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.user_type}</td>
                    <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                    <Link to={`/user/view/${user.id}`} className="btn btn-primary">View</Link>
                    <Link to={`/user/edit/${user.id}`} className="btn btn-warning">Edit</Link>
                    <Link onClick={()=>deleteUser(user.id)} to={"#"} className="btn btn-danger">Delete</Link>
                    </td>
                  </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;

{/* <th>Title</th>
<th>Description</th>
<th>Quantity</th>
<th>Urgency</th>
<th>Request Type</th>
<th>Status</th>
<th>Actions</th> */}

                
