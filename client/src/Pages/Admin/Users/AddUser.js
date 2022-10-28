import React, {useState} from 'react'

function AddUser({onAddUser}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_Confirmation] = useState("");
    const [contact, setContact] = useState("");
    const [department, setDepartment] = useState("");
    const [user_type, setUser_Type] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      contact: contact,
      department: department,
      user_type: user_type,
   
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((r) => r.json())
      .then((newUser) => onAddUser(newUser));
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
          type="text" placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text" placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text" placeholder="Password_Confirmation"
          name="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPassword_Confirmation(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text" placeholder="Contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text" placeholder="Department"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text" placeholder="Role"
          name="user_type"
          value={user_type}
          onChange={(e) => setUser_Type(e.target.value)}
        />
      </label>
      <button className='btn btn-success' type="submit">Add to List</button>
    </form>
  );
}


export default AddUser;