import React from "react";
import "./domainCard.css";
import { FaPython } from "react-icons/fa";

const DomainCard = () => {
  return (
    <>
      <div className="domain__card">
        <div className="domain__card__content">Python Projects</div>
        <FaPython className="domain__card__image" size={250} />
      </div>
    </>
  );
};

export default DomainCard;
