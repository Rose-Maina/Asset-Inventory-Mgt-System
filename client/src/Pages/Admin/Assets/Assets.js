import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import AddAsset from "./AddAsset"

const base_API = "/assets";

function Assets() {
  const [assets, setAssets] = useState([]);

//   const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

//   const ShowDetail = (id) => {
// 	  navigate("/assets/" + id);
//   }
  const EditAsset = (id) => {
	  navigate("/assets/edit/" + id);
  }
  const deleteData = (id) => {
	  if (window.confirm('Do you want to remove?')) {
		  fetch("assets/" + id, {
			  method: "DELETE"
		  }).then((res) => {
			  alert('Asset Removed successfully.')
			//   window.location.reload();
		  }).catch((err) => {
			  console.log(err.message)
		  })
	  }
  }

  useEffect(() => {
    fetch(base_API)
      .then((res) => res.json())
      .then((assets) => setAssets(assets));
  }, []);


  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Assets</h2>
                </div>
                <div class="col-sm-6">
                  <Link to="/assets/create" className="btn btn-success">
                    Add New Asset (+)
                  </Link>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label for="selectAll"></label>
                    </span>
                  </th>
                  <th>Name</th>
                  {/* <th>Image</th> */}
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset, index) => (
                  <tr key={index}>
                    <td>
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox1"></label>
                      </span>
                    </td>
                    <td>{asset.name}</td>
                    {/* <td>{asset.image}</td> */}
                    <td>{asset.category.name}</td>
                    <td>
                      <a style={{ marginRight: 10}} 
                        onClick={() => {
                          EditAsset(asset.id);
                        }}
                        className="btn btn-warning"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          deleteData(asset.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Assets;
