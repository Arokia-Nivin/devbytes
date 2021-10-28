import React, { Component } from 'react';
import dayjs from 'dayjs';
import Day from './Day';
import { getMonth } from '../../utils';

//CSS
import '../../styles/calendar.css';

class Calendar extends Component {

    state = {
        monthIndex: dayjs().month(),
        month: [[]]
    }
    
    componentDidMount() {
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

    renderCalendar = () => {
        const { month } = this.state;
        //Iterate over rows in calendar
        const calendar = month.map((row, rowIndex) =>
            ( <div className="row" key={rowIndex}>
                {row.map((day, colIndex) => { //iterate over dates in calendar
                    return <Day r={rowIndex} day={day} key={colIndex} />;
                })}
            </div> )
        )
        return calendar;
    }


    render() {
        return (
            <div className="row" style={{ margin: "0 auto" }} >
                <div className="calendar-container col-lg-4 col-md-6 col-sm-12 me-5">
                    <div className="calendar-header">
                        <button onClick={this.decMonthIndex}>{"<"}</button>
                        <h3>{dayjs(new Date(dayjs().year(), this.state.monthIndex)).format("MMMM YYYY")}</h3>
                        <button onClick={this.incMonthIndex}>{">"}</button>
                    </div>
                    {this.renderCalendar()}
                </div>
                <div className="events-container col-lg-7 col-md-8 col-sm-12" style={{marginTop: "20px"}}>
                    <h3>Click on dates to view events</h3>
                </div>
            </div>
        )
    }
}

export default Calendar;