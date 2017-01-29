import React from 'react';

const TeamRoom = props => (
  <div className={`team-room ${props.status}`}></div>
);

TeamRoom.propTypes = {
  status: React.PropTypes.string
};

export default TeamRoom;
