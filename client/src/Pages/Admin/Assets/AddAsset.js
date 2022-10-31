import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const base_API = "/assets";

const AddAsset = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category_id, setCategory_Id] = useState("");

  const navigate = useNavigate();

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const assetData = { name, image, category_id };

    fetch(base_API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(assetData),
    })
      .then((res) => {
        if (res.ok) {
        alert("Asset Added Successfully.")}
        navigate(base_API);
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
              <form onSubmit={handleAddSubmit}>
                <div>
                  <h4 className="modal-title">Add New Asset</h4>
                </div>
                <div>
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
                    <input type="text" value={category_id} onChange={e=>setCategory_Id(e.target.value)} className="form-control" required>
                    {/* <option value="Chrome"/>
                    <option value="Firefox"/> */}
                    </input>
                  </div>
                </div>
                <div>
                  <Link to="/assets" className="btn btn-default">
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

export default AddAsset;
