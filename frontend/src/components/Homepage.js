import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import SignupPage from "./Signup/SignupForm";
import { AuthContextProvider } from "./../Context/AuthContext";
import Nav from './Nav';

const LandingPage = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
            <Nav/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Education Website</h1>
    
    </div>
  );
};

export default LandingPage;
