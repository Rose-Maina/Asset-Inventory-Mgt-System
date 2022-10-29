import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAsset = () => {
  const { assetid } = useParams();

  useEffect(() => {
    fetch("/assets/" + assetid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setName(resp.name);
        // setImage(resp.image);
        setCategory(resp.category.name);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }, []);

  const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const assetData = { name, category };

    fetch("/assets" + assetid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(assetData),
    })
      .then((res) => {
        alert("Update Saved Successfully.");
        navigate("/assets");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container py-5">
      <center>
        <div>
          <div style={{ maxWidth: 400 }}>
            <div>
              <form onSubmit={handleEditSubmit}>
                <div>
                  <h4 className="modal-title">Edit Asset</h4>
                </div>
                <div>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" />
                  </div>
                  {/* <div className="form-group">
                    <label>Image Url</label>
                    <input type="text" value={image} onChange={e=>setImage(e.target.value)} className="form-control" required />
                  </div> */}
                  <div className="form-group">
                    <label>Category</label>
                    <input type="text" value={category} onChange={e=>setCategory(e.target.value)} className="form-control" /> 
                  </div>
                </div>
                <div>
                  <Link to="/assets" className="btn btn-default">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-success" value="Update">
                    Update 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default EditAsset;
