import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AssetViewFinance = () => {

  const { id } = useParams();

  const [asset, setAsset] = useState([]);

  useEffect(() => {
    axios.get(`/assets/${id}`).then((res) => {
      setAsset(res.data);
    });
  }, []);

  console.log(asset);

  return (
    <div className="container py-5">
      <center>
      <h3 className="py-4"><strong>Asset Details</strong></h3> 
        {asset && (
          <div className="card w-50">
            <div className="card-body">
              <img
                src={asset.image}
                className="card-img-top"
                alt={asset.name}
              /><br/>
              <h5 className="card-text"><strong>Name:</strong> {asset.name}</h5><br/>
              {/* <h5 className="card-text"><strong>Category:</strong> {asset.category.name}</h5> */}
            </div>
          </div>
        )}<br/> 
        <Link to="/assetlistfinance" className="btn btn-default">
          <h6><strong>BACK</strong></h6>
        </Link>
      </center>
    </div>
  );
};

export default AssetViewFinance;
