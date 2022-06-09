import React from 'react';
import './About.css';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Me from '../../img/about-me-pic.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const About = () => {
    return (
        <div id='about'>
            <h1 className='headings'>About Me</h1>
            <div className="about-container container">
                <div className="about-details">
                    <div className="card card-details">
                        <div className="card-body">
                            <p className="card-text">Full stack web developer with experience with MERN stacks and redux, as well as a knack for building applications that are as efficient as possible. Strong professional with a BSC eager to contribute to an organization.</p>
                            <p className='card-heading'>Among the highlights are the following:</p>
                            <ul className='list'>
                                <li>🟠 Web development from the ground up</li>
                                <li>🟠 Designing an interactive frontend website</li>
                                <li>🟠 React and Typescript</li>
                                <li>🟠 Redux for state management</li>
                                <li>🟠 Building a REST API</li>
                                <li>🟠 Managing a database</li>
                            </ul>
                            <div id='new-style' className="profile-options">
                                <button className='btn primary-btn'>
                                    Hire Me
                                </button>
                                <a href="Ahatasamul_Frontend_Developer_resume .pdf" download="Ahatasam Ahatasamul_Frontend_Developer_resume .pdf">
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-pictures">
                    <img src={Vector1} alt="pictures" />
                    <img src={Vector2} alt="pictures" />
                    <img className='me-pic' src={Me} alt="pictures" />
                    <img src={Glassesimoji} alt="" />
                    <div className='floating-div' style={{ top: '-6%', left: '75%' }}>
                        <FloatingDiv img={Crown} text1='Web' text2='Developer' />
                    </div>
                    <div className='floating-div' style={{ top: '25rem', left: '0rem' }}>
                        <FloatingDiv img={Thumbup} text1='Done' text2='25+ Projects' />
                    </div>
                    <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                    <div
                        className="blur"
                        style={{
                            background: "#C1F5FF",
                            top: "17rem",
                            width: "21rem",
                            height: "11rem",
                            left: "-9rem",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default About;