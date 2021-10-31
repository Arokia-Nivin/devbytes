import React, { Component } from 'react';
import '../styles/projectComponent.css';




class ProjectCard extends Component {


    render() {
        
        const { title, description, status, members, guide, domain='coding' } = this.props;
        const Members = members.map((member, ind) => {
            return <span style={{color: "#506D84"}} key={ind}>{member},  </span>
        })
        return (
            <div className="w-20 project-container" style={{ borderRadius: "20px"}}>
                <div className="project-heading">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img alt="domain" src={this.props[domain]}/>
                            <h2>{title}</h2>
                    </div>
                    <span className="project-status">{status}</span>
                </div>
                <div className="project-body">
                    {description}
                </div>
                <br/>
                <div>
                    <b>Members:  </b>
                    {Members}
                </div>
                <div>
                    <b>Guided by: </b>{guide}
                </div>
            </div>
        )
    }
}
ProjectCard.defaultProps = {
    webdevelopment: 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/54/000000/external-web-coding-coding-kiranshastry-lineal-color-kiranshastry.png',
    appdevelopment: 'https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-app-development-online-business-photo3ideastudio-lineal-color-photo3ideastudio.png',
    machinelearning: 'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-machine-learning-data-processing-inipagistudio-mixed-inipagistudio.png',
    iot: 'https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-internet-of-things-internet-of-things-photo3ideastudio-lineal-color-photo3ideastudio.png',
    coding: 'https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-coding-computer-technology-itim2101-lineal-color-itim2101.png'
}

export default ProjectCard;