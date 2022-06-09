import React from "react";

import './FloatingDiv.css'


const FloatingDiv = ({ img, text1, text2, Thumbup }) => {
    return (
        // darkMode
        <div className="floatingDiv">
            <img src={img} alt="" />
            <span>
                {text1}
                <br />
                {text2}
            </span>
        </div>
    );
};

export default FloatingDiv;