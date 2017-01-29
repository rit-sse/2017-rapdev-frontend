import React from 'react';
import SubNav from '../components/SubNav';
import TeamRoom from '../components/TeamRoom';
import LabRoom from '../components/LabRoom';
import 'scss/rooms.scss'; // eslint-disable-line

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.renderTeamRoom = this.renderTeamRoom.bind(this);
  }

  renderTeamRoom(room) {
    return (
      <div key={room.id} className="col-6">
        <TeamRoom status={room.status} />
      </div>
    );
  }

  render() {
    const teamRooms = [
      { id: 1, status: 'full' },
      { id: 2, status: 'empty' },
      { id: 3, status: 'empty' },
      { id: 4, status: 'full' },
      { id: 5, status: 'full' },
      { id: 6, status: 'empty' },
      { id: 7, status: 'empty' },
      { id: 8, status: 'labbie' },
      { id: 9, status: 'full' },
      { id: 10, status: 'empty' },
      { id: 11, status: 'empty' },
      { id: 12, status: 'full' }
    ];

    return (
      <div>
        <div className="row" style={{ paddingTop: '5%' }}>
          <div className="col-12 text-center">
            <SubNav />
          </div>
        </div>
        <div className="row" style={{ paddingTop: '5%'}}>
          <LabRoom name="The SSE" />
          <div className='col-6 team-rooms'>
            <div className="row">
              {teamRooms.map(this.renderTeamRoom)}
            </div>
          </div>
          <LabRoom name="The Co-Lab" />
        </div>
      </div>
    );
  }
}

export default Overview;
