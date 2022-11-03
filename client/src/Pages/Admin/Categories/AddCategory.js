import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddCategory() {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
  };

  function submitForm(e) {
    e.preventDefault();
    
    
    axios.post("/categories", data).then(navigate("/category"));
  }
  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={submitForm}>
                <div>
                <h3 className="py-4"><strong>Add New Category</strong></h3> 
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
                    Add Category
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

export default AddCategory;