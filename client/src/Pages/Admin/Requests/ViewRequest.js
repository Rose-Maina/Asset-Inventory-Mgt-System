import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewRequest = () => {

  const { id } = useParams();

  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios.get(`/requests/${id}`).then((res) => {
      setRequest(res.data);
    });
  }, []);

  console.log(request);

  return (
    <div className="container py-5">
      <center>
      <h3 className="py-4"><strong>Request Details</strong></h3> 
        {request && (
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-text"><strong>Title:</strong> {request.title}</h5><br/>
              <h5 className="card-text"><strong>Description:</strong> {request.description}</h5><br/>
              <h5 className="card-text"><strong>Quantity:</strong> {request.quantity}</h5><br/>
              <h5 className="card-text"><strong>Urgency:</strong> {request.urgency}</h5><br/>
              <h5 className="card-text"><strong>Request Type:</strong> {request.request_type}</h5><br/>
              <h5 className="card-text"><strong>Status:</strong> {request.status}</h5><br/>
            </div>
          </div>
        )}<br/> 
        <Link to="/requests" className="btn btn-default">
          <h6><strong>BACK</strong></h6>
        </Link>
      </center>
    </div>
  );
};

export default ViewRequest;
