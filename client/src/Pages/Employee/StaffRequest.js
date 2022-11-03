import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StaffRequests() {
  const [requests, setRequests] = useState([]);

  function loadRequests() {
    axios.get("/requests").then((res) => {
      setRequests(res.data.reverse());
    });
  }

  useEffect(() => {
    loadRequests();
  }, []);

  // function deleteRequest(id) {
  //   axios.delete(`/requests/${id}`).then(loadRequests());
  // }

  return (
    <>


<div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2><strong>Requests</strong></h2>
                </div>
                <div class="col-sm-6">
                  <Link to="/request/create" className="btn btn-success">
                    <i class="material-icons">&#xE147;</i>
                    Add New Request
                  </Link>
                </div>
              </div>
            </div>
            
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Urgency</th>
                  <th>Request Type</th>
                  <th>Status</th>
                  <th>Actions</th> 
                </tr>
              </thead>
              <tbody>
              {requests.map((request, index) => (
                  <tr key={index}>
                    <td>
                    {index + 1}
                    </td>
                    <td>{request.title}</td>
                    <td>{request.description}</td>
                    <td>{request.quantity}</td>
                    <td>{request.urgency}</td>
                    <td>{request.request_type}</td>
                    <td>{request.status}</td>
                    <td className="" style={{display: 'flex'}}>
                    <Link style={{marginRight: 5}} to={`/request/view/${request.id}`} className="btn btn-primary">View</Link>
                    <Link to={`/request/edit/${request.id}`} className="btn btn-warning">Edit</Link>
                    {/* <Link onClick={()=>deleteRequest(request.id)} to={"#"} className="btn btn-danger">Delete</Link> */}
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

export default StaffRequests;



                
