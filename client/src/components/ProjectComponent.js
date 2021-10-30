import React, { Component } from 'react';
import '../styles/projectComponent.css';
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
    renderProjects = () => {

    }
    render() {
        return (
            <div>
                <h1>Our projects</h1>
                {/* {this.renderProjects()} */}
            </div>
        )
    }

}

export default ProjectComponent


  
    