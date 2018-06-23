import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { PROFILE_LOAD } from './types';

export const actProfileLoad = () => {
    console.log("actProfileLoad calisti");
    const { currentUser } = firebase.auth();
    const database = firebase.database();
    const uid = { uid: currentUser.uid };
    //console.log(uid);
    return (dispatch) => {
        database.ref("kullanicilar/" + currentUser.uid)
        .on("value", (snapshot) => {
            console.log("gelen user profile");
            console.log(snapshot.val());
            dispatch({ type: PROFILE_LOAD, payload: snapshot.val() });
        });
            //dispatch({ type: PROFILE_LOAD, payload: uid });
    };
};
