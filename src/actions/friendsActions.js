import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { FRIENDS_LOAD, SADS_LOAD } from './types';
import ContentMyProfileStory from '../components/ContentMyProfileStory';

export const actFriendsLoad = () => {
    console.log("actFriendsLoad calisti");
    const { currentUser } = firebase.auth();
    const database = firebase.database();
    const arr = [];
    return (dispatch) => {
        database.ref('kullanicilar/' + currentUser.uid + '/friends')
    .on('value', snapshot => {
        console.log("on calisti");
        if (snapshot.val() === null)
        {   
            console.log("if calisti");
            dispatch({ type: FRIENDS_LOAD, payload: {} });
        }
        else {
            //Buraya sonradan bak.
            snapshot.forEach((childSnapshot) => {
                const gelen = childSnapshot.val();
                console.log("friends uid");
                console.log(gelen.friendsUid);
                const database2 = firebase.database();
                database2.ref('kullanicilar/' + gelen.friendsUid)
                .on('value', (snapshot2) => {
                console.log("FRIENDS LOAD gelen user:");
                console.log(snapshot2.val());
                const element = {};
                element.name = snapshot2.val().name;
                element.age = snapshot2.val().age;
                element.mystory = snapshot2.val().mystory;
                element.province = snapshot2.val().province;
                element.disase = snapshot2.val().disaseInfo;
                element.friendsUid = gelen.friendsUid;
                element.url = snapshot2.val().profile.url;
                //console.log(element.name);
                //console.log(element.friendsUid);

                arr.push(element);
                //console.log(arr);
                //dispatch({ type: FRIENDS_LOAD, payload: arr });
            });
        });
               console.log(arr);
               dispatch({ type: FRIENDS_LOAD, payload: arr });
    }
});
        };
};

/*

export const actSadsLoad = () => {
    console.log("actSadsLoad calisti");
    const arr = [];
    let durum = '';
    return (dispatch) => { 
    const database = firebase.database();
    //const myRef = database.ref('kullanicilar/');
    const myRef = firebase.database().ref();
    myRef.child('kullanicilar/').once('value', snapshot => {
        snapshot.forEach((childSnapshot) => {
            //const gelen = childSnapshot.val();
            let olumlu = 0;
            let olumsuz = 0;
            let notr = 0;
            console.log("actSadsLoad childSnapshottaki key, yani user id");
            console.log(childSnapshot.key);

            myRef.child('kullanicilar/' + childSnapshot.key + '/postlar/')
            .on('value', snapshot3 => {
                console.log('snapshot3 value');
                console.log(snapshot3.val());
                if (snapshot3.val() !== null)
                {
                    snapshot3.forEach(( childSnapshot3 ) => {
                          console.log('childsnapshot3 value');
                          console.log(childSnapshot3.val());
                          if (childSnapshot3.val().res === 'olumsuz')
                          {
                                olumsuz = olumsuz + 1 ;
                          }
                          else if(childSnapshot3.val().res === 'olumlu')
                          {
                                olumlu = olumlu + 1;
                          }
                          else{
                                notr = notr + 1;
                          }
                    });
                }
            });

            if (olumsuz / (olumlu + olumsuz) > 0.6)
            {
                //firebase.database().ref('kullanicilar/' + childSnapshot.key).push({
                //    durum: 'mutsuz'
                //  });
                  console.log('durumu mutsuz');
                  durum = 'mutsuz';
            }
            else
            {
                //firebase.database().ref('kullanicilar/' + childSnapshot.key).push({
                //    durum: 'mutlu'
                //  });
                  console.log('durumu mutlu');
                  durum = 'mutlu';
            }

            if (durum === 'mutsuz')
            {
                const element = {};
                element.name = childSnapshot.val().name;
                element.age = childSnapshot.val().age;
                element.province = childSnapshot.val().province;
                element.mystory = childSnapshot.val().mystory;
                element.disase = childSnapshot.val().disaseInfo;
                element.url = childSnapshot.val().profile.url;
                element.durum = durum;
                console.log('element->');
                console.log(element);
                //console.log(element.name);
                //console.log(element.friendsUid);

                arr.push(element);
            }

        });
    });
        
               console.log(arr);
               dispatch({ type: SADS_LOAD, payload: arr });

    };
};    */

export const actSadsLoad = () => {
    console.log("ACTSADSLOAD calisti");
    let info;
    let arr = [];
    let arr2 = [];
    let durum = '';
    const prms = firebase.database().ref('kullanicilar').once('value');
    return (dispatch) => {
        const prms_then =  prms.then( snapshot => {
            const nmbr = snapshot.numChildren();
            console.log("ACTSADSLOAD snapshot:");
            console.log(snapshot.val());
            info = snapshot.val();
            console.log("ACTSADSLOAD gelen snapshot sayisi:");
            console.log(nmbr);

            /*snapshot.forEach((childSnapshot) => {
                console.log('childsnapshot');
                  //childSnapshot.val().postlar;
                  arr2[] = _.map(childSnapshot.val().postlar, ({ email, name, profile, disaseInfo, postlar}, uid) => {
                    return { email, name, uid, profile, disaseInfo, postlar};
                   });

            });*/

            arr = _.map(info, ({ email, name, profile, disaseInfo, postlar}, uid) => {
                return { email, name, uid, profile, disaseInfo, postlar};
               });
               let posarr;
               for(let i = 0; i<nmbr; i++){
                  posarr = _.map(arr[i].postlar, ({prPost, res}) =>{
                      return {prPost, res};
                  }); 
                  console.log("*******");
                  let olumlu = 0;
                  let olumsuz = 0;
                  for(let j = 0; j < posarr.length; j++){
                    console.log(posarr[j].res);
                    if(posarr[j].res==='olumlu'){
                        olumlu++;
                    }
                    else{
                        olumsuz++;
                    }
                  }
                  if((olumsuz/(olumlu+olumsuz))>0.6){
                    arr2.push(arr[i]);
                }
               }
            console.log(arr2);
            dispatch({ type: SADS_LOAD, payload: arr2 });
        });
    };
};    