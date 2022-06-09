import React from 'react';
import BgFooter from '../BgFooter/BgFooter';
import Profile from '../Profile/Profile';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <Profile />
                <BgFooter />
            </div>
        </div>
    );
};

export default Home;