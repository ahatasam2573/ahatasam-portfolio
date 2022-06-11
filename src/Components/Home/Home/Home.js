import React from 'react';
import BgFooter from '../BgFooter/BgFooter';
import Profile from '../Profile/Profile';
import './Home.css'

const Home = () => {
    return (
        <section id='#'>
            <div className="home-container">
                <div className="header-container">
                    <h1 className='portfolio-heading'>Ahatasam Siam</h1>
                    <div className="heading-details mt-2 mr-3">
                        <h3 className='project-title' style={{ color: 'rgb(219, 81, 17)', fontSize: '28px', fontFamily: ' Langar, cursive' }}>Projects</h3>
                    </div>
                </div>
                <Profile />
                <BgFooter />
            </div>
        </section>
    );
};

export default Home;