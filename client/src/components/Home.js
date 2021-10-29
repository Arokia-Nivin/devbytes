import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-cont">
                <Link to="/events" className="divs">Events</Link>
                <Link to="/projects" className="divs">Projects</Link>
            </div>
        )
    }
}
export default Home;
