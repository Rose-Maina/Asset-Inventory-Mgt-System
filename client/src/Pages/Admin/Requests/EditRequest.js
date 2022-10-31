import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditRequest = () => {
  const { requestid } = useParams();

  useEffect(() => {
    fetch("/requests/" + requestid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTitle(resp.title);
        setDescription(resp.description);
        setQuantity(resp.quantity);
        setUrgency(resp.urgency);
        setRequest_Type(resp.request_type);
        setAsset_Id(resp.asset_id);
        setUser_Id(resp.user_id);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [urgency, setUrgency] = useState("");
  const [request_type, setRequest_Type] = useState("");
  const [asset_id, setAsset_Id] = useState("");
  const [user_id, setUser_Id] = useState("");

  const navigate = useNavigate();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const requestData = { title, description, quantity, urgency, request_type, asset_id, user_id};

    fetch("/requests/" + requestid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => {
        alert("Update Saved Successfully.");
        navigate("/requests");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={handleEditSubmit}>
                <div>
                  <h4 className="modal-title">Add New Request</h4>
                </div>
                <div>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="form-control"
                      required
                    />
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
                    <label>Type</label>
                    <select className="form-control" name="request_type" value={urgency}
                      onChange={(e) => setRequest_Type(e.target.value)}required>
                      <option value="new">New</option>
                      <option value="repair" selected>
                        Repair
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Asset ID</label>
                    <input
                      type="text"
                      value={asset_id}
                      onChange={(e) => setAsset_Id(e.target.value)}
                      className="form-control" disabled
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>User ID</label>
                    <input
                      type="text"
                      value={user_id}
                      onChange={(e) => setUser_Id(e.target.value)}
                      className="form-control" disabled
                      required
                    />
                  </div>
                </div>
                <div>
                  <Link to="/Requests" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Add">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default EditRequest;
