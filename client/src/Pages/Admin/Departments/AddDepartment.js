import React, {useState} from 'react'

function AddDepartment({onAddDepartment}) {
    const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const departmentData = {
      name: name,
    
    };
    fetch("/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentData),
    })
      .then((r) => r.json())
      .then((newDepartment) => onAddDepartment(newDepartment));
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

export default AddDepartment;