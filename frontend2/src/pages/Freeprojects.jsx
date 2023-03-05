import React from "react";
import soft from "../images/software.jpg";
// import Card from 'react-bootstrap/Card';
// import Button from "bootstrap";
import Card from "../components/Card";

function Freeprojects() {
  return (
    <div className="flex">
      <Card
        title="Some Software Project"
        image="https://picsum.photos/200/300?random=1"
        catagory="Python"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
        price="0"
        link="/softwares"
      />
      <Card
        title="Another Software Project"
        image="https://picsum.photos/200/300?random=2"
        catagory="Java"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
        price="0"
        link="#"
      />
      <Card
        title="Yet Another Software Project"
        image="https://picsum.photos/200/300?random=3"
        catagory="IOT, Arduino"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
        price="0"
        link="#"
      />
    </div>
  );
}

export default Freeprojects;
