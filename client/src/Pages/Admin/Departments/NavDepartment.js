import React from 'react'
import { Link } from 'react-router-dom'

function NavDepartment() {
  return (
    <>
        
        
        <div className="w-[84.8vw] h-16 flex items-center px-14 justify-between bg-teal-600">
            {/* <Link to={"/"} className="text-3xl text-teal-200 font-semibold font-Montesarrat">CRUD</Link>
             */}
        
            <div className="text-3xl text-teal-200 font-semibold font-Montesarrat">Department</div>
            <Link to={"department/add-department"} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add Department</Link>
        </div>
    </>
  )
}


export default NavDepartment


