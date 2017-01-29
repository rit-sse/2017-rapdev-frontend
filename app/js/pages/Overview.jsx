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
        <TeamRoom status={room.status} content={room.content} />
      </div>
    );
  }

  render() {
    const teamRooms = [
      { id: 1, status: 'full', content: {text: 'Senior Project'} },
      { id: 2, status: 'empty', content: {text: ''} },
      { id: 3, status: 'empty', content: {text: ''} },
      { id: 4, status: 'full', content: {text: 'Co-Lab Class'} },
      { id: 5, status: 'full', content: {text: 'Co-Lab Class'} },
      { id: 6, status: 'empty', content: {text: ''} },
      { id: 7, status: 'empty', content: {text: ''} },
      { id: 8, status: 'labbie', content: {text: 'Labbie Space'} },
      { id: 9, status: 'full', content: {text: 'Student'} },
      { id: 10, status: 'empty', content: {text: ''} },
      { id: 11, status: 'empty', content: {text: ''} },
      { id: 12, status: 'full', content: {text: 'Student'} }
    ];

    return (
      <div>
        <div className="row" style={{ paddingTop: '5%' }}>
          <div className="col-12 text-center">
            <SubNav />
          </div>
        </div>
        <h1>Room Status</h1>
        <div className="row" style={{ paddingTop: '5%'}}>
          <LabRoom name="The SSE" />
          <div className='col-12 col-md-6 team-rooms'>
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
