import { USERNAME_CHANGED, PASSWORD_CHANGED, USER_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
       case USERNAME_CHANGED:
         console.log('USERNAME_CHANGED changed reducer calisti :' + action.payload);
         return { ...state, username: action.payload };
       case PASSWORD_CHANGED:
         console.log('PASSWORD_CHANGED reducer calisti :' + action.payload);
         return { ...state, password: action.payload };
       case USER_LOGIN:
         console.log('USER_LOGIN reducer calisti :');
         return { ...state };
       case LOGIN_SUCCESS:
         console.log('LOGIN_SUCCESS reducer calisti :');
         return { ...state };
       case LOGIN_FAIL:
         console.log('LOGIN_FAIL reducer calisti :');
         return { ...state };
       default:
         return state;
    }
};
