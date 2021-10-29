import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';
import Day from './Day';
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
        eventLoading: false
    }
    
    async componentDidMount() {
        const res = await axios.get('/api/events/dates');
        const events = res.data.map((evt) => {
            return dayjs(evt.eventdate).format("YYYY-MM-DD");
        });
        this.setState({eventDates: events});
        
        this.getMonthDates();  
    }
    
    getMonthDates = () => {
        this.setState({ month: getMonth(this.state.monthIndex) });
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
        try {
            const res = await axios.get(`/api/events/${date}`);
            if(res.data.events.length) {
                this.setState({ events: res.data.events, eventMsg: dayjs(date).format("DD-MM-YYYY") });
            }else {
                this.setState({ events: res.data.events, eventMsg: `No events on ${dayjs(date).format("DD-MM-YYYY")}` });
            }
            console.log(this.state.events);
        }catch(err) {
            this.setState({ eventMsg: `No events on ${dayjs(date).format("DD-MM-YYYY")}`})
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

        const Events = events.map((evt) => {
            
            return (
                <div className="card event-cont w-100">
                    <div className="card-body">
                        <h5 className="card-title"><Link to={{pathname: `/events/${evt._id}`, aboutProps: {...evt}}}>{evt.title}</Link></h5>
                        <p className="card-text">{evt.mode}</p>
                    </div>
                </div>
            )
        })

        return Events;
    }


    render() {
        return (
            <div className="row events-page-container" style={{ margin: "0 auto" }} >
                <div className="calendar-container col-lg-4 col-md-6 col-sm-12 me-5">
                    <div className="calendar-header">
                        <button onClick={this.decMonthIndex}>{"<"}</button>
                        <h3>{dayjs(new Date(dayjs().year(), this.state.monthIndex)).format("MMMM YYYY")}</h3>
                        <button onClick={this.incMonthIndex}>{">"}</button>
                    </div>
                    {this.renderCalendar()}
                </div>
                <div className="events-container col-lg-7 col-md-12 col-sm-12" style={{marginTop: "20px"}}>
                    <h4 className="event-msg">{this.state.eventMsg}</h4>
                    {this.renderEvents()}
                </div>
            </div>
        )
    }
}

export default Calendar;