import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div div className="card-body h-100 shadow">
              <Link
                to="/users"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "white", left: 30 }}
              >
                <img
                  style={{ left: 30 }}
                  alt=""
                  height={200}
                  src="https://imgs.search.brave.com/p3LLBkJuysCk4LlK7E1qB5482GYqVTKry0CI4Wz8GEU/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8xNS8xOC8wNS9j/b21wdXRlci0xMzMx/NTc5XzY0MC5wbmc"
                />{" "}
              </Link>
              <h4 className="py-3" style={{ padding: 30 }}>
                <strong>USERS</strong>
              </h4>
            </div>
          </div>
          <div className="col">
            <div div className="card-body h-100 shadow">
              <Link
                to="/department"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  alt=""
                  height={200}
                  src="https://imgs.search.brave.com/yOCsODMza4EeW9PeGCASrICI2slM-gWD6W3ezAjDfTg/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydG1heC5j/b20vcG5nL2Z1bGwv/MTEyLTExMjAzNTRf/ZnJlZS1idWlsZGlu/Z3MtaWNvbnMtb2Zm/aWNlLWJ1aWxkaW5n/LWljb24ucG5n"
                />{" "}
              </Link>
              <h4 className="py-3" style={{ padding: 30 }}>
                <strong>DEPARTMENTS</strong>
              </h4>
            </div>
          </div>
          <div className="col">
            <div div className="card-body h-100 shadow">
              <Link
                to="/category"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  alt=""
                  height={200}
                  src="https://imgs.search.brave.com/ENeWgRnVKB7DoPjkB7oI8W8gVzkLoHBnWtGj0hJwK-0/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbXVsdGltZWRp/YS1zb3VuZC03LzQ4/L0FkZF9jYXRlZ29y/eS1fcGxheWxpc3Qt/NTEyLnBuZw
                "
                />{" "}
              </Link>
              <h4 className="py-3" style={{ padding: 30 }}>
                <strong>CATEGORIES</strong>
              </h4>
            </div>
          </div>

          <div className="col">
            <div div className="card-body h-100 shadow">
              <Link
                to="/assets"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  alt=""
                  height={200}
                  src="https://imgs.search.brave.com/aLDtAinzMU4G_ULYQZOPycUU9Q0mxbFqMK3AkSZwsYg/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9zYW1r/b2RpLmNvLm56L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEw/L0Fzc2V0Mi1JY29u/LVRyYW5zcGFyZW50/LnBuZz94ODA4MTg"
                />{" "}
              </Link>
              <h4 className="py-3" style={{ padding: 30 }}>
                <strong>ASSETS</strong>
              </h4>
            </div>
          </div>
          <div className="col">
            <div div className="card-body h-100 shadow">
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
              <h4 className="py-3" style={{ padding: 30 }}>
                <strong>REQUESTS</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Dashboard;
