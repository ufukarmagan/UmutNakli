import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { POST_MARK,
         DM_POST_CHANGED, 
         POST_CHANGED, 
         POST_CREATE, 
         POST_LOAD, 
         OTHER_POST_LOAD } from './types';


export const actPostChanged = ({ stPost }) => {
    console.log('actPostChanged metodu calıştı.----' + stPost);
    return (dispatch) => {
      dispatch({
          type: POST_CHANGED,
          payload: stPost 
      });
    };
};

export const actDMPostChanged = ({ DMstPost }) => {
    console.log('actDMPostChanged metodu calıştı.----' + DMstPost);
    return (dispatch) => {
      dispatch({
          type: DM_POST_CHANGED,
          payload: DMstPost 
      });
    };
};

export const actPostCreate = ( { prPost, res } ) => {
    console.log('actPostCreate metodu calıştı.');
    console.log( { prPost } );
    
    console.log('actiona gelen res');
    console.log(res);
    
    const { currentUser } = firebase.auth();

    console.log('current user');
    console.log(currentUser.uid);

      //push fonksiyonu ikinci parametre almadığı için önce push ettiğimiz postun referansı alınıyor.
      const ref = firebase.database().ref('/postlar').push();
      console.log(ref.key);
      
      //ardndan bu referansın id'si kullanılarak o nodeun altına post ile ilgili bilgiler giriliyor.
      //aslında push ile bir prPost eklemiştik ama override oldu o. yani push(prPost) iken de üzerine 
      //yazdı sıkıntı olmadı. ama yine de ne olur ne olmaz pushun içini boş bırakalım.
      firebase.database().ref('postlar/' + ref.key).set({
        owner: currentUser.uid,
        post: prPost 
      });


    return (dispatch) => {
         firebase.database().ref(`/kullanicilar/${currentUser.uid}/postlar`)
            .push({ prPost, res })
                .then(() => {
                    dispatch({ type: POST_CREATE });
                    //Actions.pop();
                });
    }
};

/*export const actDMPostCreate = ({ prPost }) => {
    console.log('actDMPostCreate metodu calıştı.');
    console.log({ prPost });
      
    getResult();
};*/

/*async function getResult() {
    try {
      const response = await axios.post('/polarity', {
                                                      id: 'Fred',
                                                      text: 'Ne kadar guzel bir gun hayat cok guzel',
                                                      userName: 'hebelehubele' 
                                                     });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }*/

/*export const actTextInputPress = ({ stPressed }) => {
    console.log('TextInputa basılınca calisan action calisti');
     return (dispatch) => {
        dispatch({
            type: TEXTINPUTPRESSED,
            payload: stPressed
        });
     };
};*/

export const actPostLoad = ({ user }) => {
    console.log('actPostLoad metodu çalıştı, gelen user');
    console.log(user);
    const { currentUser } = firebase.auth();
    let uid;
    if (user.uid === undefined) {
        if (user.friendsUid === undefined){
            uid = currentUser.uid;
        }
        else {
            uid = user.friendsUid;
        } 
    }
    else {
        uid = user.uid;
    }
    
    console.log('firebase.auth sonucu :' + currentUser);
    return (dispatch) => {
        firebase.database().ref('/kullanicilar/' + uid + '/postlar')
            .on('value', snapshot => {
                if (snapshot.val() === null)
                {
                    dispatch({ type: POST_LOAD, payload: {} });
                }
                else {
                    dispatch({ type: POST_LOAD, payload: snapshot.val() });
                }
               
            });
    };
};

//const arr = [];

export const actOtherPostsLoad = () => {
    console.log('actOtherPostLoad metodu çalıştı-0');
    let info;
    const arr = [];
    let postArr = [];
    console.log('calist-1');
    const prms = firebase.database().ref('postlar').once('value');
    console.log('calist-1.1');
    return (dispatch) => {
        const prms_then =  prms.then( snapshot => {
            console.log('calist-2');
            console.log(snapshot.val());
            console.log('calist-3');
            info = snapshot.val();
            console.log(info);
            console.log('calist-4');
            postArr = _.map(info, ({ post, owner }, uid) => {
                 return { post, owner, uid };
                });
            console.log(postArr);
            console.log('calisti-5');
            const nmbr = snapshot.numChildren();
            let count = 0;
            console.log(nmbr);
            snapshot.forEach(snap => {
                console.log('calisti-5.1');
                const d =  firebase.database().ref('kullanicilar/' + snap.val().owner).once('value')
                .then((data) => {
                    console.log("son adım");
                    console.log(data.key);
                    console.log(data.val());
                
                    let elements = {};
                    elements.user = data.val().name;
                    elements.uri = data.val().profile.url;
                    //elements.post = postArr[count].post;
                    elements.post = snap.val().post;
                    elements.userid = data.key;
                    elements.disase = data.val().disaseInfo;
                    elements.province = data.val().province;
                    elements.age = data.val().age;
                    console.log(postArr[count].post);
                    arr.push(elements);
                    count++;
                    if (nmbr == count) {
                        console.log("son adım 2");
                        dispatch({ type: POST_LOAD, payload: arr });
                    }
                });
                //console.log('calisti-5.2');
                //return d;
                });
        });
    }
};