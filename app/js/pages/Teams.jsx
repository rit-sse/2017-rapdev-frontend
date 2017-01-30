import React from 'react';
import SubNav from '../components/SubNav';
import MyTeams from '../components/MyTeams';
import TeamDetail from '../containers/TeamDetail';
import {Match} from 'react-router';

const Teams = () => (
  <div>
    <div className="row" style={{ paddingTop: '5%' }}>
      <div className="col-12">
        <div className="text-center">
          <SubNav />
        </div>
        <Match pattern="/myTeams/:id" component={TeamDetail} />
        <Match exactly pattern="/myTeams" component={MyTeams} />
      </div>
    </div>
  </div>
);

export default Teams;
