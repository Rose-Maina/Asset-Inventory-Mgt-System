import { Route, Routes } from 'react-router-dom';
import './Department.css'
import HomeDepartment from './HomeDepartment'
import NavDepartment from './NavDepartment';
import AddDepartment from './AddDepartment';
import EditDepartment from './EditDepartment';
import UserDepartment from './UserDepartment';

const Department = () => {
  return (

    <div className="App">
      <NavDepartment/>
      <Routes>
        <Route  path="/" exact element={<HomeDepartment/>} />
        <Route  path="department/home-department" exact element={<HomeDepartment/>} />
        <Route  path="department/user-department/:id" exact element={<UserDepartment/>} />
        
        <Route  path="department/add-department" exact element={<AddDepartment/>} />
        
        <Route  path="department/edit-department/:id" exact element={<EditDepartment/>} />
      </Routes>
    </div>
  )
}

export default Department





