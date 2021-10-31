import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import hero from '../assets/hero.png';
import '../styles/Home.css';
import ProjectComponent from './ProjectComponent';
import ContactComponent from './ContactComponent';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <div className="main-text">
                        <h1>CODE CLUB</h1>
                        <div style={{ fontWeight: "700",fontSize: "20px"}}>
                        <Typewriter
                            options={{
                                strings: ["Learn | Work | Discover - Together!"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </div>
                            <a className="hero-btn" href="#contact">contact us</a>
                    </div>
                    <div className="main-img">
                        <div className="shape">
                        </div>
                        <img weight="600px" src={hero} alt="hero"/>
                    </div>
                </div>
                <>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#ff0080"/>
                        <stop offset="100%" stop-color="#7928ca" />
                    </linearGradient>
                </defs>
                    <path fill="url(#grad1)"  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg> */}
                    <div className="project-section">
                 
                    <h1 className="mb-2" style={{ textAlign: "center"}}>Our projects</h1>
                   
                        <ProjectComponent/>
                        <Link to="/projects" className="projects-view-link">view more</Link>
                    </div>
                </>
                <div className="contact-section" id="contact"> 
                        <ContactComponent/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;
