import React, { Component } from 'react';
import { NavLink, withRouter,  } from 'react-router-dom';
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
        meetlink: '',
        telegramgrouplink: '',
        posterurl: ''
    }

    async componentDidMount() {
        console.log(this.props.location)
        try{
            const { id } = this.props.match.params;
            const res = await axios.get(`/api/events/event/${id}`);
            const { title, description, eventdate, registrationformurl, mode, whatsappgrouplink, meetlink, telegramgrouplink, posterurl } = res.data.event;
            this.setState({ 
                title, description, eventdate, registrationformurl, mode, whatsappgrouplink, meetlink, telegramgrouplink, posterurl
            });
        }catch(err) {
            console.log(err);
            this.props.history.push('/')
        }
    }

    render() {

        const { title, description, eventdate, registrationformurl, mode, whatsappgrouplink, meetlink, telegramgrouplink, noofdays=1, location='chennai', posterurl } = this.state;
       
        return (
            <div className="container-md" style={{marginTop: "40px"}}>
                <div className="event-detail-header">
                    <a onClick={() => this.props.history.goBack()} className="links"><img alt="back" src="https://img.icons8.com/material-outlined/24/000000/circled-left--v2.png"/>Back</a>
                    <a className="links" rel="noreferrer" target="_blank" href={`https://www.google.com/calendar/render?action=TEMPLATE&sf=true&output=xml&text=${title}&location=${location}&details=${description}&dates=${dayjs(eventdate).format("YYYYMMDD")/dayjs(eventdate + noofdays).format("YYYYMMDD")}`}><img alt="calendar" src="https://img.icons8.com/material-rounded/24/000000/calendar.png"/>Add to calendar</a>
                </div>
                <div className="event-detail-container">
                    <div className="img-cont" style={{width: "100%", maxWidth: "400px"}}>
                        <img alt="poster" className="card-img-top img" src={posterurl}/>
                    </div>
                    <div style={{width: "100%", maxWidth: "500px"}}>
                        <div className="card-body" >
                            <h5 className="card-title" style={{ fontWeight: "800", background: "linear-gradient(310deg,#7928ca,#ff0080)",backgroundClip: "text",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent"}}>{title}</h5>
                            <p className="card-title"><b>Event on: { dayjs(eventdate).format("DD-MM-YYYY") }</b></p>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><b>Mode: </b>{mode}</p>
                            <p className="card-text"><b>Registeration Link: </b><a target="_blank" rel="noreferrer" href={registrationformurl}>{registrationformurl}</a></p>
                            <p className="card-text"><b>Join our whatsapp group: </b><a target="_blank" rel="noreferrer" href={whatsappgrouplink}>{whatsappgrouplink}</a></p>
                            <p className="card-text"><b>Join our Telegram group: </b><a target="_blank" rel="noreferrer" href={telegramgrouplink}>{telegramgrouplink}</a></p>
                            <p className="card-text"><b>Meet link: </b><a target="_blank" rel="noreferrer" href={meetlink}>{meetlink}</a></p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(EventsComponent);

