import React from 'react';

class TeamDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      new_member: "",
      team_name: props.team.name
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    this.nameChange = this.nameChange.bind(this);
  }

  teamMembersTable(data, index){
    return (
      <div className="row">
        <div className="col-7">{data}</div>
        <div className="col-4">carter@rit.edu</div>
        <div className="col-1"><span className="fa fa-trash"></span></div>
      </div>
    )
  }

  handleSubmit(event){
    alert(this.state.new_member + " was added!");
    event.preventDefault();
  }

  nameChange(event){
    this.setState({team_name: event.target.textContent});
    // Pass new team name to backend
  }

  componentWillReceiveProps(next_props){
    this.setState({team_name: next_props.team.name})
  }

 render(){
   return(
     <div className="col-12">
      <div className="my-team">
        <div className="header">
          <h1 onBlur={this.nameChange} contentEditable>{this.state.team_name}</h1>
        </div>
         <div className="my-team-container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-3"><h2>Members</h2></div>
                <div className="col-9 my-team-add-member">
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" name="new-member" placeholder="Add new team member" />
                  </form>
                </div>
                <div className="my-team-table">
                  <div className="row">
                    <div className="col-7">Name</div>
                    <div className="col-4">Username</div>
                    <div className="col-1"></div>
                  </div>
                  {this.props.team.members.map(this.teamMembersTable)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default TeamDetail