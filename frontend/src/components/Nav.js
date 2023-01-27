import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "./../hooks/useLogout";
import { useAuthContext } from "./../hooks/useAuthContext";

const Nav = () => {
  const { user, dispatch } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginRight: "10px",
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      console.log("no user logged in ");
    } else {
      console.log(user.email, "here");
      dispatch({ type: "LOGIN", payload: user });
      console.log("hello");
      console.log(user);
    }
  }, []);
  return (
    <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
      {user && (
        <div>
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
      {!user && (
        <div>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
          <Link to="/signup" style={linkStyle}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Nav;