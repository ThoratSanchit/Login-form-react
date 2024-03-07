import React, { useState } from "react";

export default function Practice() {
  const [formData, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

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
      console.log("Data ", formData);
      setData({
        username: " ",
        email: " ",
        password: " ",
      });
    } else {
      setErrors(newErrors);
    }
  };
  function set(){
    alert("Data")
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setData({ ...formData, username: e.target.value })}
          />
          <div style={{ color: "red" }}>{errors.username}</div>
        </div>
        <br />
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setData({ ...formData, email: e.target.value })}
          />
          <div style={{ color: "red" }}>{errors.email}</div>
        </div>
        <br />
        <div>
          <label htmlFor="password">Username</label>
          <input
            type="text"
            value={formData.password}
            onChange={(e) => setData({ ...formData, password: e.target.value })}
          />
          <div style={{ color: "red" }}>{errors.password}</div>
        </div>
        <br />
        <button type="submit" onClick={set}>submit</button>
      </form>
    </>
  );
}
