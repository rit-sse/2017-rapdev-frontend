import React, { Component } from 'react';
import 'scss/calendar.scss';
import Day from './Day';

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ], // 0 dis 1 free 2 used 3 selected
    };
  }

  select(day, hour) {
    if (this.state.grid[day][hour] === 1) {
      this.setState({
        grid: [
          ...this.state.grid.slice(0, day),
          [
            ...this.state.grid[day].slice(0, hour),
            3,
            ...this.state.grid[day].slice(hour + 1),
          ],
          ...this.state.grid.slice(day + 1),
        ],
      });
    } else if (this.state.grid[day][hour] === 3) {
      this.setState({
        grid: [
          ...this.state.grid.slice(0, day),
          [
            ...this.state.grid[day].slice(0, hour),
            1,
            ...this.state.grid[day].slice(hour + 1),
          ],
          ...this.state.grid.slice(day + 1),
        ],
      });
    }
  }

  render() {
    const Days = days.map((day, index) => {
      return (
        <Day select={this.select.bind(this, index)} key={day} weekday={day} grid={this.state.grid[index]} />
      );
    });

    return (
      <div>
        <div className="times">
          <div className="time">9</div>
          <div className="time">10</div>
          <div className="time">11</div>
          <div className="time">12</div>
          <div className="time">1</div>
          <div className="time">2</div>
          <div className="time">3</div>
          <div className="time">4</div>
          <div className="time">5</div>
          <div className="time">6</div>
          <div className="time">7</div>
          <div className="time">8</div>
          <div className="time">9</div>
        </div>
        <div className="calendar">
          {Days}
        </div>
      </div>
    );
  }
}

export default Calendar;
