import firebase  from 'firebase';
import { Actions } from 'react-native-router-flux';
import { INCOMING_REQUEST_LOAD } from './types';

export const actIncomingRequestLoad = () => {
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    const arr = [];
    return (dispatch) => {
        database.ref('kullanicilar/' + currentUser.uid + '/incomingFriendshipRequest')
            .on('value', snapshot => {
                if (snapshot.val() === null)
                {
                    dispatch({ type: INCOMING_REQUEST_LOAD, payload: {} });
                }
                else {
                    snapshot.forEach((childSnapshot) => {
                        const gelen = childSnapshot.key;
                        console.log("requester uid");
                        console.log(gelen.requesterUid);
                        database.ref('kullanicilar/' + gelen)
                        .on('value', (snapshot2) => {
                        console.log("ACT INCOMING REQUEST LOAD gelen user:");
                        const element = {};
                        element.name = snapshot2.val().name;
                        element.requesterUid = gelen;
                        element.province = snapshot2.val().province;
                        element.age = snapshot2.val().age;
                        element.disase = snapshot2.val().disaseInfo;
                        element.url = snapshot2.val().profile.url;
                        console.log(element.name);
                        console.log(element.requesterUid);
                        console.log(element.province);
                        console.log(element.age);
                        console.log(element.disase);
                        arr.push(element);
                    });
                });
                        console.log(arr);
                        dispatch({ type: INCOMING_REQUEST_LOAD, payload: arr });
            }
        });
    };
};
