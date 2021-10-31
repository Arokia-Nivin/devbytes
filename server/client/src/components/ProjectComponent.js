import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../styles/projectComponent.css';
import axios from "axios";
import ProjectCard from './ProjectCard';


class ProjectComponent extends Component {

    state = {
        projects: [],
        selected: 'all'
    }


    async componentDidMount() {
        try{
            if(this.props.match.path === "/" && this.props.match.path !== "/home") {
                const res = await axios.get("/api/projects?limit=2");
                const [a,b] = res.data.projects;
                this.setState({ projects: [a,b] });
                
            }else {
                const res = await axios.get("/api/projects");
                const { projects } = res.data;
                this.setState({ projects });
            } 
            
        }catch(err) {
            this.props.history.push('/');
        }
    }

    renderProjects = () => {
        const { projects } = this.state;
        const Projects = projects.map((project, ind) => {
            return <ProjectCard key={ind} {...project} />
        })
        return Projects;
    }

    handleChange = async (evt) => {
        this.setState({selected: evt.target.value});
        try {
            const res = await axios.get(`/api/projects/status/${evt.target.value}`);
            const { projects } = res.data;
            this.setState({ projects });
        }catch(err) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="all-projects-container container-md">
                {(this.props.match.path !== "/" && this.props.match.path !== "/home") &&
                (
                    <>
                    <h1 className="mb-2" style={{ textAlign: "center", background: "linear-gradient(310deg,#7928ca,#ff0080)",backgroundClip: "text",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent"}}>Our projects</h1>
                    <select className="form-select mr-sm-2" onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>
                    </>
                ) }
                
                    {this.renderProjects()}
                </div>
            </React.Fragment>
        )
    }

}

export default withRouter(ProjectComponent);