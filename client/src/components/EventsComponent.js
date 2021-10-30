import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

import '../styles/calendar.css';

class EventsComponent extends Component {
    state = {
        title: '',
        description: '',
        eventdate: '',
        registrationformurl: '',
        mode: '',
        whatsappgrouplink: '',
        zoommeetlink: '',
        telegramgrouplink: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`/api/events/event/${id}`);
        const { title, description, eventdate, registrationformurl, mode, whatsappgrouplink, zoommeetlink, telegramgrouplink } = res.data.event;
        this.setState({ 
            title, description, eventdate, registrationformurl, mode, whatsappgrouplink, zoommeetlink, telegramgrouplink
         });
         console.log(this.state);
    }

    render() {

        const { title, description, eventdate, registrationformurl, mode, whatsappgrouplink, zoommeetlink, telegramgrouplink, noofdays=1, location='chennai' } = this.state;
       
        return (
            <div className="container-md" style={{marginTop: "40px"}}>
                <div className="event-detail-header">
                    <NavLink className="links" to="/events"><img alt="back" src="https://img.icons8.com/material-outlined/24/000000/circled-left--v2.png"/>Back</NavLink>
                    <a className="links" rel="noreferrer" target="_blank" href={`https://www.google.com/calendar/render?action=TEMPLATE&sf=true&output=xml&text=${title}&location=${location}&details=${description}&dates=${dayjs(eventdate).format("YYYYMMDD")/dayjs(eventdate + noofdays).format("YYYYMMDD")}`}><img alt="calendar" src="https://img.icons8.com/material-rounded/24/000000/calendar.png"/>Add to calendar</a>
                </div>
                <div className="event-detail-container">
                    <div className="img-cont" style={{width: "100%", maxWidth: "400px"}}>
                        <img alt="poster" className="card-img-top img" src="https://media-exp1.licdn.com/dms/image/C5622AQGVP1r02ixVAg/feedshare-shrink_1280/0/1635225610626?e=1638403200&v=beta&t=E74a6cf8BLLqchuPGAyPnOoWV-XRzKnoAAS-a49uDKY"/>
                    </div>
                    <div style={{width: "100%", maxWidth: "500px"}}>
                        <div className="card-body" >
                            <h5 className="card-title" style={{ fontWeight: "800"}}>{title}</h5>
                            <h6 className="card-title">Event on: { dayjs(eventdate).format("DD-MM-YYYY") }</h6>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><b>Mode: </b>{mode}</p>
                            <p className="card-text"><b>Registeration Link: </b><a target="_blank" rel="noreferrer" href={registrationformurl}>{registrationformurl}</a></p>
                            <p className="card-text"><b>Join our whatsapp group: </b><a target="_blank" rel="noreferrer" href={whatsappgrouplink}>{whatsappgrouplink}</a></p>
                            <p className="card-text"><b>Join our Telegram group: </b><a target="_blank" rel="noreferrer" href={telegramgrouplink}>{telegramgrouplink}</a></p>
                            <p className="card-text"><b>Zoom meet link: </b><a target="_blank" rel="noreferrer" href={zoommeetlink}>{zoommeetlink}</a></p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EventsComponent;

