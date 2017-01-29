import {
    SET_ALL_RESERVATIONS
} from '../actions/reservation';

export default function reservation(state = [], action) {
    switch (action.type) {
        case SET_ALL_RESERVATIONS:
            return action.reservation
        default:
            return state;
    }
}
