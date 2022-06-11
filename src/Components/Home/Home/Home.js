import React from 'react';
import { Link } from 'react-router-dom';
import BgFooter from '../BgFooter/BgFooter';
import Profile from '../Profile/Profile';
import './Home.css'

const Home = () => {
    return (
        <section id='#'>
            <div className="home-container">
                <div className="header-container">
                    <h1 className='portfolio-heading'>Ahatasam Siam</h1>
                </div>
                <Profile />
                <BgFooter />
            </div>
        </section>
    );
};

export default Home;