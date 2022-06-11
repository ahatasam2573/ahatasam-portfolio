import React from 'react';
import "./Navbar.css";
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { GrProjects } from 'react-icons/gr'
import { MdOutlineFeedback } from 'react-icons/md'
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <Link to="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} smooth><AiOutlineHome /></Link>
            <Link to="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} smooth><AiOutlineUser /></Link>
            <Link to="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} smooth><RiServiceLine /></Link>
            <Link to="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''} smooth><GrProjects /></Link>
            <Link to="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} smooth><BiBook /></Link>
            <Link to="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''} smooth><MdOutlineFeedback /></Link>
            <Link to="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} smooth><BiMessageSquareDetail /></Link>
        </nav>
    );
};

export default Navbar;