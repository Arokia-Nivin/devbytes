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
                    <div className="project-section">
                 
                    <h1 className="mb-2" style={{ textAlign: "center"}}>Our projects</h1>
                   
                        <ProjectComponent/>
                        <Link to="/projects" className="more-projects view-more-link">view more</Link>
                    </div>
                </>
                <div className="contact-section" id="contact"> 
                        <ContactComponent/>
                        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Link to="/aboutus" className="abt-us view-more-link">more about us</Link></div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;
