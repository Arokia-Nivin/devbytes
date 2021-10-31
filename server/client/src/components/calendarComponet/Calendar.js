import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';
import Day from './Day';
import Loading  from '../Loading';
import { getMonth } from '../../utils';

//CSS
import '../../styles/calendar.css';

class Calendar extends Component {

    state = {
        monthIndex: dayjs().month(),
        month: [[]],
        eventDates: [],
        events: [],
        eventMsg: 'Click on the dates to view events.',
        eventLoading: false,
        calendarLoading: false
    }
    
    async componentDidMount() {
        this.setState({ calendarLoading: true});
        const res = await axios.get('/api/events/dates');
        const events = res.data.map((evt) => {
            return dayjs(evt.eventdate).format("YYYY-MM-DD");
        });
        this.setState({eventDates: events});
        
        this.getMonthDates();  
    }
    
    getMonthDates = () => {
        this.setState({ month: getMonth(this.state.monthIndex), calendarLoading: false });
    }
    
    incMonthIndex = () => {
        this.setState((st) => ({
            monthIndex: st.monthIndex + 1
        }),() => {
          this.getMonthDates();
        });
    }
    
    decMonthIndex = () => {
        this.setState((st) => ({
          monthIndex: st.monthIndex - 1
        }),() => {
          this.getMonthDates();
        });
    }

    getEventsForDate = async (date) => {
        this.setState({eventLoading: true})
        try {
            
            const res = await axios.get(`/api/events/${date}`);
            if(res.data.events.length) {
                this.setState({ events: res.data.events, eventMsg: dayjs(date).format("DD-MM-YYYY"), eventLoading: false });
            }else {
                this.setState({ events: res.data.events, eventMsg: `No events on ${dayjs(date).format("DD-MM-YYYY")}`, eventLoading: false });
            }
            
        }catch(err) {
            this.props.history.push('/')
        }
        
    }

    renderCalendar = () => {
        const { month, eventDates } = this.state;
        //Iterate over rows in calendar
        const calendar = month.map((row, rowIndex) =>
            ( <div className="row" key={rowIndex}>
                {row.map((day, colIndex) => { //iterate over dates in calendar
                    return <Day getEventDetail={this.getEventsForDate} r={rowIndex} day={day} key={colIndex} isEvent={ eventDates.includes(dayjs(day).format("YYYY-MM-DD"))} />;
                })}
            </div> )
        )
        return calendar;
    }

    renderEvents = () => {
        const { events } = this.state;

        const Events = events.map((evt, ind) => {
            
            return (
                <div key={ind} className="card event-cont w-100" style={{ borderRadius: "10px"}}>
                    
                    <div className="card-body">
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h5 className="card-title"><NavLink className="details-link" to={`/events/${evt._id}`}>{evt.title}</NavLink></h5>
                            <img src={this.props[evt.eventtype]} />
                        </div>
                        <p className="card-text"><b>Mode: </b>{evt.mode}</p>
                    </div>
                </div>
            )
        })

        return Events;
    }


    render() {
        return (
            <div className="container-md" style={{ marginTop: "30px"}}>
                <div className="row events-page-container" style={{ margin: "30px auto" }} >
                    <div className="calendar-container col-lg-4 col-md-6 col-sm-12 me-5">
                        <div className="calendar-header">
                            <p style={{ cursor: "Pointer"}} onClick={this.decMonthIndex}><img alt="left" src="https://img.icons8.com/ios/24/000000/left-squared--v1.png"/></p>
                            <h3>{dayjs(new Date(dayjs().year(), this.state.monthIndex)).format("MMMM YYYY")}</h3>
                            <p style={{ cursor: "Pointer"}} onClick={this.incMonthIndex}><img alt="right" src="https://img.icons8.com/ios/24/000000/right-squared--v1.png"/></p>
                        </div>
                        {this.renderCalendar()}
                    </div>
                    <div className="events-container col-lg-7 col-md-12 col-sm-12" style={{marginTop: "20px"}}>
                        {!this.state.eventLoading? (
                            <>
                            <h4 className="event-msg">{this.state.eventMsg}</h4>
                                {this.renderEvents()}
                            </>
                            
                        ):<Loading />}
                    </div>
                </div>
            </div>
        )
    }
}

Calendar.defaultProps = {
    webinar: 'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/50/000000/external-webinar-health-education-inipagistudio-mixed-inipagistudio.png',
    technicalevent: 'https://img.icons8.com/cotton/50/000000/computer.png',
    nontechnicalevent: 'https://img.icons8.com/color/50/000000/hand-with-pen.png',
    hackathon: 'https://img.icons8.com/cotton/50/000000/computer.png',
    ideathon: 'https://img.icons8.com/color/50/000000/idea.png',
    workshop: 'https://img.icons8.com/officexs/50/000000/accessibility-tools.png'
}

export default withRouter(Calendar);