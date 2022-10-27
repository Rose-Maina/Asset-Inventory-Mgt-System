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
                <h4 className="card-title">Total Requests</h4>
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

      {/* Edit Modal   */}

      {/* Delete Modal   */}

      <div id="editRequestModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Make Request</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>

              <div id="addEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Make New Request</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label>Title</label>
                          <input type="text" class="form-control" required />
                        </div>
                        <div class="form-group">
                          <label>Description</label>
                          <input type="text" class="form-control" required />
                        </div>
                        <div class="form-group">
                          <label>Quantity</label>
                          <input type="text" class="form-control" required />
                        </div>
                        <div class="form-group">
                          <label>Urgency</label>
                          <input type="text" class="form-control" required />
                        </div>
                        <div class="form-group">
                          <label>Request Type</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="New or Repair"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>AssetID</label>
                          <input type="text" class="form-control" required />
                        </div>
                        <div class="form-group">
                          <label>UserID</label>
                          <input type="text" class="form-control" required />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <input
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <input
                          type="submit"
                          class="btn btn-success"
                          value="Add"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRequest;
