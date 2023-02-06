import React from "react";
import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import SignupPage from "./Signup/SignupForm";
import { AuthContextProvider } from "../Context/AuthContext";
import NavBar from "../components/NavBar";
import ProjectForm from "./projectForm";
import Softwares from "./Softwares";
import Hardwares from "./Hardwares";
import ProjectPage from "./Project/ProjectPage";
import soft from "../images/software.jpg";
import { Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/softwares" element={<Softwares />} />
            <Route path="/hardwares" element={<Hardwares />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/createProject" element={<ProjectForm />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
      <ProjectPage embedId="" />
      {/* <Footer /> */}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="hero">
      <h1 className="heroText">
        <strong>Welcome to the Education Website</strong>
      </h1>
      <img className="heroImg" src={soft} alt="Sample_software_photo" />
      <div className="row">
        <Card className="card-item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={soft} />
          <Card.Body>
            <Card.Title>Softwares</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia, quod, voluptas, voluptate quae.
            </Card.Text>
            <Button variant="primary" href="/softwares">
              Go to Softwares
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={soft} onClick={Softwares} />
          <Card.Body>
            <Card.Title>Softwares</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernaturs quia, quod, voluptas, voluptate quae.
            </Card.Text>
            <Button variant="primary" href="/softwares">
              Go to Softwares
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={soft} />
          <Card.Body>
            <Card.Title>Softwares</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernaturs quia, quod, voluptas, voluptate quae.
            </Card.Text>
            <Button variant="primary" href="/softwares">
              Go to Softwares
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={soft} />
          <Card.Body>
            <Card.Title>Softwares</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernaturs quia, quod, voluptas, voluptate quae.
            </Card.Text>
            <Button variant="primary" href="/softwares">
              Go to Softwares
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={soft} />
          <Card.Body>
            <Card.Title>Softwares</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernaturs quia, quod, voluptas, voluptate quae.
            </Card.Text>
            <Button variant="primary" href="/softwares">
              Go to Softwares
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={soft} />
          <Card.Body>
            <Card.Title>Softwares</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernaturs quia, quod, voluptas, voluptate quae.
            </Card.Text>
            <Button variant="primary" href="/softwares">
              Go to Softwares
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
