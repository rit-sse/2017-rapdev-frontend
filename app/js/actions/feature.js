import { api } from './utils';

export const SET_ALL_FEATURE = 'SET_ALL_FEATURE';

export function loadRoomFeatures() {
    return (dispatch) => {
        return dispatch(api('/api/v1/feature'))
            .then(feature => {
                dispatch({
                    type: SET_ALL_FEATURE,
                    feature
                });
            });
    };
}
