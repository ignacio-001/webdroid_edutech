import React, { useState } from "react";
import "./signup.css";
import { useSignup } from "../../hooks/useSignup";
const SignupPage = () => {
  const { signup, loading, error } = useSignup();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <label className="signup-label">
        Email:
        <input
          className="signup-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="signup-label">
        Password:
        <input
          className="signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="signup-label">
        Confirm Password:
        <input
          className="signup-input"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <button disabled={loading} className="signup-button" type="submit">
        Sign Up
      </button>
      {error&&<div  >Sorry :( {error} </div>}
    </form>
  );
};

export default SignupPage;
