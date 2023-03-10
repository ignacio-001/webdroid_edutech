import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import { AuthContextProvider } from "./Context/AuthContext";
import CreateForm from "./pages/createProject";
import Softwares from "./pages/Softwares";
import Hardwares from "./pages/Hardwares";
import Freeprojects from "./pages/Freeprojects";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Python from "./pages/Python";
import Webbased from "./pages/Webbased";
import Android from "./pages/Android";
import Blockchain from "./pages/Blockchain";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/softwares" element={<Softwares />} />
            <Route path="/hardwares" element={<Hardwares />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/createProject" element={<CreateForm />} />
            <Route path="/freeProjects" element={<Freeprojects />} />
            <Route path="/python" element={<Python />} />
            <Route path="/webbased" element={<Webbased/>} />
            <Route path="/android" element={<Android/>} />
            <Route path="/blockchain" element={<Blockchain/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
      {/* <ProjectPage embedId="" /> */}
      <Footer />
    </div>
  );
}

export default App;
