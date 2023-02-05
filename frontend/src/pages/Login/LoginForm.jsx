import React, {useState} from "react";
import "./login.css";
import {useLogin} from '../../hooks/useLogin';
const LoginForm=() => {
  const [formData, setFormData]=useState({
    email: "",
    password: "",
  });
  const {login, loading, error}=useLogin();
  const handleChange=(event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit=(event) => {
    event.preventDefault();
    login(formData);
  };

  return (
    <div className="as">
      <form onSubmit={handleSubmit}>
        <label className="login-label">
          Email:
          <input
            className="login-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="login-label">
          Password:
          <input
            className="login-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="login-button" type="submit">
          Login
        </button>
        {error&&<div  >Sorry :( {error} </div>}
      </form>
    </div>
  );
};

export default LoginForm;
