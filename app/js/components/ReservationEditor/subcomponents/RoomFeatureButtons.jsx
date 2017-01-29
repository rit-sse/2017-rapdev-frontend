import React from 'react';

function generateFeatureButton(data) {
  return (
    <button
      key={data.id}
      className="btn btn-secondary"
      
    >
      {data.name}
    </button>
  );
}

const RoomFeatureButtons = props => (
  <div className="room-features-container">
    <h6>Room Features</h6>
    <div className="btn-group">
      {props.features.map(generateFeatureButton)}
    </div>
  </div>
);

RoomFeatureButtons.propTypes = {
  onChange: React.PropTypes.func,
  features: React.PropTypes.arrayOf(React.PropTypes.object)
};

RoomFeatureButtons.defaultProps = {
  onChange: () => {},
  features: []
};

export default RoomFeatureButtons;
