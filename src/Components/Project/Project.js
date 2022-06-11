import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css'

const Project = ({ project }) => {
    const { id, img, name, heading, description, technology, website, github } = project;
    const navigate = useNavigate();
    return (
        <div className="card project-card">
            <img style={{ width: '100%', height: '15vw', objectFit: 'cover' }} src={img} className="card-img-top" alt="..." />
            <div className="card-body card-details-project">
                <h5 className="card-title pt-5">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{heading}</h6>
                <p><span style={{ color: 'purple', textAlign: 'center', fontSize: '20px' }}>Feature</span> <br />{description}</p>
                <p><span style={{ color: 'purple', textAlign: 'center', fontSize: '18px', paddingRight: '10px' }}>Technology:</span>{technology}</p>
            </div>
            <div className="profile-options project-btn-card">
                <a href={website} target='_blank'>
                    <button className='btn primary-btn'>Website</button>
                </a>
                <a href={github} target='_blank'>
                    <button className='btn highlighted-btn'>Github</button>
                </a>
            </div>
        </div>
    );
};

export default Project;