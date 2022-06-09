import React from 'react';
import './Projects.css';
import Falgun from '../../img/falgun.png';
import Paint from '../../img/paint.png';
import Photography from '../../img/photography.png'

const Projects = () => {
    return (
        <div id='projects' className='container'>
            <h1 className='project-headings'>Projects</h1>
            <div className="project-list">

                <div className="card">
                    <img src={Falgun} className="card-img-top" alt="picture" />
                    <div className="card-body">
                        <h5 className="card-title">Falgun Fashion House</h5>
                        <p className="card-text">
                            ❖ Login, registration, and email confirmation Google and Github popup login, as well as password
                            reset, are supported. <br />
                            ❖ In the Inventory Management section, users can edit, delete, and add items, as well as delete their
                            selected item. <br />
                            ❖ Users can also leave feedback.
                        </p>
                        {/* <a href="https://falgun-fashion-house.web.app/" className="btn btn-primary">See Website</a> */}
                        <div id='new-style' className="profile-options">
                            <button className='btn primary-btn'>
                                <a target='_blank' href="https://falgun-fashion-house.web.app/"> See Website</a>
                            </button>
                            <a target='_blank' target='_blank' href="https://github.com/ahatasam2573/falgun-fashion-house">
                                <button className='btn highlighted-btn'>See Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Paint} className="card-img-top" alt="picture" />
                    <div className="card-body">
                        <h5 className="card-title">Paint Brush</h5>
                        <p className="card-text">
                            ❖ Implementing the various types of Parts, Our Business Summary,Customer Review,Dashboard,
                            Order Summary, All Users, and so on.
                            <br />
                            ❖ Google popup login system.
                            <br />
                            ❖ An admin can make other users admin and control them, but a non-user cannot
                        </p>
                        {/* <a href="https://paint-brush-ccca7.web.app/" className="btn btn-primary">See Website</a> */}
                        <div id='new-style' className="profile-options">
                            <button className='btn primary-btn'>
                                <a target='_blank' href="https://paint-brush-ccca7.web.app/"> See Website</a>
                            </button>
                            <a target='_blank' href="https://github.com/ahatasam2573/paintBrush-client">
                                <button className='btn highlighted-btn'>See Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Photography} className="card-img-top" alt="picture" />
                    <div className="card-body">
                        <h5 className="card-title">Ahatasam Wild Photography</h5>
                        <p className="card-text">
                            ❖ Various types of wild photo display with a lovely button.
                            <br />
                            ❖ Simple and lovely Design. <br />
                            ❖ Google and Github popups, as well as an email login and registration system, have been
                            implemented.
                        </p>
                        {/* <a href="https://ahatasam-wild-photograph-7e28d.web.app/" className="btn btn-primary">See Website</a> */}
                        <div id='new-style' className="profile-options">
                            <button className='btn primary-btn'>
                                <a target='_blank' href="https://ahatasam-wild-photograph-7e28d.web.app/"> See Website</a>
                            </button>
                            <a target='_blank' href="https://github.com/ahatasam2573/ahatasam-wild-photography">
                                <button className='btn highlighted-btn'>See Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;