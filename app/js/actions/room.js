import { api } from './utils';

export const ROOM_SET_ALL = 'ROOM_SET_ALL';

export const loadRooms = () => {
    return (dispatch) => {
        dispatch(api('/api/v1/room'))
            .then(rooms => dispatch({
                type: ROOM_SET_ALL,
                rooms
            }));
    };
};