import { Component } from "react";
import Navbar from "./components/navbar";
import Users from "./components/users";
import { Route, Navigate, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import User from "./components/user";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
         
            <Routes>
              <Route path="/users/:id" element={<User/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/"  element={<Home/>} />
              <Route path="/home"  element={<Navigate replace to ="/"/>} />
            </Routes>
          
        </div>
      </>
    );
  }
}

export default App;
