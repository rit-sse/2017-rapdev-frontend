import {
    ROOM_SET_ALL
} from '../actions/room';

export default function room(state = [], action) {
    switch (action.type) {
        case ROOM_SET_ALL:
            return action.rooms;
        default:
            return state;
    }
}