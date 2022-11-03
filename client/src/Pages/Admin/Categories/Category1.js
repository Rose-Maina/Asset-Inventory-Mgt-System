import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeCategory from './Category'
import NavCategory from './NavCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import UserCategory from './ViewCategory';
import axios from "axios";

const Category = () => {

  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("/categories").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios.delete(`/categories/${id}`).then(loadUsers());
  }

  return (

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
                    Add New Category
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {categories.map((category, index) => ( */}
                  <tr >
                    <td>
                    </td>
                    <td></td>
                    <td>
                    <a href="#viewAsset" class="view" data-toggle="tooltip"  >
                    <i  class="material-icons" data-toggle="tooltip" title="View">&#xE945;</i></a>
                    <a href="#editAsset" class="edit"data-toggle="modal" >
                        <i  class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> 
                    <a href="#deleteAsset" class="delete" data-toggle="modal" >
                        <i  class="material-icons" data-toggle="tooltip" title="Delete"> &#xE872;</i></a>
                    </td>
                  </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    // <div className="Ap">
    //   <NavCategory/>
    //   <Routes>
    //     <Route  path="/" exact element={<HomeCategory/>} />
    //     <Route  path="category/home-category" exact element={<HomeCategory/>} />
    //     <Route  path="category/user-category/:id" exact element={<UserCategory/>} />
        
    //     <Route  path="category/add-category" exact element={<AddCategory/>} />
        
    //     <Route  path="category/edit-category/:id" exact element={<EditCategory/>} />
    //   </Routes>
    // </div>
  )
}


export default Category;

// onClick={() => { (category.id);}}