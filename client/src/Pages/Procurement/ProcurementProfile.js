import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProcurementProfile = () => {

  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(user);


  return (
    <div>
    <center>
  <div className="container py-5">
  <h3 className="py-4"><strong>User Details</strong></h3>
  {user && ( 
    <div className="card mb- h-100 shadow py-4" style={{maxWidth: 800}}>
      <div className="row g-1">
      
        <div className="col-md-4">
          <img src="" className="img-fluid rounded-start" alt={user.name} />
        </div>
        <div className="col-md-8 h-100 shadow">
          <div className="card-body text-left">
            <h5 className="card-text"><strong>Name:</strong> {user.name}</h5><br/>
            <h5 className="card-text"><strong>Email:</strong> {user.email}</h5><br/>
            <h5 className="card-text"><strong>Contact:</strong> {user.contact}</h5><br/>
            <h5 className="card-text"><strong>Role:</strong> {user.user_type}</h5><br/>
            {/* <h5 className="card-text"><strong>Department:</strong> {user.department.name}</h5><br/> */}             
        </div>
        </div>
        
      </div>
    </div>
    )}
    <Link to="/procurementdashboard" className="btn btn-default">
       <h6><strong>BACK</strong></h6>
     </Link>
  </div>
</center>
</div>
  );
}

export default ProcurementProfile;
