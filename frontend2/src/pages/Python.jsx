import React from "react";
import soft from "../images/python.jpeg";
import Card from "../components/Card";
import "./domain.css";

function Python() {
  const pythonData = [
    {
      title: "Some Python Projects",
      image: "https://picsum.photos/200/300?random=1",
      category: "Python",
      description: "Want to explore some python projects.... Here we have....",
      price: "299",
    },
    {
      title: "Some Web-Based Projects",
      image: "https://picsum.photos/200/300?random=2",
      category: "Web-Based",
      description:
        "Want to explore some web-based projects.... Here we have....",
    },
    {
      title: "Some Android Projects",
      image: "https://picsum.photos/200/300?random=3",
      category: "Android",
      description: "Want to explore some android projects.... Here we have....",
    },
  ];

  return (
    <div>
      <img
        src={soft}
        alt="Sample_software_photo"
        href="/login"
        style={{
          width: "100%",
          height: "400px",
          marginTop: "85px",
        }}
      />
      <div className="domain__container">
        <h1>Python Projects</h1>
        <div className="outer__cards">
          <h3>
            Top Python Projects
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil
            sunt distinctio animi non explicabo voluptate nobis pariatur tempora
            dolore assumenda rem sit, quas id facilis officiis autem praesentium
            soluta.
          </h3>

          {pythonData.map((item, index) => {
            console.log(item.index);
            return (
              <Card
                prodkey={index}
                title={item.title}
                image={item.image}
                category={item.category}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
        <div className="outer__card">
          <h3>The list of python projects: </h3>
          <ul>
            <li>
              <a href="/">Project 1 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 2 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 3 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 1 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 2 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 3 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 1 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 2 - Project Name</a>
            </li>
            <li>
              <a href="/">Project 3 - Project Name</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Python;
