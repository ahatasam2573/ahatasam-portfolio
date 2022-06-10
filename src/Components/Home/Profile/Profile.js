import Reac from 'react';
import { useNavigate } from 'react-router-dom';
import Typical from 'react-typical';
import './Profile.css'

const Profile = () => {
    let navigate = useNavigate();
    const handleToContact = event => {
        event.preventDefault();
    }
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
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
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            Hello, I'M <span className='highlighted-text'>Ahatasam</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>

                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Developer❤️‍🔥",
                                        3000,
                                        "Frontend Developer💻",
                                        3000,
                                        "React Developer🥵",
                                        3000,
                                        "MERN Stack Developer😎",
                                        3000,
                                        "Cross PlatFrom Developer🌏",
                                        3000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Ability to create applications with both front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <a className='btn primary-btn' style={{ textDecoration: 'none', listStyle: 'none', color: 'white' }} href="http://localhost:3000/#contact">Hire Me</a>
                        <a href="Ahatasamul_Frontend_Developer_resume .pdf" download="Ahatasam Ahatasamul_Frontend_Developer_resume .pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;