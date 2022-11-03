
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditCategory() {
  const [name, setName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/categories/${id}`).then((res) => {
      setName(res.data.name);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
  };

  function updateCategory(e) {
    e.preventDefault();
    
    axios.put(`/categories/${id}`, data).then(navigate("/category"));
  }
  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={updateCategory}>
                <div>
                <h3 className="py-4"><strong>Update Category</strong></h3> 
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
                    Update Category
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

export default EditCategory;


