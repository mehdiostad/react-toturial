import axios from "axios";
import React, { Component, createRef } from "react";
import style from '../style.css'
class Login extends Component {
  email = createRef();
  password = createRef();
  handleSubmit = async(e) => {
    e.preventDefault();
    console.log("email:",  this.email.current.value )
    console.log("pass:",  this.password.current.value )
    const account = { email: this.email.current.value ,password : this.password.current.value }
    const response = await axios.post('https://reqres.in/api/login', account);
    console.log(response)
  };
  render() {
    return (
      <div style={{backgroundImage: `url("https://via.placeholder.com/500")`}}>
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input  ref={this.email} id="email" className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input ref={this.password} id="password" className="form-control" type="text" />
          </div>
          <button className="btn btn-primary">submit</button>
        </form>
        </div>
      </div>
     
    );
  }
}

export default Login;
