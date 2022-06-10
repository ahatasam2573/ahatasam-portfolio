import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="" className='footer-logo'>Ahatasam Siam</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-social colz">
                <div className="footer-icon colz-icon">
                    <span style={{ color: 'var(--yellow)', padding: '20px', fontSize: '25px' }}>Social Links:</span>
                    <a target='_blank' href="https://www.linkedin.com/in/md-ahatasamul-haque-siam-8a217122a/">
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a target='_blank' href="https://github.com/ahatasam2573">
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a target='_blank' href="https://www.facebook.com/ahatasam.siam.5/">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                </div>
            </div>
            <div className='details'>
                <h3 style={{ fontSize: '16px' }}><span style={{ fontSize: '25px', padding: '10px' }}>Phone Number:</span> +8801750013906</h3>
                <h3 style={{ fontSize: '16px' }}><span style={{ fontSize: '25px', padding: '10px' }}>Email:</span> ahatasamul.developer@gmail.com</h3>
            </div>
        </footer>
    );
};

export default Footer;