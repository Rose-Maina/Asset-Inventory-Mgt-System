import React from 'react';
import {SideData} from './SidebarData';
import {NavLink} from 'react-router-dom';


function FinanceSidebar() {
    return (
        <>
            <div className="sidebar-list">
            
                {SideData.map((val, key)=>{
                        return(
                            <div key={key}>
                                <NavLink to={val.path}
                                className="row"
                                id={window.location.pathname === val.path ? "active" : ""}
                                onClick={()=> {
                                    window.location.pathname = val.path}}                    
                                >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                                </NavLink>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default FinanceSidebar;
