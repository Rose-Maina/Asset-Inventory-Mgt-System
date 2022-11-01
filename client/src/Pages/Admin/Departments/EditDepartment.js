
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditCategory() {
  const [name, setName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/departments/${id}`).then((res) => {
      setName(res.data.name);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
  };

  function updateDepartment(e) {
    e.preventDefault();
    
    axios.put(`/departments/${id}`, data).then(navigate("/department"));
  }
  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={updateDepartment}>
                <div>
                <h3 className="py-4"><strong>Update Department</strong></h3> 
                </div>
                <div>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" required />
                  </div>
                </div>
                <div>
                  <Link to="/department" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Add">
                    Update Department
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


