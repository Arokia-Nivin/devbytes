import React, { Component } from 'react';
import '../../styles/calendar.css';

class Day extends Component {
    render() {
        const { day, r } = this.props;

        return (
            <div className="cont">
                {r===0?day:day.format("DD")}
            </div>
        )
    }
}
export default Day;