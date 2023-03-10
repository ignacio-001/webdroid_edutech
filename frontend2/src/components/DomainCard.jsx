import React from "react";
import "./domainCard.css";
// import { FaPython } from "react-icons/fa";

const DomainCard = (props) => {
  return (
    <>
      <div className="domain__card">
        <div className="domain__card__content">
          <p>
            {props.domain} <strong>Projects</strong>
          </p>
          <img alt="ytr" src={props.image} />
        </div>
      </div>
    </>
  );
};

export default DomainCard;