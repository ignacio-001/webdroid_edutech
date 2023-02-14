import React from "react";
import Card from "./Card";
import "./tabs.css";

const Tabs = () => {
  const [toggleTab, setToggleTab] = React.useState(1);
  const setTab = (tab) => {
    setToggleTab(tab);
  };

  return (
    <>
      <div className="tab-wrapper">
        <div className="tab__wrap flex">
          <h2>Trending Now</h2>
          <div className="tabs flex">
            <div
              className={`tab__label ${toggleTab === 1 ? "active" : ""}`}
              onClick={() => setTab(1)}
            >
              Software
            </div>
            <div
              className={`tab__label ${toggleTab === 2 ? "active" : ""}`}
              onClick={() => setTab(2)}
            >
              Hardware
            </div>
            <div
              className={`tab__label ${toggleTab === 3 ? "active" : ""}`}
              onClick={() => setTab(3)}
            >
              IOT
            </div>
          </div>
        </div>
        <div className="content flex">
          <div
            className={`tab__content ${
              toggleTab === 1 ? "tab__content__active" : ""
            }`}
          >
            <Card
              title="Some Software Project"
              image="https://picsum.photos/200/300?random=01"
              link="/softwares"
            />
            <Card
              title="Another Software Project"
              image="https://picsum.photos/200/300?random=02"
              link="/softwares"
            />
            <Card
              title="Yet Another Software Project"
              image="https://picsum.photos/200/300?random=03"
              link="/softwares"
            />
          </div>
          <div
            className={`tab__content ${
              toggleTab === 2 ? "tab__content__active" : ""
            }`}
          >
            <Card
              title="Some Hardware Project"
              image="https://picsum.photos/200/300?random=11"
              link="/hardwares"
            />
            <Card
              title="Another Hardware Project"
              image="https://picsum.photos/200/300?random=12"
              link="/hardwares"
            />
            <Card
              title="Yet Another Hardware Project"
              image="https://picsum.photos/200/300?random=13"
              link="/hardwares"
            />
          </div>
          <div
            className={`tab__content ${
              toggleTab === 3 ? "tab__content__active" : ""
            }`}
          >
            <Card
              title="Some IOT Project"
              image="https://picsum.photos/200/300?random=21"
              link="/iot"
            />
            <Card
              title="Another IOT Project"
              image="https://picsum.photos/200/300?random=22"
              link="/iot"
            />
            <Card
              title="Yet Another IOT Project"
              image="https://picsum.photos/200/300?random=23"
              link="/iot"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
