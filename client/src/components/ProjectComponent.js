import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projectComponent.css';
import ProjectDetail from './ProjectDetail';
import axios from "axios";
export class ProjectComponent extends Component {
    async componentDidMount(){
        const res = await axios.get("/api/projects");
        console.log(res);
        const {projects}=res.data; 
        this.setState({projects});
    }
    state = {
        projects: [],
    }
    render() {
        const {projects}=this.state;
        const projectDisplay=projects.map(items => {
        return(
            <div>
            <div className="projects-cont">
                <Link style={{ textDecoration: "none", color: "black" }} to="/projects/projectdetail">
                <div className="project-container" className={"status-"+items.status} onClick="projectDetail()">
                <div className="name-container">
                <h3 className="project-name">{items.title}</h3><div className="name-ch">{items.status}</div>
                </div>
                <div className="project-description">{items.description}</div>
                </div>
                </Link>
            </div>
            </div>
                );
        
            });
            return projectDisplay;
    }

}

export default ProjectComponent
