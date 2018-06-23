import { POST_MARK, 
         POST_CHANGED, 
         POST_CREATE, 
         POST_LOAD, 
         OTHER_POST_LOAD, 
         DM_POST_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    post: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_CHANGED:
            console.log(action.payload);
            return { ...state, post: action.payload };
        case DM_POST_CHANGED:
            return { ...state, post: action.payload };    
        case POST_CREATE:
        /**Not: Burası önceden return 
         * return INITIAL_STATE; şeklindeydi.
         * Bu haliyle post kayıt edildikten sonra postları göstermeye
         * geri döndüğünde sayfa boş geliyordu aşşağıdaki şekilde değiştirince oldu.
         */
            return { ...state };
        case POST_MARK:
            return { ...state };
        case POST_LOAD:
            console.log('postListReducer çalıştı.');
            console.log(action.payload);
            return action.payload;
        case OTHER_POST_LOAD:
            return action.payload;
        default:
            return state;
    }      
};
