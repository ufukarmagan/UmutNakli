import { combineReducers } from 'redux';
import authenticationReducers from './AuthenticationReducers';
import postListReducers from './PostListReducers';
import registerReducers from './RegisterReducers';
import nonFriendsReducers from './nonFriendsReducers';
import friendshipRequestReducers from './friendshipRequestReducers';
import incomingRequestReducers from './incomingRequestReducers';
import friendsReducers from './friendsReducers';
import profileReducers from './profileReducers';
import chatFriendsReducers from './chatFriendsReducers';
import sadreducers from './sadreducers';

export default combineReducers({
    //kimlikDogrulamaReducerstan return edilen deger neyse kimlikDogrulamaResponsea atılıyor.
   authenticationResponse: authenticationReducers,
   postListResponse: postListReducers,
   registerResponse: registerReducers,
   nonFriendsResponse: nonFriendsReducers,
   friendshipRequestResponse: friendshipRequestReducers,
   incomingRequestResponse: incomingRequestReducers,
   friendsResponse: friendsReducers,
   profileResponse: profileReducers,
   chatFriendsResponse: chatFriendsReducers,
   sadsResponse: sadreducers
});
