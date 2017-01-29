import React from 'react';

import 'scss/reservationEditor.scss';
import Calendar from 'js/components/Calendar';
import RoomFeatureButtons from './subcomponents/RoomFeatureButtons';

const sampleRoomFeatures = [
  {
    id: 1,
    name: "Webcam"
  },
  {
    id: 2,
    name: "TV"
  },
  {
    id: 3,
    name: "Projector",
  },
  {
    id: 4,
    name: "Phoneline"
  }
];

class ReservationEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reservation-editor-container">
        <div className="container">
          <div className="reservation-editor row">
            <div className="col-6">
              <div
                className="close-button"
                onClick={this.props.onCloseClick}
              >
                <i className="fa fa-close"></i>
              </div>
              <h1>{this.props.title}</h1>
              <RoomFeatureButtons features={sampleRoomFeatures} />
            </div>
            <div className="col-6">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReservationEditor.propTypes = {
  title: React.PropTypes.string,
  onCloseClick: React.PropTypes.func
};

ReservationEditor.defaultProps = {
  title: "New Reservation",
  onCloseClick: () => {}
};

export default ReservationEditor;
