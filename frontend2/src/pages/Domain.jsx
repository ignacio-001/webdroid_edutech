import React from "react";
import Card from "../components/Card";
import NameCard from "../components/NameCard";
import "./Domains.css";

const Domain = () => {
  return (
    <>
      <div className="domain__hero">
        <div className="domain__hero-main">
          <div className="domain__hero-text">
            <h1>Python Projects</h1>
            <p>
              Python projects you can complete on your own and flaunt in your
              dev portfolio.
            </p>
          </div>
          <div className="domain__hero-img"></div>
        </div>
      </div>
      <div className="domain__top">
        <h1>Top Python Projects</h1>
        <div className="domain__top-card-container ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="domain__all-projects">
        <h1>All Projects</h1>
        <div
          className="domain__all-projects-grid grid"
          style={{ gridTemplateColumns: `1fr 1fr 1fr 1fr` }}
        >
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
        </div>
      </div>
    </>
  );
};

export default Domain;
