import React from 'react';
import 'scss/reservationList.scss';
import moment from 'moment';

import TeamTile from './TeamTile';

const sampleTeams = [
  {
    id: 1,
    type: "Just You",
    name: "Me, Myself, and I",
    members: ["me"],
  },{
    id: 2,
    type: "Senior Project",
    name: "My Team Name",
    members: ["me", "not me", "other person"],
  }
];

class MyTeams extends React.Component {
  constructor(props) {
    super(props);
    this.makeTeamTile = this.makeTeamTile.bind(this);
  }

  makeTeamTile(data) {
    return (
      <TeamTile
        key={data.id}
        {...data}
      />
    );
  }

  render() {
    return (
      <div className="col-12">
        <div className="my-reservations-container">
          <div className="header">
            <h1>My Teams</h1>
            <div className="new-reservation-container">
              <button
                className="add-reservation btn btn-secondary"
                onClick={this.props.onAddReservationClick}
              >
                <i className="fa fa-plus"></i> New Team
              </button>
            </div>
          </div>
          <div className="my-reservations-list">
            {sampleTeams.map(this.makeTeamTile)}
          </div>
        </div>
      </div>
    );
  }
}

export default MyTeams;
