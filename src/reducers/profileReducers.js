import { PROFILE_LOAD } from '../actions/types';

const INITIAL_STATE = {
uid: '',
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
    case PROFILE_LOAD:
        console.log('PROFILE_LOAD reduceri çalıştı. Giden obje : ');
        return action.payload;
    default:
        return state;
}      
};
