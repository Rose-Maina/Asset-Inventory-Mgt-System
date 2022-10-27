import React from 'react'

function AssetList() {
  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Assets <b>List</b></h2>
                </div>
                <div class="col-sm-6">
                  <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Asset</span></a>						
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
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td>Armchair</td>
                  <td>Furniture</td>
                  <td>New</td>
                  
                  <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox2" name="options[]" value="1"/>
                      <label for="checkbox2"></label>
                    </span>
                  </td>
                  <td>Driller</td>
                  <td>Factory machinery</td>
                  <td>Repaired</td>
                  <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox3" name="options[]" value="1"/>
                      <label for="checkbox3"></label>
                    </span>
                  </td>
                  <td>Office table</td>
                  <td>Furniture</td>
                  <td>New</td>
              
                  <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox4" name="options[]" value="1"/>
                      <label for="checkbox4"></label>
                    </span>
                  </td>
                  <td>Hp pavilion laptop</td>
                  <td>Electronic</td>
                  <td>Refurbished</td>
                  <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                  </td>
                </tr>					
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox5" name="options[]" value="1"/>
                      <label for="checkbox5"></label>
                    </span>
                  </td>
                  <td>Backhoe</td>
                  <td>Motor Vehicle</td>
                  <td>New</td>
                  <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                  </td>
                </tr> 
              </tbody>
            </table>
            <div class="clearfix">
              <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                  <li class="page-item disabled"><a href="#">Previous</a></li>
                  <li class="page-item"><a href="#" class="page-link">1</a></li>
                  <li class="page-item"><a href="#" class="page-link">2</a></li>
                  <li class="page-item active"><a href="#" class="page-link">3</a></li>
                  <li class="page-item"><a href="#" class="page-link">4</a></li>
                  <li class="page-item"><a href="#" class="page-link">5</a></li>
                  <li class="page-item"><a href="#" class="page-link">Next</a></li>
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
                  <h4 class="modal-title">Asset</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">					
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" required/>
                  </div>
                  <div class="form-group">
                    <label>Category</label>
                    <input type="email" class="form-control" required/>
                  </div>
                  <div class="form-group">
                    <label>status</label>
                    <textarea class="form-control" required></textarea>
                  </div>      
                </div>
                <div class="modal-footer">
                  <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                  <input type="submit" class="btn btn-success" value="Add"/>
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
                  <h4 class="modal-title">Edit Asset</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">					
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" required/>
                  </div>
                  <div class="form-group">
                    <label>Category</label>
                    <input type="email" class="form-control" required/>
                  </div>
                  <div class="form-group">
                    <label>Status</label>
                    <textarea class="form-control" required></textarea>
                  </div>				
                </div>
                <div class="modal-footer">
                  <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                  <input type="submit" class="btn btn-info" value="Save"/>
                </div>
              </form>
            </div>
          </div>
        </div>  
</>
  )
}

export default AssetList;