import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "./../hooks/useLogout";
import { useAuthContext } from "./../hooks/useAuthContext";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

const NavBar = () => {
  const { user, dispatch } = useAuthContext();
  let authorized;
  if (user != null && user.authority === "admin") authorized = true;
  else authorized = false;
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.authority === "admin") authorized = true;
    else authorized = false;
    if (!user) {
      console.log("no user logged in ");
    } else {
      console.log(authorized);
      console.log(user.email, "here");
      dispatch({ type: "LOGIN", payload: user });
      console.log("hello");
      console.log(user);
    }
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      {user && authorized && (
        <Nav>
          <Nav.Link as={Link} to="/createProject">Create Project</Nav.Link>
        </Nav>
      )}
      {!user && (
        <Nav>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Signup
          </Nav.Link>
        </Nav>
      )}
      <Nav className="mr-auto">
        <Nav.Link href="#about-us">About Us</Nav.Link>
        <NavDropdown title="Software" id="basic-nav-dropdown">
          <NavDropdown.Item href="#python">Python</NavDropdown.Item>
          <NavDropdown.Item href="#data-science">Data Science</NavDropdown.Item>
          <NavDropdown.Item href="#machine-learning">
            Machine Learning
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Hardware" id="basic-nav-dropdown">
          <NavDropdown.Item href="#iot">IOT</NavDropdown.Item>
          <NavDropdown.Item href="#robotics">Robotics</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {user && (
        <Nav>
          <Button
            variant="outline-light"
            onClick={handleClick}
            style={{ float: "right", marginLeft: 800 }}
          >
            Logout
          </Button>
        </Nav>
      )}
    </Navbar>
  );
};

export default NavBar;
