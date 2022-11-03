
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditAssetList() {
  const [name, setName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/assets/${id}`).then((res) => {
      setName(res.data.name);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
  };

  function updateAsset(e) {
    e.preventDefault();
    
    axios.put(`/assets/${id}`, data).then(navigate("/assets"));
  }
  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={updateAsset}>
                <div>
                <h3 className="py-4"><strong>Update Asset</strong></h3> 
                </div>
                <div>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" required />
                  </div>
                </div>
                <div>
                  <Link to="/category" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Add">
                    Update Asset
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

export default EditAssetList;


