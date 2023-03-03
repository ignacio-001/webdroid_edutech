import React from "react";
import "./Home.css";
import soft from "../images/software.jpg";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      {/* <Carousel /> */}
      <div className="hero">
        <h1 className="heroText">
          <strong>The Education Website</strong>
        </h1>
        {/* <img className="heroImg" src={soft} alt="Sample_software_photo" />
        <Tabs /> */}
      </div>
      <div className="project__showcase">
        <h2 className="h2">Software Projects</h2>
        <div className="row flex">
          <Card
            title="Some Software Project"
            image="https://picsum.photos/200/300?random=1"
            catagory="Python"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
            price="299"
            link="/softwares"
          />
          <Card
            title="Another Software Project"
            image="https://picsum.photos/200/300?random=2"
            catagory="Java"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
            price="499"
            link="#"
          />
          <Card
            title="Yet Another Software Project"
            image="https://picsum.photos/200/300?random=3"
            catagory="IOT, Arduino"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
            price="699"
            link="#"
          />
        </div>
      </div>
    </>
  );
};

export default Home;