import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddAsset() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category_id, setCategory_Id] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    image: image,
    category_id: category_id,
  };

  function submitForm(e) {
    e.preventDefault();
    
    axios.post("/assets", data).then(navigate("/assets"));
  }
  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={submitForm}>
                <div>
                <h3 className="py-4"><strong>Add New Asset</strong></h3> 
                </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Image Url</label>
                    <input type="text" value={image} onChange={e=>setImage(e.target.value)} className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Category ID</label>
                    <input type="text" value={category_id} onChange={e=>setCategory_Id(e.target.value)} className="form-control" required />
                  </div>
                <div>
                  <Link to="/assets" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Add">
                    Add Asset
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

export default AddAsset;