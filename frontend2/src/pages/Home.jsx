import React from "react";
import "./Home.css";
import soft from "../images/software.jpg";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import Carousel from "../components/Carousel";

export const HomeItems = [
  {
    title: "Some Software Project",
    image: "https://picsum.photos/200/300?random=1",
    catagory: "Python",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae.",
    price: "299",
    link: "/softwares",
  },
  {
    title: "Another Software Project",
    image: "https://picsum.photos/200/300?random=2",
    catagory: "Java",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae.",
    price: "499",
    link: "#",
  },
  {
    title: "Yet Another Software Project",
    image: "https://picsum.photos/200/300?random=3",
    catagory: "IOT, Arduino",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae.",
    price: "699",
    link: "#",
  },
];

const Home = () => {
  return (
    <>
      {/* <Carousel /> */}
      <div className="hero">
        <h1 className="heroText">
          <strong>The Education Website</strong>
        </h1>
      </div>
      <div className="project__showcase">
        <h2 className="h2">Software Projects</h2>

        <div className="row flex">
          {HomeItems.map((item, index) => {
            return (
              <Card
                className="card-item"
                key={index}
                title={item.title}
                image={item.image}
                catagory={item.catagory}
                description={item.description}
                price={item.price}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
