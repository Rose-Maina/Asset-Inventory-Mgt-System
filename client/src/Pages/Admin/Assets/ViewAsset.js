import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewAsset = () => {
  const { assetid } = useParams();

  const [assetData, setAssetData] = useState({});

  useEffect(() => {
    fetch("/assets/" + assetid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setAssetData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container py-5">
      <center>
        <h3 className="card-title py-3">Asset Details</h3>
        {assetData && (
          <div className="card w-50">
            <div className="card-body">
              <img
                src={assetData.image}
                className="card-img-top"
                alt={assetData.name}
              />
              <h5 className="card-text">{assetData.name}</h5>
            </div>
          </div>
        )}
        <Link to="/assets" className="btn btn-default">
          <h6>Back</h6>
        </Link>
      </center>
    </div>
  );
};

export default ViewAsset;
