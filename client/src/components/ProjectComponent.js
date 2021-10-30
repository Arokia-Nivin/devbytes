import React, { Component } from 'react';
import '../styles/projectComponent.css';
<<<<<<< HEAD
=======

>>>>>>> 5297d03bc6a7e6690da24bc4c779b9c6291a8342
import axios from "axios";
export class ProjectComponent extends Component {
    
    state = {
        projects: [],
    }
    
    async componentDidMount(){
        const res = await axios.get("/api/projects");
        console.log(res);
        const {projects}=res.data; 
        console.log(projects);
        this.setState({projects});
    }

   
    
    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: "center", marginTop: "60px", marginBottom: "30px"}}>Our projects</h1>
                <div className="project-section-container">
                    {/* {this.renderProjects()} */}
                </div>
            </React.Fragment>
        )

    }

}

export default ProjectComponent
