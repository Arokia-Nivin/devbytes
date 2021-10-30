import React, { Component } from 'react';
import '../styles/projectComponent.css';
import axios from "axios";
import ReactCardFlip from 'react-card-flip';
export class ProjectComponent extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: [],
          projects: [],
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(idx) {  
        console.log(idx);
        const isFlipped=[...this.state.isFlipped];
        isFlipped[idx]=!isFlipped[idx];
        this.setState({ isFlipped });
      }

    async componentDidMount(){
        const res = await axios.get("/api/projects");
        console.log(res);
        const {projects}=res.data;
        const isFlipped= projects.map( (e)=> { return false});
        this.setState({projects,isFlipped});
    }
    renderProjects = () => {
        const {projects}=this.state;
        const projectDisplay=<div className="row mb-5 mb-md-0">{projects.map((item,idx)=> {
        return(
            <div className="col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0 mt-5">
                    <div className="card project-card shadow d-flex flex-column text-dark">
                    <ReactCardFlip isFlipped={this.state.isFlipped[idx]} flipDirection="horizontal">
                    <div>
                    <div className={`card-front ${this.state.isFlipped[idx]?'':'scroll-auto'}`}>
                        <div className="card-body">
                            <div className="name-container">
                            <h3 className="card-title">{item.title}</h3>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" onClick={()=>this.handleClick(idx)} className="arrow-btn mt-2 bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                            <p className="card-text">{item.description}</p>
                        </div>

                    </div>
                    </div>
                    <div>
                    <div class="card-back">
                        <div className="card-body d-flex flex-column text-center">
                            <h5 className="card-title">Members:</h5>
                            {item.members.map((member) =>{return <div className="card-text">{member}, </div>})}
                            <h5 className="card-title">Guided by:</h5><div>{item.guide}</div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" onClick={()=>this.handleClick(idx)} className="back-arrow mt-5 text-center bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    </div>
                            
                        </div>
                    </div>
                    

                    </div>
      </ReactCardFlip>


                    </div>
            </div>
                );
            })
        }
        </div>
            return projectDisplay;


    }
    render() {
        return (
            <div>
                <h1 className="text-center" >Our projects</h1>
                {this.renderProjects()}
            </div>
        )
    }

}

export default ProjectComponent