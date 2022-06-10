import React, { useEffect, useState } from 'react';
import './Projects.css';
import Falgun from '../../img/falgun.png';
import Paint from '../../img/paint.png';
import Photography from '../../img/photography.png'
import Project from '../Project/Project'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects-data.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <section id='projects container'>
            <h1 className='project-headings'>Projects</h1>
            <div className="row">
                <div className="projects-container">
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;