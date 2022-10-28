import React, {useState, useEffect} from "react";
import AddUser from "./AddUser";

const base_API = "/users";

function Users() {
  const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(base_API)
		.then(res => res.json())
		.then(users => setUsers(users))
	}, []);

  function handleAddUser(newUser) {
		setUsers([...users, newUser]);
	  }
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
                <AddUser onAddUser={handleAddUser}/>
                </div>
              </div>
            </div>

            <table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
						<th>Department</th>
            <th>Role</th>


						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
				{users.map((user, index)=> (  

					<tr key={index}>
						<td >
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>

						<td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            {/* <td>{user.password_confirmation}</td> */} 
            <td>{user.contact}</td>
            {/* <td>{user.department.name}</td> */}
            <td>{user.user_type}</td>					
						<td>
							<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
						
					</tr>
					
					))}
				</tbody>
			</table> 
    
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
                <h4 class="modal-title">Edit user</h4>
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
                <h4 class="modal-title">Delete user</h4>
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
