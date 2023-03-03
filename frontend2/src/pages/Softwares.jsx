import React from "react";
import soft from "../images/software.jpg";
import DomainCard from "../components/DomainCard";
import "./softwares.css";

const Domains = [
  {
    title: "Python ",
    image: "src/assets/python.webp",
    link: "/python",
  },
  {
    title: "MatLab ",
    image: "src/assets/java.webp",
    link: "/matlab",
  },
  {
    title: "Android ",
    image: "src/assets/android.webp",
    link: "/android",
  },
  {
    title: "Web",
    image: "src/assets/web-development.webp",
    link: "/webbased",
  },
  {
    title: "Blockchain",
    image: "src/assets/blockchain.webp",
    link: "/blockchain",
  },
  {
    title: "Cloud",
    image: "src/assets/cloud.webp",
    link: "/cloud",
  },
  {
    title: "IOT",
    image: "src/assets/machine-learning.webp",
    link: "/iot",
  },
];

function Softwares() {
  return (
    <div>

      <div className="domain__row">
        {Domains.map((item, index) => {
          return (
            <DomainCard
              key={index}
              domain={item.title}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Softwares;