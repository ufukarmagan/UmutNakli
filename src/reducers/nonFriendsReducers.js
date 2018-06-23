import { NONFRIENDS_LOAD,
    REQUEST_SUCCESS,
    REQUEST_FAILED } from '../actions/types';

const INITIAL_STATE = {
name: '',
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
    case NONFRIENDS_LOAD:
        console.log('nonFriendsList reduceri çalıştı. Giden obje : ');
        return action.payload;
    case REQUEST_SUCCESS:
        console.log('REQUEST basarili oldu. ');
        return { ...state };
    case REQUEST_FAILED:
        console.log('REQUEST basarisiz oldu. ');
        return { ...state };
    default:
        return state;
}      
};
