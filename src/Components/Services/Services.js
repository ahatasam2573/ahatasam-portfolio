import React from 'react';
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../../Card/Card';


const Services = () => {
    return (
        <div className='services container'>
            <div className="awesome">
                <span className='service-title'>My Awesome</span>
                <span>Services</span>
                <span>
                    Look at my services and if you like then
                    <br />
                    Knock me
                </span>
                <button className="button s-button">Download Resume</button>
                <div className="blur s-blur1" style={{ background: "#ABBF1FF94" }}></div>
            </div>
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;