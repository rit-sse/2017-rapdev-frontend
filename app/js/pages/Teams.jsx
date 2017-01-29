import React from 'react';
import SubNav from '../components/SubNav';
import MyTeams from '../components/MyTeams';

const Teams = () => (
  <div>
    <div className="row" style={{ paddingTop: '5%' }}>
      <div className="col-12">
        <div className="text-center">
          <SubNav />
        </div>
        <MyTeams />
      </div>
    </div>
  </div>
);

export default Teams;
