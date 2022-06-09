import React from 'react';
import BgFooter from '../BgFooter/BgFooter';
import Profile from '../Profile/Profile';
import './Home.css'

const Home = () => {
    return (
        <div id='#'>
            <div className="home-container">
                <h1 className='portfolio-heading'>Ahatasam Siam</h1>
                <Profile />
                <BgFooter />
            </div>
        </div>
    );
};

export default Home;