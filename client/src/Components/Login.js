import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const navigate = useNavigate();

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
      navigate("/mainpage")
    } else if (
      e.target.email.value === "admin@gmail.com" &&
      e.target.password.value === "admin1234"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="user@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">SUBMIT</button>
        </form>

      </div>
    );
  }
}
export default Login;
