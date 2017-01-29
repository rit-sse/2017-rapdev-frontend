import React from 'react';

const TeamRoom = props => (
  <div className={`team-room ${props.status}`}>
    {props.content.text || ''}
  </div>
);

TeamRoom.propTypes = {
  content: React.PropTypes.object,
  status: React.PropTypes.string
};

export default TeamRoom;
