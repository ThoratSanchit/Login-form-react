import React, { useState } from "react";
import backgroundImage from "../login.jpg";
import "../css/vaibhav.css"

export default function Vaibhav() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const sumbit=()=>{
    alert("Confirm to submit")
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
   
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Login with", formData);
     
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div
    className="background-container"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    
      <div className="row justify-content-center like">
        <div className="col-md-6">
          <h1>Login form</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className={"form-control" + (errors.username ? " is-invalid" : "")}
                value={formData.username}
                placeholder="Enter Username"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>
      
            <div className="form-group">
              <input
                type="email"
                className={"form-control" + (errors.email ? " is-invalid" : "")}
                value={formData.email}
                placeholder="Enter email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
    
            <div className="form-group">
              <input
                type="password"
                className={"form-control" + (errors.password ? " is-invalid" : "")}
                value={formData.password}
                placeholder="Enter password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
      
            <button type="submit" onClick={sumbit} className="btn btn-primary submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    
  );
}



