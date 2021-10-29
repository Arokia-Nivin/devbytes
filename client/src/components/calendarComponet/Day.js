import React, { Component } from 'react';
import '../../styles/calendar.css';

class Day extends Component {
    render() {
        const { day, r, isEvent } = this.props;

        return (
            <React.Fragment>
                { r!==0?
                (<div className={`cont col ${isEvent?'event': ''}`} onClick={()=>this.props.getEventDetail(day.format("YYYY-MM-DD"))}>
                    {r===0?day:day.format("DD")}
                </div>):
                (<div className={`cont col days`} >{day}</div>)}
            </React.Fragment>
        )
    }
}
export default Day;