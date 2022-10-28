import React, {useState} from 'react'

function AddCategory({onAddCategory}) {
    const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const categoryData = {
      name: name,
   
    };
    fetch("/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((r) => r.json())
      .then((newCategory) => onAddCategory(newCategory));
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
      <button className='btn btn-success' type="submit">Add to List</button>
    </form>
  );
}

export default AddCategory;