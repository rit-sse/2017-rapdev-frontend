import {
    SET_ALL_FEATURE
} from '../actions/feature';

export default function feature(state = [], action) {
    switch (action.type) {
        case SET_ALL_FEATURE:
            return action.feature;
        default:
            return state;
    }
}
