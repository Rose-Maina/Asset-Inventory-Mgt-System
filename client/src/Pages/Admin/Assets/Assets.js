import React, {useState, useEffect} from "react";
import AddAsset from "./AddAsset"

const base_API = "/assets";

function Assets() {
	const [assets, setAssets] = useState([]);

	useEffect(() => {
		fetch(base_API)
		.then(res => res.json())
		.then(assets => setAssets(assets))
	}, []);

	function handleAddAsset(newAsset) {	
		setAssets([...assets, newAsset]);
	  }
    return (
        <>
<div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>Manage <b>Assets</b></h2>
					</div>
					<div class="col-sm-6">
					<AddAsset onAddAsset={handleAddAsset}/>
						{/* <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Asset</span></a>
						<a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete all</span></a>						 */}
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
						{/* <th>Image</th> */}
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
				{assets.map((asset, index)=> (  

					<tr key={index}>
						<td >
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>

						<td>{asset.name}</td>
            			<td>{asset.category.name}</td>
						{/* <td>{asset.image}</td> */}
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
 {/* Delete Modal */}
<div id="deleteEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Delete Asset</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete these Records?</p>
					<p class="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-danger" value="Delete"/>
				</div>
			</form>
		</div>
	</div>
</div>
</>
    )
}

export default Assets;