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
  <div className="asd">    
  <section class="intro">
    <h1 class="intro__title">
      We develop Projects
    </h1>
    <p class="intro__subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil sunt distinctio animi non explicabo voluptate nobis pariatur tempora dolore assumenda rem sit, quas id facilis officiis autem praesentium soluta.
    </p>
    <a href="#" class="bbutton">Explore More</a>
    <img class="intro__illustration" src="https://cdn4.buysellads.net/uu/1/127419/1670531697-AdobeTeams.jpg" alt="Landing page image" />
  </section>
  <div class="intro_spec">
  <div class="intro_info">
    <h3>93%</h3>
    <p>placed within 8
months of graduation</p>
  </div>
  <div class="intro_info">
    <h3>11 LPA</h3>
    <p>average dream job CTC</p>
  </div>
  <div class="intro_info">
    <h3>22 LPA</h3>
    <p>average super-dream job CTC</p>
  </div>
  <div class="intro_info">
    <h3>89%</h3>
    <p>Average Salary Hike</p>
  </div>
</div>
</div>
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