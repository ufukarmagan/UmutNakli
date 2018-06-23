import firebase  from 'firebase';
import { Actions } from 'react-native-router-flux';
import { NONFRIENDS_LOAD, REQUEST_SUCCESS, REQUEST_FAILED } from './types';

export const actNonFriendsLoad = () => {
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    let hastalik = 'hebele';

    
    console.log('actNonFriendsLoad metodu çalıştı');
    /*database.ref('kullanicilar/'+ currentUser.uid + '/disaseInfo').once('value', snapshot => {
        if (snapshot != null) {
            console.log('kullanici hastalik bilgisi');
            console.log(snapshot.child("disaseType").val());
            hastalik = snapshot.child('disaseType').val();
        }
        else {
            hastalik = 'daha gelmedi';
        }
    });*/

    
    /*database.ref('kullanicilar').on('value', snapshot => {
        snapshot.forEach((childSnapshot) => {
            console.log('AHAAAAAAA VERİLER GELDİ LA');
            //console.log(childSnapshot.key);
            console.log(childSnapshot.val());
            const adaminismi = childSnapshot.val();
            console.log('ADAMIN İSMİ-->');
            console.log(adaminismi.name);
            console.log('-------------------------------');
        });
    })*/

    return (dispatch) => {
        //database.ref('turler')
        console.log("burda varmi");
        console.log(hastalik);
        /*database.ref(`kullanicilar`).orderByChild("disaseInfo/disaseType").equalTo(hastalik)
            .on('value', snapshot => {
                //console.log('AAA VERİLER GELDİ-------');
                //console.log(snapshot.val());
                //snapshot.forEach((childSnapshot) => {
                    //console.log(childSnapshot.key);
                    //console.log(childSnapshot.val());
                if (snapshot.val() === null)
                {
                    dispatch({ type: NONFRIENDS_LOAD, payload: {} });
                }
                else {
                    //snapshot.forEach(() => {
                        //const gelenuser = childSnapshot.val();
                        //console.log("childsnapshot");
                        //console.log(gelenuser);
                        console.log("snapshot");
                        console.log(snapshot.val());

                        dispatch({ type: NONFRIENDS_LOAD, payload: snapshot.val() });
                    //});
                }
            });*/
            const ref = firebase.database().ref();
            ref.child('kullanicilar/' + currentUser.uid + '/disaseInfo').once('value', snapshot =>{
                console.log('bak burasi');
                console.log(snapshot.val());
                const tur = snapshot.child("disaseType").val();
                ref.child('kullanicilar/').orderByChild('disaseInfo/disaseType').equalTo(tur)
                .on('value', snapshot2 => {
                    if (snapshot2.val() === null)
                {
                    dispatch({ type: NONFRIENDS_LOAD, payload: {} });
                }
                else {
                    //snapshot.forEach(() => {
                        //const gelenuser = childSnapshot.val();
                        //console.log("childsnapshot");
                        //console.log(gelenuser);
                        console.log("snapshot");
                        console.log(snapshot2.val());
                        if(snapshot2.val().uid != currentUser.uid){
                            dispatch({ type: NONFRIENDS_LOAD, payload: snapshot2.val() });
                        }
                        
                }
                });

            });

    };
};

export const actSendFriendshipRequest = (uid, name) => {
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    console.log("REQUEST ACTION CALISTI");
    return (dispatch) => {
        console.log(uid);
        console.log(name);
        database.ref('kullanicilar/' + currentUser.uid + '/friendshipRequest/' + uid).set({
            requesterName: name
        }).then(() => {
            dispatch({ type: REQUEST_SUCCESS });
        }).catch(() => {
            dispatch({ type: REQUEST_FAILED });
        });
        database.ref('kullanicilar/' + uid + '/incomingFriendshipRequest/' + currentUser.uid).set({
            requesterUid: currentUser.uid
        });
        //dispatch({ type: REQUEST_SUCCESS });
    };
};
