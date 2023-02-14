import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// import Container from "react-bootstrap/Container";
// import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleNavClick = () => setClick(!click);

  const { user, dispatch } = useAuthContext();
  let authorized;
  const navigate = useNavigate();
  if (user != null && user.authority === "admin") authorized = true;
  else authorized = false;
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
    navigate("/");
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
    <>
      <div className="nav__icon" onClick={handleNavClick}>
        {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
      </div>
      <header className="navbar grid">
        <div className="navbar__links flex">
          <Link className="nav__item" to="/">
            Home
          </Link>
          <Link className="nav__item" to="/softwares">
            Software Projects
          </Link>
          <Link className="nav__item" to="/hardwares">
            Hardware Projects
          </Link>
        </div>
        <div className="navbar__logo">
          <Link className="nav__item" to="/">
            <strong>WebDroid</strong>
          </Link>
        </div>
        <div className="navbar__links flex">
          <Link className="nav__item" to="/freeprojects">
            Free Projects
          </Link>
          <Link className="nav__item" to="/aboutus">
            About Us
          </Link>
          {user ? (
            <Link className="nav__item" to="/createProject"></Link>
          ) : (
            <Link className="nav__item" to="/login">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          )}
          {user ? (
            <Link className="nav__item" to="/" onClick={handleClick}>
              <i class="fa-solid fa-user"></i>
            </Link>
          ) : (
            console.log("hello")
          )}
          {authorized ? (
            <Link className="nav__item" to="/admin">
              {/* Admin */}
            </Link>
          ) : null}
        </div>
      </header>
      <div className={click ? "navbar__mobile active" : "navbar__mobile"}></div>
    </>
  );
};

export default NavBar;
