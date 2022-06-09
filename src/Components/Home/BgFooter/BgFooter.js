import React from 'react';
import './BgFooter.css'

const BgFooter = () => {
    return (
        <div>
            <div className="bgFooter-container">
                <div className="bgFooter-parent">
                    <img src={require('../../../assets/Home/shape-bg.png')}
                        alt="not a stable internet connection" />
                </div>
            </div>
        </div>
    );
};

export default BgFooter;