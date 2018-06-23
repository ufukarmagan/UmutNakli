import { INCOMING_REQUEST_LOAD } from '../actions/types';

const INITIAL_STATE = {
name: '',
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
    case INCOMING_REQUEST_LOAD:
        console.log('INCOMING_REQUEST_LOAD reduceri çalıştı. Giden obje bu: ');
        console.log(action.payload);
        return action.payload;
    default:
        return state;
}      
};
