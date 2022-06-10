import React from 'react';
import { useNavigate } from 'react-router-dom';
import SingleProject from '../SingleProject/SingleProject';
import './Project.css'

const Project = ({ project }) => {
    const { id, name, heading, description, technology } = project;
    const navigate = useNavigate();
    const handleToSingleProject = event => {
        event.preventDefault();
        navigate(<SingleProject></SingleProject>)
    }
    return (
        <div class="card project-card">
            <div class="card-body card-details-project">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{heading}</h6>
                <a href="#" onClick={handleToSingleProject} class="btn-project btn">More Details</a>
            </div>
        </div>
    );
};

export default Project;