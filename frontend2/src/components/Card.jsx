import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  return (
    <div className="product-card">
      <Link to={`/project/${props.prodkey}`}>
        <div className="badge">New</div>
        <div className="product-tumb">
          <img src={props.image} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{props.catagory}</span>
          <h4>
            <a href={props.link}>{props.title}</a>
          </h4>
          <p>{props.description}</p>
          <div className="product-bottom-details">
            <div className="product-price">
              {props.price ? <small>₹999</small> : null}
              {props.price ? "₹" : null}
              {props.price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
