import React, { Component } from 'react';
import '../styles/Loading.css';

class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card event-loading" style={{width:"100px", height:"20px"}}>
                </div>
                <div className="card w-100 event-loading">
                </div>
                <div className="card w-100 event-loading">
                </div>
            </React.Fragment>
        )
    }
}

export default Loading;