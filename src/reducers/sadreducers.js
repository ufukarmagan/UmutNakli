import {  SADS_LOAD } from '../actions/types';

const INITIAL_STATE = {
name: '',
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
        case SADS_LOAD:
        console.log('SADS_LOAD reduceri çalıştı. Giden obje : ');
        return action.payload;    
    default:
        return state;
}      
};
