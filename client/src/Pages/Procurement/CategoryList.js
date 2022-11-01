import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  function loadCategories() {
    axios.get("/categories").then((res) => {
      setCategories(res.data.reverse());
    });
  }

  useEffect(() => {
    loadCategories();
  }, []);

  function deleteCategory(id) {
    axios.delete(`/categories/${id}`).then(loadCategories());
  }

  return (
    <>


<div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2><strong>Categories</strong></h2>
                </div>
                <div class="col-sm-6">
                  <Link to="/category/create" className="btn btn-success">
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
              {categories.map((category, index) => (
                  <tr key={index}>
                    <td>
                    {index + 1}
                    </td>
                    <td>{category.name}</td>
                    <td className="text-sm flex justify-between items-center text-white-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                    {/* <Link to={`/category/view/${category.id}`} className="bg-teal-600 text-white px-6 py-2 rounded-lg">View</Link> */}
                    <Link to={`/category/edit/${category.id}`} className="btn btn-warning">Edit</Link>
                    <Link onClick={()=>deleteCategory(category.id)} to={"#"} className="btn btn-danger">Delete</Link>
                    </td>
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

export default CategoryList;
