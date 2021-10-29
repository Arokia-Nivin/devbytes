import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projectComponent.css';
import ProjectDetail from './ProjectDetail';
export class ProjectComponent extends Component {

    state = {
        projects: [{
            name:"project 1",
            description:"Labore cillum dolore sunt aliquip aliqua labore elit consectetur excepteur minim velit aute. Nostrud commodo voluptate consectetur excepteur culpa cupidatat elit consequat ipsum irure aliquip ex amet adipisicing. Velit cillum aliqua sint labore labore qui enim consequat mollit. Ipsum esse do occaecat incididuntreprehenderit et. Aliquip est magna fugiat irure irure excepteur sunt incididunt fugiat reprehenderit. Dolor aliquip laboris nisi id voluptate occaecat anim aliquip eiusmod eu excepteur. Pariatur exercitation consectetur pariatur mollit duis magna id aute esse enim.",
            members: ["member1","member2","member3","member4"],
            guide: "Guideee",
            status: "Active"
        },
        {
            name:"project 2",
            description:"Labore cillum dolore sunt aliquip aliqua labore elit consectetur excepteur minim velit aute. Nostrud commodo voluptate consectetur excepteur culpa cupidatat elit consequat ipsum irure aliquip ex amet adipisicing. Velit cillum aliqua sint labore labore qui enim consequat mollit. Ipsum esse do occaecat incididuntreprehenderit et. Aliquip est magna fugiat irure irure excepteur sunt incididunt fugiat reprehenderit. Dolor aliquip laboris nisi id voluptate occaecat anim aliquip eiusmod eu excepteur. Pariatur exercitation consectetur pariatur mollit duis magna id aute esse enim.",
            members: ["member1","member2","member3","member4"],
            guide: "Guideee",
            status: "Active"
        },
        {
            name:"project 3",
            description:"Labore cillum dolore sunt aliquip aliqua labore elit consectetur excepteur minim velit aute. Nostrud commodo voluptate consectetur excepteur culpa cupidatat elit consequat ipsum irure aliquip ex amet adipisicing. Velit cillum aliqua sint labore labore qui enim consequat mollit. Ipsum esse do occaecat incididuntreprehenderit et. Aliquip est magna fugiat irure irure excepteur sunt incididunt fugiat reprehenderit. Dolor aliquip laboris nisi id voluptate occaecat anim aliquip eiusmod eu excepteur. Pariatur exercitation consectetur pariatur mollit duis magna id aute esse enim.",
            members: ["member1","member2","member3","member4"],
            guide: "Guideee",
            status: "Completed"
        },
        {
            name:"project 4",
            description:"Labore cillum dolore sunt aliquip aliqua labore elit consectetur excepteur minim velit aute. Nostrud commodo voluptate consectetur excepteur culpa cupidatat elit consequat ipsum irure aliquip ex amet adipisicing. Velit cillum aliqua sint labore labore qui enim consequat mollit. Ipsum esse do occaecat incididuntreprehenderit et. Aliquip est magna fugiat irure irure excepteur sunt incididunt fugiat reprehenderit. Dolor aliquip laboris nisi id voluptate occaecat anim aliquip eiusmod eu excepteur. Pariatur exercitation consectetur pariatur mollit duis magna id aute esse enim.",
            members: ["member1","member2","member3","member4"],
            guide: "Guideee",
            status: "Completed"
        }
    ],
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
                <h3 className="project-name">{items.name}</h3><div className="name-ch">{items.status}</div>
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
