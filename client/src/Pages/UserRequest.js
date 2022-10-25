import React from "react";

function UserRequest() {
  return (
    <>
      <div className="container py-5">
        <div className="py-3">
          <h3>Employee Requests</h3>
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
              More info <i className="bi bi-arrow-right-circle-fill"/>
            </a>
              </div>
            </div>
            <div className="card text-bg-danger mb-3" style={{ maxWidth: 300 }}>
              <div className="card-body">
                <h4 className="card-title">0</h4>
                <h4 className="card-title">Total Requests</h4>
                <a
              href="#"
              className="small-box-footer"
              style={{ textDecoration: "none", color: "white" }}
            >
              More info <i className="bi bi-arrow-right-circle-fill"/>
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
                  <h3>Manage Requests</h3>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addRequestModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Request</span>
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
                  <th>Urgency</th>
                  <th>Status</th>
                  <th>Actions</th>
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
                  <td>
                    <a
                      href="#editRequestModal"
                      className="edit"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteRequestModal"
                      className="delete"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
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
      {/* Edit Modal   */}
      <div id="addRequestModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Requests</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Status</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" className="btn btn-success" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Edit Modal   */}
      <div id="editRequestModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Update Request Status</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <select className="btn btn-info">
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
              {/* </div>
              </div> */}

              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" className="btn btn-info" value="Update" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Delete Modal */}
      <div id="deleteRequestModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Request</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Delete"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRequest;
