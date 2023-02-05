import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useLogin } from './../../hooks/useLogin';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, loading, error } = useLogin();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(formData);
      navigate("/allProjects");
    
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
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
      {error && <div>Sorry :( {error} </div>}
    </form>
  );
};

export default LoginForm;
