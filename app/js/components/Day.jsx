import React, { Component } from 'react';
import 'scss/calendar.scss';

const hours = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Hours = hours.map((time, index) => {
      switch (this.props.grid[index]) {
        case 0:
          return <div onClick={() => this.props.select(index)} key={time} className="hour disabled" />;
        case 1:
          return <div onClick={() => this.props.select(index)} key={time} className="hour free" />;
        case 2:
          return <div onClick={() => this.props.select(index)} key={time} className="hour filled" />;
        case 3:
          return <div onClick={() => this.props.select(index)} key={time} className="hour selected" />;
        default:
          return <div onClick={() => this.props.select(index)} key={time} className="hour" />;
      }
    });

    return (
      <div className="day">
        <div className="weekday">{this.props.weekday}</div>
        {Hours}
      </div>
    );
  }
}

export default Day;
