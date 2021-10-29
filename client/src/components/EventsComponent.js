import React, { Component } from 'react';
import dayjs from 'dayjs';

import '../styles/calendar.css';

class EventsComponent extends Component {
    render() {

        const { title, description, eventdate, registrationformurl, mode } = this.props.location.aboutProps;
        return (
            <div className="event-detail-container">
                <div className="img-cont" style={{width: "100%", maxWidth: "400px"}}>
                    <img className="card-img-top img" src="https://media-exp1.licdn.com/dms/image/C5622AQGVP1r02ixVAg/feedshare-shrink_1280/0/1635225610626?e=1638403200&v=beta&t=E74a6cf8BLLqchuPGAyPnOoWV-XRzKnoAAS-a49uDKY"/>
                </div>
                <div style={{width: "100%", maxWidth: "500px"}}>
                    <div className="card-body" >
                        <h5 className="card-title" style={{ fontWeight: "800"}}>{title}</h5>
                        <h6 className="card-title">Event on: { dayjs(eventdate).format("DD-MM-YYYY") }</h6>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><b>Mode: </b>{mode}</p>
                        <p className="card-text"><b>Registeration Link: </b><a href={registrationformurl}>{registrationformurl}</a></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default EventsComponent;

