import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/projectComponent.css';
import ProjectDetail from './ProjectDetail';
import axios from "axios";
export class ProjectComponent extends Component {
    
    state = {
        projects: [],
    }
    
    async componentDidMount(){
        const res = await axios.get("/api/projects");
        console.log(res);
        const {projects}=res.data; 
        this.setState({projects});
    }
    
    render() {
        const {projects}=this.state;
        const projectDisplay=projects.map(item => {
        return(
            <div>
            <div className="projects-cont">
                <NavLink style={{ textDecoration: "none", color: "black" }} to={`/projects/${item._id}`}>
                    <div className="project-container" className={"status-"+item.status} onClick="projectDetail()">
                    <div className="name-container">
                    <h3 className="project-name">{item.title}</h3><div className="name-ch">{item.status}</div>
                    </div>
                    <div className="project-description">{item.description}</div>
                    </div>
                </NavLink>
            </div>
            </div>
                );
        
            });
            return projectDisplay;
    }

}

export default ProjectComponent
