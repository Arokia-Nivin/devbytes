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
                    <img src="https://img.icons8.com/cotton/54/000000/computer.png"/>
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
                <h2 style={{ textAlign: "center", marginTop: "30px"}}>Upcoming Events</h2>
                <div className="upcoming-events-container container-md">
                    {this.renderUpcomingEvents()}
                </div>
            </>
        )
    }
}
export default withRouter(UpComingEvents);