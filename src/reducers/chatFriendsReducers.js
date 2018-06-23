import { CHAT_FRIENDS_LOAD } from '../actions/types';

const INITIAL_STATE = {
name: '',
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
    case CHAT_FRIENDS_LOAD:
        console.log('CHAT_FRIENDS_LOAD reduceri çalıştı. Giden obje : ');
        return action.payload;
    default:
        return state;
}      
};
