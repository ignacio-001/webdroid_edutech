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
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={soft} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    </div>
  );
}

export default Freeprojects;
