import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/notfound.png';

class NotFound extends Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <img width="60%" src={notFound}/>
                <Link to="/">Back to home page</Link>
            </div>
        )
    }
}
export default NotFound;