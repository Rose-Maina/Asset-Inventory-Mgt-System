import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function UserAsset() {
  const [user_assets, setUser_Assets] = useState([]);

  function loadUser_Assets() {
    axios.get("/user_assets").then((res) => {
      setUser_Assets(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUser_Assets();
  }, []);

//   function deleteAsset(id) {
//     axios.delete(`/user_assets/${id}`).then(loadUser_Assets());
//   }

  return (
    <>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>
                  <strong>Assigned Assets</strong>
                </h2>
              </div>
            </div>
          </div>

          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Asset</th>
                <th>Employee</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {user_assets.map((user_asset, index) => (
                <tr key={index}>
                  <td>{/* {index + 1} */}</td>
                  <td>{user_asset.name}</td>
                  <td>{user_asset.name}</td>
                  {/* <td className="" style={{ display: "flex" }}>
                    <Link
                      style={{ marginRight: 5 }}
                      to={`/user_asset/view/${user_asset.id}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                    <Link
                      style={{ marginRight: 5 }}
                      to={`/user_asset/edit/${user_asset.id}`}
                      className="btn btn-warning"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => deleteAsset(user_asset.id)}
                      to={"#"}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td> */}
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

export default UserAsset;
