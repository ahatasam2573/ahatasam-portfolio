import React from 'react';
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="container-fluid n-wrapper" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name">Ahatasam Siam</div>
                {/* <span>toggle</span> */}
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="/" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" spy={true} smooth={true}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" spy={true} smooth={true}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" spy={true} smooth={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/testimonial" spy={true} smooth={true}>
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="button n-button">Contact ME</button>
            </div>
        </div>
    );
};


export default Navbar;