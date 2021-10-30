import React, { Component } from 'react';
import axios from 'axios';

export class ProjectDetail extends Component {
    state = {
            title: "",
            description: "",
            members: [],
            guide: "",
            status: "",
            requirements: ""
    }
    async componentDidMount() {
        const res = await axios.get(`/api/projects/${this.props.match.params.id}`);
        
        const { title, description, members, guide, status, requirements } = res.data.project;
        this.setState({ title, description, members, guide, status, requirements });
    }
    render() {
            const { title, description, members, guide, status, requirements } = this.state;
            return (
                <div>
                    <h4 className="card-title" style={{ fontWeight: "700" }}>{title} <span style={{ color: "green", fontWeight: "200"}}>{status}</span></h4>
                    <span><b>Project description: </b></span>
                    <p className="card-text">{description}</p>
                    <span><b>Memebers: </b></span>
                    {members.map((member) =>{
                        return <span className="card-text">{member}, </span>
                    })}
                    <br/>
                    <p className="card-text"><b>Guided by: </b>{guide}</p>

                </div>
            )
        
    }
}

export default ProjectDetail
