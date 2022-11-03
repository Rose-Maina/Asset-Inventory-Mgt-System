import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AssignAsset() {
  const [asset_id, setAsset_Id] = useState("");
  const [user_id, setUser_Id] = useState("");

  const navigate = useNavigate();
  const data = {
    asset_id: asset_id,
    user_id: user_id,
  };

  function submitForm(e) {
    e.preventDefault();

    axios.post("/user_assets", data).then(navigate("/user_assets"));
  }

  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={submitForm}>
                <div>
                  <h3 className="py-4">
                    <strong>Assign Asset to User</strong>
                  </h3>
                </div>
                {/* <div class="col-sm-6">
                  <Link to="/asset/assign" className="btn btn-primary">
                    <i class="material-icons">&#xE147;</i>
                    Assign Asset to User
                  </Link>
                </div> */}

                <div className="form-group">
                  <label>Asset Name</label>
                  <select
                    className="form-control"
                    name="asset_id"
                    value={asset_id}
                    onChange={(e) => setAsset_Id(e.target.value)}
                    required
                  >
                    <option value="1" selected>
                      Laptop
                    </option>
                    <option value="2">Notebook</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Employee Name</label>
                  <select
                    className="form-control"
                    name="user_id"
                    value={user_id}
                    onChange={(e) => setUser_Id(e.target.value)}
                    required
                  >
                    <option value="1" selected>
                      Vinn
                    </option>
                    <option value="2">Bruce</option>
                  </select>
                </div>

                <div>
                  <Link to="/assets" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Add">
                    Assign Asset
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

export default AssignAsset;
