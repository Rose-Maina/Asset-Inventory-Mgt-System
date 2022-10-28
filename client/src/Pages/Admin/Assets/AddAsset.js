import React, {useState} from 'react'

function AddAsset({onAddAsset}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const assetData = {
      name: name,
      image: image,
      category: category,
   
    };
    fetch("/assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assetData),
    })
      .then((r) => r.json())
      .then((newAsset) => onAddAsset(newAsset));
      
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        <input
          type="text" placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text" placeholder="Image"
          name="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text" placeholder="Category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      
     
      <button className='btn btn-success' type="submit">Add to List</button>
    </form>
  );
}


export default AddAsset;