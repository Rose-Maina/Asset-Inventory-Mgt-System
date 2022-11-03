import React from "react";
import { Link } from "react-router-dom";

const FinanceDashboard = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
          <div className="col">
            <div div className="card-body h-100 shadow align-items-center d-flex justify-content-center">
              <Link
                to="/assetlistfinance"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  alt=""
                  height={200}
                  src="https://imgs.search.brave.com/aLDtAinzMU4G_ULYQZOPycUU9Q0mxbFqMK3AkSZwsYg/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9zYW1r/b2RpLmNvLm56L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEw/L0Fzc2V0Mi1JY29u/LVRyYW5zcGFyZW50/LnBuZz94ODA4MTg"
                />{" "}
              </Link>
              <h4 className="py-3">
                <strong>Assets</strong>
              </h4>
            </div>
          </div>
          <div className="col">
            <div div className="card-body h-100 shadow align-items-center d-flex justify-content-center">
              <Link
                to="/requests"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  alt=""
                  height={200}
                  src="https://imgs.search.brave.com/wj4__Exa0DNCR3tgQuYDQevsZY96j5l0xsWO-W3eLPg/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9yZXF1/ZXN0LWljb24tcG5n/L3JlcXVlc3QtaWNv/bi1wbmctMS5qcGc"
                />{" "}
              </Link>
              <h4 className="py-3">
                <strong>Requests</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceDashboard;
