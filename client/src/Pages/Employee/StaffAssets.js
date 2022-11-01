import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StaffAssets() {
  const [assets, setAssets] = useState([]);

  function loadAssets() {
    axios.get("/assets").then((res) => {
      setAssets(res.data.reverse());
    });
  }

  useEffect(() => {
    loadAssets();
  }, []);

  function deleteAsset(id) {
    axios.delete(`/assets/${id}`).then(loadAssets());
  }

  return (
    <>


<div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2><strong> My Assets</strong></h2>
                </div>
              </div>
            </div>
            
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {assets.map((asset, index) => (
                  <tr key={index}>
                    <td>
                    {index + 1}
                    </td>
                    <td>{asset.name}</td>
                    <td className="" style={{display: 'flex'}}>
                    <Link style={{marginRight: 5}}to={`/asset/view/${asset.id}`} className="btn btn-primary">View</Link>
                    {/* <Link to={`/asset/edit/${asset.id}`} className="btn btn-warning">Edit</Link>
                    <Link onClick={()=>deleteAsset(asset.id)} to={"#"} className="btn btn-danger">Delete</Link> */}
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

export default StaffAssets;
