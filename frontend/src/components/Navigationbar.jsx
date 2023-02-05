import React from "react";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";
import Container from 'react-bootstrap/Container';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

const NavBar=() => {
  const {user, dispatch}=useAuthContext();
  let authorized;
  const navigate=useNavigate();
  if(user!=null&&user.authority==="admin") authorized=true;
  else authorized=false;
  const {logout}=useLogout();
  const handleClick=() => {
    logout();
    navigate("/")
  };
  useEffect(() => {
    const user=JSON.parse(localStorage.getItem("user"));
    if(user&&user.authority==="admin") authorized=true;
    else authorized=false;
    if(!user) {
      console.log("no user logged in ");
    } else {
      console.log(authorized);
      console.log(user.email, "here");
      dispatch({type: "LOGIN", payload: user});
      console.log("hello");
      console.log(user);
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">WebDroid</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"
            style={{maxHeight: '100px'}}
            navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="Software Projects" id="collasible-nav-dropdown" onMouseOver="/softwares">
              <NavDropdown.Item href="/webbased">Web-Based Projects</NavDropdown.Item>
              <NavDropdown.Item href="/softwares">Android</NavDropdown.Item>
              <NavDropdown.Item href="/python">Python</NavDropdown.Item>
              <NavDropdown.Item href="/blockchain">Blockchain</NavDropdown.Item>
              <NavDropdown.Item href="/cloud">Cloud</NavDropdown.Item>
              <NavDropdown.Item href="/matlab">Matlab</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/softwares">
                And many more
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Hardware Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/iot">IOT/Robotics</NavDropdown.Item>
              <NavDropdown.Item href="/drone">Drone</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/hardwares">
                And many more
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/freeprojects">Free Projects</Nav.Link>
          </Nav>
          {user&&authorized&&(
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/createProject">Create Project</Nav.Link>
            </Nav>
          )}
          {!user&&(
            <Nav class="ms-auto mb-2 mg-lg-0">
              {/* <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link> */}
              <Button variant="outline-primary" href="/login">Login</Button>{' '}
              {/* <Nav.Link as={Link} to="/signup">
            Signup
          </Nav.Link> */}
              <Button href="/signup">SignUp</Button>{' '}
            </Nav>
          )}
          {user&&(
            <Nav class="ms-auto mb-2 mg-lg-0">
              <Button
                variant="outline-danger"
                onClick={handleClick}
              // onClick={()=>navigate("/")}
              // style={{ float: "right", marginLeft: 800 }}
              >
                Logout
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;