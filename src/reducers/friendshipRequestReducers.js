import { FRIENDSHIP_REQUEST_LOAD } from '../actions/types';

const INITIAL_STATE = {
name: '',
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
    case FRIENDSHIP_REQUEST_LOAD:
        console.log('FRIENDSHIP_REQUEST_LOAD reduceri çalıştı. Giden obje : ');
        return action.payload;
    default:
        return state;
}      
};
