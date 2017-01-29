import React from 'react';

const LabRoom = props => (
  <div className="col ">
    <div className="lab-room text-center">
      <h2>{props.name}</h2>
    </div>
  </div>
);

LabRoom.propTypes = {
  name: React.PropTypes.string
};

export default LabRoom;
