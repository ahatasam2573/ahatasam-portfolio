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
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <p class="card-text">Full stack web developer with experience with MERN stacks and redux, as well as a knack for building applications that are as efficient as possible. Strong professional with a BSC eager to contribute to an organization.</p>
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