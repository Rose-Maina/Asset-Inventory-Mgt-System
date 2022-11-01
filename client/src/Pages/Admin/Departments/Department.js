import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Department() {
  const [departments, setDepartments] = useState([]);

  function loadDepartments() {
    axios.get("/departments").then((res) => {
      setDepartments(res.data.reverse());
    });
  }

  useEffect(() => {
    loadDepartments();
  }, []);

  function deleteDepartment(id) {
    axios.delete(`/departments/${id}`).then(loadDepartments());
  }

  return (
    <>


<div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2><strong>Departments</strong></h2>
                </div>
                <div class="col-sm-6">
                  <Link to="/department/create" className="btn btn-success">
                    <i class="material-icons">&#xE147;</i>
                    Add New Department
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {departments.map((department, index) => (
                  <tr key={index}>
                    <td>
                    {index + 1}
                    </td>
                    <td>{department.name}</td>
                    <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                    <Link to={`/department/edit/${department.id}`} className="btn btn-warning">Edit</Link>
                    <Link onClick={()=>deleteDepartment(department.id)} to={"#"} className="btn btn-danger">Delete</Link>
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

export default Department;
