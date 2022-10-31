import { Route, Routes } from 'react-router-dom';
import './Category.css'
import HomeCategory from './HomeCategory'
import NavCategory from './NavCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import UserCategory from './UserCategory';

const Category = () => {
  return (

    <div className="Ap">
      <NavCategory/>
      <Routes>
        <Route  path="/" exact element={<HomeCategory/>} />
        <Route  path="category/home-category" exact element={<HomeCategory/>} />
        <Route  path="category/user-category/:id" exact element={<UserCategory/>} />
        
        <Route  path="category/add-category" exact element={<AddCategory/>} />
        
        <Route  path="category/edit-category/:id" exact element={<EditCategory/>} />
      </Routes>
    </div>
  )
}


export default Category
