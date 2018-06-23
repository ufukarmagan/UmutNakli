import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { CHAT_FRIENDS_LOAD } from './types';

export const actChatFriendsLoad = () => {
    console.log("actChatFriendsLoad calisti");
    const { currentUser } = firebase.auth();
    const database = firebase.database();
    const arr = [];
    return (dispatch) => {
        database.ref('kullanicilar/' + currentUser.uid + '/friends')
    .on('value', snapshot => {
        if (snapshot.val() === null)
        {
            dispatch({ type: CHAT_FRIENDS_LOAD, payload: {} });
        }
        
        else {
            //Buraya sonradan bak.
            snapshot.forEach((childSnapshot) => {
                const gelen = childSnapshot.val();
                console.log('chatFriendsActiona gelen childSnapshot.messages');
                console.log(childSnapshot.val().messages);
                if ((childSnapshot.val().messages) === undefined) {
                    dispatch({ type: CHAT_FRIENDS_LOAD, payload: {} });
                }
                else {
                console.log("chatfriends uid");
                console.log(gelen.friendsUid);
                const database2 = firebase.database();
                database2.ref('kullanicilar/' + gelen.friendsUid)
                .on('value', (snapshot2) => {
                console.log("CHAT FRIENDS LOAD gelen snapshot2:");
                console.log(snapshot2.val());

                //snapshot2.forEach(() => {
                    //console.log("chatfriendsactionsdaki snapshot2");
                    //console.log(snapshot2.val());
                    const element = {};
                    element.name = snapshot2.val().name;
                    element.friendsUid = gelen.friendsUid;
                    element.age = snapshot2.val().age;
                    element.disase = snapshot2.val().disaseInfo.profileType;
                    element.url = snapshot2.val().profile.url;
                    console.log("icerdeki foreachte olusan element");
                    console.log(element);
                    arr.push(element);
                    
                //});
                
                });
                }
                dispatch({ type: CHAT_FRIENDS_LOAD, payload: arr });
        });
                console.log(arr);
                //dispatch({ type: CHAT_FRIENDS_LOAD, payload: arr });
    }
});
        };
};
