import {connect} from "react-redux";
import TeamDetail from "../components/TeamDetail";

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

function mapStateToProps(store, props){
  return {team: sampleTeams[props.params.id - 1]};
}

export default connect(mapStateToProps)(TeamDetail);