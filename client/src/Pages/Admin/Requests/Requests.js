import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Addrequests from "./Addrequests"

const base_API = "/requests";

function Requests() {
  const [requests, setRequests] = useState([]);

  //   const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  //   const ShowDetail = (id) => {
  // 	  navigate("/Requests/" + id);
  //   }
  const editrequests = (id) => {
    navigate("/requests/edit/" + id);
  };
  const deleterequests = (id) => {
    if (window.confirm("Do you want to delete the request?")) {
      fetch("requests/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("requests Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch(base_API)
      .then((res) => res.json())
      .then((requests) => setRequests(requests));
  }, []);

  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Requests</h2>
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
                    <span class="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label for="selectAll"></label>
                    </span>
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
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox1"></label>
                      </span>
                    </td>
                    <td>{request.tile}</td>
                    <td>{request.description}</td>
                    <td>{request.quantity}</td>
                    <td>{request.urgency}</td>
                    <td>{request.request_type}</td>
                    <td></td>
                    <td>
                      <a
                        href="#editrequests"
                        class="edit"
                        data-toggle="modal"
                        onClick={() => {
                          editrequests(requests.id);
                        }}
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#deleterequests"
                        class="delete"
                        data-toggle="modal"
                        onClick={() => {
                          deleterequests(requests.id);
                        }}
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </a>
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

export default Requests;
