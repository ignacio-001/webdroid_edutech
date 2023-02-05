import React from "react";
import "./ProjectPage.css";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const ProjectPage = ({ embedId }) => {
    return(
        <>
        <br/><h1 style={{textAlign: "center"}}> PROJECT TITLE
                </h1><br/><br/>
        <div className="as">
        <div className="video-responsive">
            <iframe 
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded youtube"
           
            />
            </div>
            <div className="ad">
                <br/><br/><br/><br/>
                <p>..... Some introduction about project .....</p>
                <Button variant="outline-success" href="/login">Download/Purchase</Button>
            </div>
        </div>
        
            
        </>
    );
};

ProjectPage.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default ProjectPage;