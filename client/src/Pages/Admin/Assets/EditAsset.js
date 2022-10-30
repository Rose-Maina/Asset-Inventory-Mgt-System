import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAsset = () => {
    const { assetid } = useParams();
    // const base_API = "/assets";

   

    useEffect(() => {
        fetch("/assets/" + assetid).then((res) => {
            return res.json();
        }).then((resp) => {
            setName(resp.name);
            setCategory_Id(resp.category.id);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [name, setName] = useState("");
    const [category_id, setCategory_Id] = useState("");


    const navigate=useNavigate();

    const handleEditSubmit=(e)=>{
      e.preventDefault();
      const assetData={name,category_id};
      

      fetch("/assets/" + assetid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(assetData)
      }).then((res)=>{
        if (res.ok){
        alert('Asset Updated successfully.')}
        navigate('/assets');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

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
                  <div className="form-group">
                    <label>Category ID</label>
                    <input type="text" value={category_id} onChange={e=>setCategory_Id(e.target.value)} className="form-control" disabled /> 
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
