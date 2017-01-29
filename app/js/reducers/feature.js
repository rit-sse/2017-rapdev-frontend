import {
    SET_ALL_FEATURE
} from '../actions/feature';

export default function feature(state = [
    {
        id: 0,
        name: 'Have TV'
    },
    {
        id: 1,
        name: 'Has Projector'
    },
    {
        id: 3,
        name: 'Webcam'
    },
    {
        id: 4,
        name: 'Sterile'
    },
], action) {
    switch (action.type) {
        case SET_ALL_FEATURE:
            return action.feature;
        default:
            return state;
    }
}
