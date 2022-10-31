import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import AddAsset from "./AddAsset"

const base_API = "/assets";

function Assets() {
  const [assets, setAssets] = useState([]);

  //   const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

    const assetDetails = (id) => {
  	  navigate("/assets/view/" + id);
    }
  const editAsset = (id) => {
    navigate("/assets/edit/" + id);
  };
  const deleteAsset = (id) => {
    if (window.confirm("Do you want to delete the asset?")) {
      fetch("assets/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Asset Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

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
                  <Link to="/asset/create" className="btn btn-success">
                    <i class="material-icons">&#xE147;</i>
                    Add New Asset
                  </Link>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset, index) => (
                  <tr key={index}>
                    <td>
                    </td>
                    <td>{asset.name}</td>
                    <td>{asset.category.name}</td>
                    <td>
                    <a href="#viewAsset" class="view" data-toggle="tooltip" onClick={() => {assetDetails(asset.id);}} >
                    <i  class="material-icons" data-toggle="tooltip" title="View">&#xE945;</i></a>
                    <a href="#editAsset" class="edit"data-toggle="modal" onClick={() => {editAsset(asset.id);}}>
                        <i  class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> 
                    <a href="#deleteAsset" class="delete" data-toggle="modal" onClick={() => {deleteAsset(asset.id);}}>
                        <i  class="material-icons" data-toggle="tooltip" title="Delete"> &#xE872;</i></a>
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


// &#xE885; - Star Icon