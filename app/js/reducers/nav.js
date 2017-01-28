import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/nav';

const initState = {
  userDropdown: false,
};

export default function nav(state = initState, action) {
  switch (action.type) {
    case OPEN_DROPDOWN:
      return {
        ...state,
        userDropdown: true,
      };
    case CLOSE_DROPDOWN:
      return {
        ...state,
        userDropdown: false,
      };
    default:
      return state;
  }
}
