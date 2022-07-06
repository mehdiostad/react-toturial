import React, { Component } from "react";
class Register extends Component {
  state = {
    account: {
      name: "",
    },
    userNames: []
  };

  preventSubmit = (e) => {
    e.preventDefault();
    const account ={...this.state.account}
    const newArrey = this.state.userNames.slice();
    newArrey.push(account);
    this.setState({
        userNames: newArrey
    })
   
    console.log(newArrey)
    console.log("the new user has been submited")
  };
  handleEnter = (e) => {
   const input = e.currentTarget;
   const account = {...this.state.account};
   account[input.name] = input.value;
   this.setState({account})
   
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName">Enter your name to Registeration:</label>
            <input
            
              value={this.state.account.name}
              id="userNameInput"
              className="form-control"
              type="text"
              name="name"
              onChange={this.handleEnter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.preventSubmit}>
            submit
          </button>
        </form>
      </>
    );
  }
  handleInput = (event) => {
    this.setState({ username: event.target.value });
  };
 
}

export default Register;
