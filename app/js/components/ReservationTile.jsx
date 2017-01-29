import React from 'react';
import moment from 'moment';

class ReservationTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeleteButton: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      showDeleteButton: true
    });
  }

  handleMouseLeave() {
    this.setState({
      showDeleteButton: false
    });
  }

  handleDeleteClick(event) {
    event.stopPropagation();
    this.props.onDeleteClick(event);
  }

  handleClick(event) {
    event.stopPropagation();
    this.props.onClick(event);
  }

  render() {

    let upcoming = (moment(this.props.startTime).diff(moment()) <= 86400000);

    return (
      <div
        className={"reservation-tile" + (upcoming ? " emp" : "")}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        {this.state.showDeleteButton ? (
          <div
            className="delete-button"
            onClick={this.handleDeleteClick}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        ) : (null)}
        <div className="accent">
        </div>
        <div className="info">
          <h2>{this.props.name}</h2>
          <h4 className="date">
            {
              moment(this.props.startTime)
              .format('MM/DD/YY')
            }
          </h4>
          <h4 className="time-range">
            {
              moment(this.props.startTime)
              .format('h:mma') + " - " +
              moment(this.props.endTime)
              .format('h:mma')
            }
          </h4>
        </div>
        <div className="room-number">
          <h1>{this.props.roomNumber}</h1>
        </div>
      </div>
    );
  }
}

ReservationTile.propTypes = {
  name: React.PropTypes.string,
  startTime: React.PropTypes.string,
  endTime: React.PropTypes.string,
  onDeleteClick: React.PropTypes.func,
  onClick: React.PropTypes.func
};

ReservationTile.defaultProps = {
  onDeleteClick: () => {},
  onClick: () => {}
};

export default ReservationTile;
