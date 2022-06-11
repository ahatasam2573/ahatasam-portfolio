import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css'

const Project = ({ project }) => {
    const { id, img, name, heading, description, technology, website, github } = project;
    const navigate = useNavigate();
    return (
        <div class="card project-card">
            <img style={{ width: '100%', height: '15vw', objectFit: 'cover' }} src={img} class="card-img-top" alt="..." />
            <div class="card-body card-details-project">
                <h5 class="card-title pt-5">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{heading}</h6>
                <p><span style={{ color: 'purple', textAlign: 'center', fontSize: '20px' }}>Feature</span> <br />{description}</p>
                <p><span style={{ color: 'purple', textAlign: 'center', fontSize: '18px', paddingRight: '10px' }}>Technology:</span>{technology}</p>
            </div>
            <div className="profile-options project-btn-card">
                <a className='btn primary-btn' style={{ textDecoration: 'none', listStyle: 'none', color: 'white' }} href={website} target='_blank'>Website</a>
                <a href={github} target='_blank'>
                    <button className='btn highlighted-btn'>Github</button>
                </a>
            </div>
        </div>
    );
};

export default Project;