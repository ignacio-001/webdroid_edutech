import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

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
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <header className="navbar flex">
        <div className="navbar__logo">
          <Link to="/">
            <strong>WebDroid</strong>
          </Link>
        </div>
        <div className="navbar__links flex">
          <Link className="nav__item" to="/">
            Home
          </Link>
          <div
            className="nav__item"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            {/* added div wrapper and onMouseEnter/onMouseLeave handlers for dropdown */}
            <Link style={{ color: `#2c2c2c` }} to="/softwares">
              Software Projects
            </Link>
            {dropdown && (
              <div className="dropdown">
                {/* added dropdown div */}
                <Link to="/softwares">Android</Link>
                <Link to="/softwares">Blockchain</Link>
                <Link to="/softwares">Cloud</Link>
                <Link to="/softwares">MatLab</Link>
                <Link to="/softwares">Python</Link>
                <Link to="/softwares">Web Development</Link>
              </div>
            )}
          </div>
          <div
            className="nav__item"
            onMouseEnter={() => setDropdown2(true)}
            onMouseLeave={() => setDropdown2(false)}
          >
            {/* added div wrapper and onMouseEnter/onMouseLeave handlers for dropdown */}
            <Link style={{ color: `#2c2c2c` }} to="/hardwares">
              Hardware Projects
            </Link>
            {dropdown2 && (
              <div className="dropdown">
                {/* added dropdown div */}
                <Link to="/hardwares">Drone</Link>
                <Link to="/hardwares">IoT/Robotics</Link>
              </div>
            )}
          </div>
          <Link className="nav__item" to="/freeprojects">
            Free Projects
          </Link>
          <Link className="nav__item" to="/aboutus">
            About Us
          </Link>
          {user ? (
            <Link className="nav__item" to="/createProject">
              Create Project
            </Link>
          ) : (
            <Link className="nav__item__icon" to="/login">
              {/* <i class="fa-solid fa-arrow-right-to-bracket"></i> */}
              <button className="signup__btn" type="submit">
                Log In
                {/* <svg>
                  <path
                    fill="currentColor"
                    d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                  ></path>
                </svg> */}
              </button>
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

        {/* <div className="navbar__links flex"></div> */}
      </header>
    </>
  );
};

export default NavBar;
