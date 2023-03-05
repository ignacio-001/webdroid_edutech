import React from 'react';
import soft from '../images/software.jpg';
import Card from "../components/Card";
import "./domain.css";

function Webbased() {
    return (
        <div >
            <img src={soft} alt="Sample_software_photo" href="/login"
            style={{ 
                width: "100%", 
                height: "400px", 
                marginTop: "0px",
                }} />
            <div className="domain__container">
                <h1>Web-Based Projects</h1>
                <div className="outer__cards">
                    <h3>
                        Top Web-Based Projects<br/><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                    nihil sunt distinctio animi non explicabo voluptate nobis
                    pariatur tempora dolore assumenda rem sit, quas id facilis
                    officiis autem praesentium soluta.
                    </h3>
                    <Card 
                    title="Some Python Projects"
                    image="https://picsum.photos/200/300?random=1"
                    catagory="Python"
                    description="Want to explore some python projects.... Here we have...."
                    link="/python"
                    price="299"
                    />
                    <Card
                    title="Some Web-Based Projects"
                    image="https://picsum.photos/200/300?random=2"
                    catagory="Web-Based"
                    description="Want to explore some web-based projects.... Here we have...."
                    link="/webbased"
                    />
                    <Card
                    title="Some Android Projects"
                    image="https://picsum.photos/200/300?random=3"
                    catagory="Android"
                    description="Want to explore some android projects.... Here we have...."
                    link="/android"
                    />
                </div>
                <div className='outer__card'>
                    <h3>The list of web-based projects: </h3>
                    <ul>
                        <li><a href="/">Project 1 - Project Name</a></li>
                        <li><a href="/">Project 2 - Project Name</a></li>
                        <li><a href="/">Project 3 - Project Name</a></li>
                        <li><a href="/">Project 1 - Project Name</a></li>
                        <li><a href="/">Project 2 - Project Name</a></li>
                        <li><a href="/">Project 3 - Project Name</a></li>
                        <li><a href="/">Project 1 - Project Name</a></li>
                        <li><a href="/">Project 2 - Project Name</a></li>
                        <li><a href="/">Project 3 - Project Name</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Webbased;
