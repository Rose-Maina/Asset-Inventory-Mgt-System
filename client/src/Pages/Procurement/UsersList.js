import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from 'react-fontawesome';

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

  // function deleteUser(id) {
  //   axios.delete(`/users/${id}`).then(loadUsers());
  // }

  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>
                    <strong>Employees</strong>
                  </h2>
                </div>
                {/* <div class="col-sm-6">
                  <Link to="/user/create" className="btn btn-success">
                    <i class="material-icons">&#xE147;</i>
                    Add New Employee
                  </Link>
                </div> */}
              </div>
            </div>

            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.user_type}</td>
                    {/* style={{display: 'inline'}} */}
                    <td className="" style={{ display: "flex" }}>
                      <Link
                        style={{ marginRight: 5 }}
                        to={`/user/view/${user.id}`}
                        className="btn btn-primary"
                      >
                        View
                      </Link>
                      {/* <Link style={{marginRight: 5}} to={`/user/edit/${user.id}`} className="btn btn-warning">Edit</Link>
                    <Link onClick={()=>deleteUser(user.id)} to={"#"} className="btn btn-danger">Delete</Link> */}
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
