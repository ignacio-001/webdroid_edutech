import React from "react";
import soft from "../images/software.jpg";
// import Card from 'react-bootstrap/Card';
import Button from "bootstrap";

function Freeprojects() {
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

      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img src={soft} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

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
