import React, { Component } from 'react'

export class ProjectDetail extends Component {
    state = {
            name:"project 1",
            description:"Labore cillum dolore sunt aliquip aliqua labore elit consectetur excepteur minim velit aute. Nostrud commodo voluptate consectetur excepteur culpa cupidatat elit consequat ipsum irure aliquip ex amet adipisicing. Velit cillum aliqua sint labore labore qui enim consequat mollit. Ipsum esse do occaecat incididuntreprehenderit et. Aliquip est magna fugiat irure irure excepteur sunt incididunt fugiat reprehenderit. Dolor aliquip laboris nisi id voluptate occaecat anim aliquip eiusmod eu excepteur. Pariatur exercitation consectetur pariatur mollit duis magna id aute esse enim.",
            members: ["member1","member2","member3","member4"],
            guide: "Guideee",
            status: "active"
        }
    render() {
        const {projects}=this.state;
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    <div>{this.state.description}</div>
                    <h2>Members</h2>
                    <ul>{this.state.members}.map(member)</ul>
    
                </div>
            )
        
    }
}

export default ProjectDetail
