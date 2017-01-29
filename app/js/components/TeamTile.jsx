import React from 'react';

class TeamTile extends React.Component {
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

  handleDeleteClick() {
    this.props.onDeleteClick();
  }

  handleClick(event) {
    event.stopPropagation();
    if (event.target.className === "fa fa-times"){
      this.handleDeleteClick()
    } else {
      this.props.onClick(event);
    }
  }

  render() {

    return (
      <div
        className="reservation-tile"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        {this.state.showDeleteButton ? (
          <div
            className="delete-button"
            onClick={this.props.handleDeleteClick}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        ) : (null)}
        <div className="accent">
        </div>
        <div className="info">
          <h2>{this.props.name}</h2>
          <h4 className="date">
            {this.props.type}
          </h4>
        </div>
        <div className="room-number">
          <h1>{this.props.members.length} Members</h1>
        </div>
      </div>
    );
  }
}

TeamTile.propTypes = {
  type: React.PropTypes.string,
  roomNumber: React.PropTypes.string,
  startTime: React.PropTypes.string,
  endTime: React.PropTypes.string,
  onDeleteClick: React.PropTypes.func,
  onClick: React.PropTypes.func
};

TeamTile.defaultProps = {
  onDeleteClick: () => {window.alert("DELTED!!");},
  onClick: () => {window.alert("CLICKED!");}
};

export default TeamTile;
