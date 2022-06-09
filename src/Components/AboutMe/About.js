import React from 'react';
import './About.css';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Me from '../../img/about-me-pic.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';

const About = () => {
    return (
        <div>
            <div className="about-container container">
                <div className="about-details">
                    <div className="card card-details">
                        <div class="card-body">
                            <p class="card-text">Full stack web developer with experience with MERN stacks and redux, as well as a knack for building applications that are as efficient as possible. Strong professional with a BSC eager to contribute to an organization.</p>
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
                    {/* <img src={Vector1} alt="pictures" />
                    <img src={Vector2} alt="pictures" />
                    <img className='me-pic' src={Me} alt="pictures" /> */}
                </div>
            </div>
        </div>
    );
};

export default About;