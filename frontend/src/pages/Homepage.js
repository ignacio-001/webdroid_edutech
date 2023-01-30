import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import SignupPage from "./Signup/SignupForm";
import { AuthContextProvider } from "./../Context/AuthContext";
import Nav from '../components/Navigationbar';
import ProjectForm from './projectForm';
import Softwares from "./Softwares";
import Hardwares from "./Hardwares";
import Sak from "../components/Navigation";

const LandingPage = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
        <Sak />
            <Nav/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/softwares" element={<Softwares />}/>
            <Route path="/hardwares" element={<Hardwares />}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/createProject" element={<ProjectForm />} />
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
