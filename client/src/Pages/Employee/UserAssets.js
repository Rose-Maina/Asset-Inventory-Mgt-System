import React from 'react'

function UserAssets() {
  return (
    <>
      <div className="container py-5">
        <div className="py-3">
          <h3>Employee Assets</h3>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div className="card text-bg-danger mb-3" style={{ maxWidth: 300 }}>
              <div className="card-body">
                <h4 className="card-title">0</h4>
                <h4 className="card-title">Total Assets</h4>
                <a
                  href="#"
                  className="small-box-footer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  More info <i className="bi bi-arrow-right-circle-fill" />
                </a>
              </div>
            </div>
            <div
              className="card text mb-3"
              style={{ maxWidth: 300, backgroundColor: "#a764fc" }}
            >
              <div className="card-body">
                <h4 className="card-title">0</h4>
                <h4 className="card-title">Total Assets</h4>
                <a
                  href="#"
                  className="small-box-footer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  More info <i className="bi bi-arrow-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requests display section */}

      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h3>Manage Assets</h3>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addRequestModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Assets</span>
                  </a>
                  <a
                    href="#deleteRequestModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE15C;</i>{" "}
                    <span>Delete all</span>
                  </a>
                </div>
              </div>
            </div>

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label for="selectAll"></label>
                    </span>
                  </th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="options[]"
                        value="1"
                      />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td>Furniture</td>

                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>1</b> out of <b>1</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAssets;
