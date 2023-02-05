import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import AllProject from "./Allprojects/allProject"
import SignupPage from "./Signup/SignupForm";
import { AuthContextProvider } from "./../Context/AuthContext";
import Nav from '../components/Nav';
import ProjectForm from './projectForm';
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
            <Route path="/createProject" element={<ProjectForm />} />
            <Route path="/allProjects" element={<AllProject />} />
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
