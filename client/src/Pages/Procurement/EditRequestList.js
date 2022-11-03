
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditRequestList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [urgency, setUrgency] = useState("");
  const [request_type, setRequest_Type] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/requests/${id}`).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setQuantity(res.data.quantity);
      setUrgency(res.data.urgency);
      setRequest_Type(res.data.request_type);
      setStatus(res.data.status);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    title: title,
    description: description,
    quantity: quantity,
    urgency: urgency,
    request_type: request_type,
    status: status,
  };

  function updateRequest(e) {
    e.preventDefault();
    
    axios.put(`/requests/${id}`, data).then(navigate("/requests"));
  }
  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={updateRequest}>
                <div>
                <h3 className="py-4"><strong>Update Request</strong></h3> 
                </div>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input type="text" value={description} onChange={e=>setDescription(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Urgency</label>
                    <select className="form-control" name="request_type" value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}required>
                    <option value="high" selected>High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  </div>
                  <div className="form-group">
                    <label>Request Type</label>
                    <select className="form-control" name="request_type" value={request_type}
                    onChange={(e) => setRequest_Type(e.target.value)} required>
                    <option value="new" selected>New</option>
                    <option value="repair">Repair</option>
                  </select>
                    </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" name="status" value={status}
                    onChange={(e) => setStatus(e.target.value)} required>
                    <option value="progress" selected>In Progress</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="completed">Completed</option>
                  </select>
                    </div>
                <div>
                  <Link to="/requests" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Add">
                    Update Request
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

export default EditRequestList;


