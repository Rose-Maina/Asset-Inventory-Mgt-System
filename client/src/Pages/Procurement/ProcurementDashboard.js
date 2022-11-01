import React from "react";

function ProcurementDashboard() {
    return (
        <>
            <div className="container py-5"> 
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#07d2ff"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Employees</p>
                            </div>
                            <a href="#" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#18bd28"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Departments</p>
                            </div>
                            <a href="#" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#ffc01d"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Categories</p>
                            </div>
                            <a href="#" className="small-box-footer" style={{textDecoration: 'none', color:'black'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#a764fc"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Assets</p>
                            </div>
                            <a href="#" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#ff0a18"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Requests</p>
                            </div>
                            <a href="#" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProcurementDashboard;