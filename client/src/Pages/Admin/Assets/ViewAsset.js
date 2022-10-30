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
        <h3>Asset Details</h3>
        <div className="row row-cols-1 row-cols-md-4 py-3">
          {assetData && (
            <div className="col mb-4">
              <div className="card text-center h-100 shadow">
                <img
                  src={assetData.image}
                  className="card-img-top"
                  alt={assetData.name}
                />
                <div className="card-body ">
                  <h5 className="card-title">{assetData.name}</h5>
                  {/* <h5 className="card-title">{assetData.category.name}</h5> */}
                </div>
              </div>
              <Link to="/assets" className="btn btn-default">
                <h6>Back</h6>
              </Link>
            </div>
          )}
        </div>
      </center>
    </div>
  );
};

export default ViewAsset;
