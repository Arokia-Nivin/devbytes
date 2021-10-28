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
            ( <div key={rowIndex}>
                {row.map((day, colIndex) => { //iterate over dates in calendar
                    return <Day r={rowIndex} day={day} key={colIndex} />;
                })}
            </div> )
        )
        console.log(calendar);
        return calendar;
    }


    render() {
        return (
            <div className="calendar-container">
                <div className="calendar-header">
                    <h3>{dayjs(new Date(dayjs().year(), this.state.monthIndex)).format("MMMM YYYY")}</h3>
                    <button onClick={this.decMonthIndex}>prev</button>
                    <button onClick={this.incMonthIndex}>next</button>
                </div>
                {this.renderCalendar()}
            </div>
        )
    }
}

export default Calendar;