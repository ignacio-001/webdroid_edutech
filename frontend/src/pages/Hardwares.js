import React from 'react';
import hard from '../images/hardware.jpg';

function Hardwares() {
    return (
        <div >
            <img src={hard} alt="Sample_hardware_photo" 
            style={{
          width: "100%",
          height: "400px",
          marginTop: "0px",
        }} />
            <div style={{ display: "block", textAlign: "center",}}>
                <h1 style={{fontSize: "50px"}}>Hardware Projects</h1>
            <br /><br />
                <h3>The list for showing hardware domains for projects.</h3>
            </div>
            <div style={{padding: "10px 100px"}}> 
                <ul>
                    <li><a href="/">Project 1</a></li>
                    <li><a href="/">Project 2</a></li>
                    <li><a href="/">Project 3</a></li>
                </ul>
            </div>
        </div>
        
    );
}

// const hed = {
//     display: "block", 
//     textAlign: "center",

//   };

export default Hardwares;
