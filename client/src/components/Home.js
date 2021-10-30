import React, { Component } from 'react';
import Typewriter from "typewriter-effect";
import hero from '../assets/hero.png';
import '../styles/Home.css';
import ProjectComponent from './ProjectComponent';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <div className="main-text">
                        <h1>CODE CLUB</h1>
                        <Typewriter
                            options={{
                                
                                strings: ["Learn | Work | Discover - Together!"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                            <a className="hero-btn" href="#contact">contact us</a>
                    </div>
                    <div className="main-img">
                        <div className="shape">
                        </div>
                        <img weight="600px" src={hero} alt="hero"/>
                    </div>
                </div>
                <div className="project-section">
                    <ProjectComponent/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;
