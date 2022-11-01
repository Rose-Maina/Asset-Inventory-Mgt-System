import React from "react";

function ProcurementProfile() {
  return (
    <>
       <center>
    <div className="container py-5">
      <div className="card w-50">
      <h3 className="card-title py-3">Profile Details</h3>
        <div className="card-body">
          
          <h5 className="card-text">Username</h5>
          <h6 className="card-text">Email</h6>
          <h6 className="card-text">Department</h6>
          <h6 className="card-text">Role</h6>

          <a
            href="#editEmployeeModal"
            className="edit"
            data-toggle="modal"
            >
            <i
             className="material-icons"
            data-toggle="tooltip"
            title="Edit"
            >&#xE254;
             </i>
          </a>
        </div>
      </div>
      </div>

      {/* Editing Modal  */}

      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Manage Account</h4>
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
                  <label>Username</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Password</label>
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
                <input type="submit" className="btn btn-info" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </center>
    </>
  );
}

export default ProcurementProfile;
