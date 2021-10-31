import React, { Component } from 'react';
import dayjs from 'dayjs';
import { withRouter, NavLink } from 'react-router-dom';
import axios from 'axios';

import '../styles/calendar.css';

class UpComingEvents extends Component {

    state = {
        events: []
    }

    async componentDidMount() {
        try {
            const res = await axios.get('/api/events/upcomingevents');
            const { events } = res.data;

            this.setState({ events });

        }catch(err) {
            this.props.history.push('/');
        }
    }

    renderUpcomingEvents = () => {
        const { events } = this.state;

        const UpcomingEvents = events.map((event, ind) => {
            return (
                <div key={ind} className="upcoming-event-cont">
                    <img src={this.props[event.eventtype]}/>
                    <div className="upcoming-event-header">
                        <h5 className=""><NavLink className="upcoming-details-link" to={`/events/${event._id}`}><b>{event.title}</b></NavLink></h5>
                        <div style={{ display: "flex", justifyContent: "space-around"}}>
                            <p className=""><b>Date: </b>{dayjs(event.eventdate).format("DD-MM-YYYY")}</p>
                            <p className=""><b>Mode: </b>{event.mode}</p>
                        </div>
                    </div>
                </div>
            )
        });

        return UpcomingEvents;
    }

    render() {
        return (
            <>
                <h2 style={{ textAlign: "center", marginTop: "30px",  background: "linear-gradient(310deg,#7928ca,#ff0080)",backgroundClip: "text",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent"}}>Upcoming Events</h2>
                <div className="quotes"><em>"Sometimes later becomes never. Register now"</em></div>
                <div className="upcoming-events-container container-md">
                    {this.renderUpcomingEvents()}
                </div>
            </>
        )
    }
}

UpComingEvents.defaultProps = {
    webinar: 'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-webinar-health-education-inipagistudio-mixed-inipagistudio.png',
    technicalevent: 'https://img.icons8.com/cotton/54/000000/computer.png',
    nontechnicalevent: 'https://img.icons8.com/color/54/000000/hand-with-pen.png',
    hackathon: 'https://img.icons8.com/cotton/54/000000/computer.png',
    ideathon: 'https://img.icons8.com/color/48/000000/idea.png',
    workshop: 'https://img.icons8.com/officexs/50/000000/accessibility-tools.png'
}

export default withRouter(UpComingEvents);