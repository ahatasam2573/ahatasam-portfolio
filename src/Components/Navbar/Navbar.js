import React from 'react';
import "./Navbar.css";
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { GrProjects } from 'react-icons/gr'
import { MdOutlineFeedback } from 'react-icons/md'

const Navbar = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome /></a>
            <a href="#about"><AiOutlineUser /></a>
            <a href="#services"><RiServiceLine /></a>
            <a href="#projects"><GrProjects /></a>
            <a href="#experience"><BiBook /></a>
            <a href="#testimonial"><MdOutlineFeedback /></a>
            <a href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    );
};


export default Navbar;