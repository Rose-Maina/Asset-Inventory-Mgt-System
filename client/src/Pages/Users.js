import React from "react";

function Users() {
  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>
                    Manage <b>Users</b>
                  </h2>
                </div>
                <div class="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    class="btn btn-success"
                    data-toggle="modal"
                  >
                    <i class="material-icons">&#xE147;</i>{" "}
                    <span>Add New Category</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    class="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i class="material-icons">&#xE15C;</i>{" "}
                    <span>Delete all</span>
                  </a>
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
                  <th>Department</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                  <td>Vincent Nduri</td>
                  <td>Human Resources</td>
                  <td>vincent@nduri.com</td>

                  <td>
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox2"
                        name="options[]"
                        value="1"
                      />
                      <label for="checkbox2"></label>
                    </span>
                  </td>

                  <td>Rose Maina</td>
                  <td>Technology Department</td>
                  <td>main@rose.com</td>

                  <td>
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
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
            <div class="clearfix">
              <div class="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul class="pagination">
                <li class="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    2
                  </a>
                </li>
                <li class="page-item active">
                  <a href="#" class="page-link">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    5
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal   */}
      <div id="addEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="modal-title">user</h4>
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
                  <label>Name</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" required />
                </div>

                <div class="form-group">
                  <label>Choose Department</label>
                  <select required>
                    <option value="" disabled selected hidden>
                      Please Choose...
                    </option>
                    <option value="0">Human Resource</option>
                    <option value="1">Information Technology</option>
                    <option value="1">Procurement</option>
                    <option value="1">Finance</option>
                  </select>
                </div>
              </div>

              <div class="modal-footer">
                <input
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" class="btn btn-success" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Edit Modal   */}
      <div id="editEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="modal-title">Edit category</h4>
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
                  <label>Name</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" required />
                </div>

                <div class="form-group">
                  <label>Department</label>
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
                <input type="submit" class="btn btn-info" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Delete Modal */}
      <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="modal-title">Delete category</h4>
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
                <p>Are you sure you want to delete these Records?</p>
                <p class="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div class="modal-footer">
                <input
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" class="btn btn-danger" value="Delete" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
