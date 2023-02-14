import React from "react";
import Card from "../components/Card";
import soft from "../images/software.jpg";

function Softwares() {
  return (
    <div>
      <img
        src={soft}
        alt="Sample_software_photo"
        href="/login"
        style={{
          width: "100%",
          height: "400px",
          marginTop: "0px",
        }}
      />
      <div style={{ display: "block", textAlign: "center" }}>
        <h1 style={{ fontSize: "50px" }}>Software Projects</h1>
        <br />
        <br />
        <h3>The list for showing software domains for projects.</h3>
      </div>
      <div style={{ padding: "10px 100px" }}>
        <ul>
          <li>
            <a href="/">Project 1</a>
          </li>
          <li>
            <a href="/">Project 2</a>
          </li>
          <li>
            <a href="/">Project 3</a>
          </li>
        </ul>
      </div>
      <Card />
    </div>
  );
}

// const hed = {
//     display: "block",
//     textAlign: "center",

//   };

export default Softwares;
