import * as actions from '../actions/reservations';

const initState = {
  showNewReservationEditor: false,
  reservations: [
    {
      id: 1,
      name: "Just You",
      roomNumber: "1661",
      startTime: "2017-01-28T22:30:00+00:00",
      endTime: "2017-01-28T23:00:00+00:00"
    },{
      id: 2,
      name: "Senior Project",
      roomNumber: "1662",
      startTime: "2017-01-30T22:30:00+00:00",
      endTime: "2017-01-30T23:00:00+00:00"
    },{
      id: 3,
      name: "Student Team",
      roomNumber: "1662",
      startTime: "2017-02-04T22:30:00+00:00",
      endTime: "2017-02-04T23:00:00+00:00"
    },{
      id: 4,
      name: "Just You",
      roomNumber: "1662",
      startTime: "2017-01-29T22:30:00+00:00",
      endTime: "2017-01-29T23:00:00+00:00"
    }
  ]
};

export default function(state = initState, action) {
  switch(action.type) {
  case actions.CLOSE_RESERVATION_CREATOR:
    return {
      ...state,
      showNewReservationEditor: false
    };
  case actions.SET_ALL_RESERVATIONS:
    return {
      ...state,
      reservations: action.reservation,
    }
  case actions.OPEN_RESERVATION_CREATOR:
    return {
      ...state,
      showNewReservationEditor: true
    };
  default:
    return state;
  }
}
