import React from 'react';

class TeamRoom extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div
        className={`team-room ${this.props.status}`}
        onClick={(e) => this.handleClick(e)}>
        {this.props.content.text || ''}
      </div>
    );
  }
}

TeamRoom.propTypes = {
  content: React.PropTypes.object,
  status: React.PropTypes.string
};

export default TeamRoom;
