import React from 'react';
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../../Card/Card';


const Services = () => {
    return (
        <div id='services' className='services container'>
            <div className="awesome">
                <span className='service-title'>My Awesome</span>
                <span>Services</span>
                <span>
                    Look at my services and if you like then
                    <br />
                    Knock me
                </span>
                <a href="Ahatasamul_Frontend_Developer_resume .pdf" download=" Ahatasamul_Frontend_Developer_resume .pdf">
                    <button className="button s-button">Download Resume</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABBF1FF94" }}></div>
            </div>
            <div className="cards">
                <div style={{ top: '-7rem', left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Convert To Website"}
                        detail={"From Figma, Sketch, Photo shop,Adobe xd "}
                    />
                </div>
                <div style={{ top: '20rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html5,CSS3,Javascript,React,Node,MongoDB'}
                    />
                </div>
                <div style={{ top: '19rem', left: '22rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={'Also have some good sense about designing'}
                    />
                </div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    );
};

export default Services;