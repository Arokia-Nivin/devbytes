import React, { Component } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '../../utils';

class Calendar extends Component {

    state = {
        monthIndex: dayjs().month(),
        month: []
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


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Calendar;