import React from "react";
import soft from "../images/software.jpg";
import pyth from "../images/python.jpeg";
// import Card from "../components/Card";
import "./Softwares.css";

function Softwares() {
  return (
    <div>
      <img
        src={soft}
        alt="Sample_software_photo"
        href="/login"
        style={{
          width: "100%",
          height: "auto",
          marginTop: "0px",
        }}
      />
      <section className="section-container">
        <div className="container">
        <h1>Software Project Domains</h1>
        <div className="cards">
        <div className="card">
          <h3>Python Projects</h3>
          <img
        src={pyth}
        alt="Sample_software_photo"
        href="/login"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
            <a className="card-btn" href="/python">Explore</a>
        </div>
        <div className="card">
          <h3>Web-Based Projects</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <a className="card-btn" href="/webbased">Explore</a>
        </div>
        <div className="card">
          <h3>Android Projects</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <a className="card-btn" href="/android">Explore</a>
        </div>
        <div className="card">
          <h3>Cloud Projects</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <a className="card-btn" href="/python">Explore</a>
        </div>
        <div className="card">
          <h3>Blockchain Projects</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <a className="card-btn" href="/blockchain">Explore</a>
        </div>
        <div className="card">
          <h3>Card 6</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <a className="card-btn" href="/python">Explore</a>
        </div>
        <div className="card">
          <h3>Card 7</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <button className="card-btn">Explore</button>
        </div>
        <div className="card">
          <h3>Card 8</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <a className="card-btn" href="/python">Explore</a>
        </div>
        <div className="card">
          <h3>Card 9</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit eius expedita 
            quasi neque, beatae dolore natus nostrum repudiandae possimus molestias mollitia vel 
            veniam doloribus, rem omnis consequuntur perspiciatis? Quod.</p>
            <a className="card-btn" href="/python">Explore</a>
        </div>
      </div>
      </div>
      </section>
      {/* <div className="row flex">
        <Card
          title="Some Python Projects"
          image="https://picsum.photos/200/300?random=1"
          catagory="Python"
          description="Want to explore some python projects.... Here we have...."
          link="/python"
          price="299"
        />
        <Card
          title="Some Web-Based Projects"
          image="https://picsum.photos/200/300?random=2"
          catagory="Web-Based"
          description="Want to explore some web-based projects.... Here we have...."
          link="/webbased"
        />
        <Card
          title="Some Android Projects"
          image="https://picsum.photos/200/300?random=3"
          catagory="Android"
          description="Want to explore some android projects.... Here we have...."
          link="/android"
        />
      </div>
      <div className="row flex">
        <Card
          title="Some Blockchain Projects"
          image="https://picsum.photos/200/300?random=4"
          catagory="Blockchain"
          description="Want to explore some blockchain projects.... Here we have...."
          //   price="299"
          link="/blockchain"
        />
        <Card
          title="Some Cloud Projects"
          image="https://picsum.photos/200/300?random=5"
          catagory="Cloud"
          description="Want to explore some cloud projects.... Here we have...."
          link="/cloud"
        />
        <Card
          title="Some Matlab Projects"
          image="https://picsum.photos/200/300?random=6"
          catagory="Matlab"
          description="Want to explore some matlab projects.... Here we have...."
          link="/matlab"
        />
      </div> */}
    </div>
  );
}

// const hed = {
//     display: "block",
//     textAlign: "center",

//   };

export default Softwares;
