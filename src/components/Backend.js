import firebase from 'firebase';

class Backend{
    uid = '';
    messageRef = null;
    messageGoTo = '';
    

    constructor() {
        
        /*firebase.initializeApp({
                apiKey: "AIzaSyBYBjLAVXpJPBp9Ozy5jF_DYs5vVHyxx5c",
                authDomain: "deneme-de9a3.firebaseapp.com",
                databaseURL: "https://deneme-de9a3.firebaseio.com",
                projectId: "deneme-de9a3",
                storageBucket: "deneme-de9a3.appspot.com",
                messagingSenderId: "581727224976"
        });*/
        /*firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              this.setUid(user.uid);
          } else {
              firebase.auth().signInAnonymously().catch((error) => {
                  alert(error.message);
              });
            }
          });*/
    }
    
    login(user) {

            /*firebase.auth().signInWithEmailAndPassword(mail,'123456')
            .then((user)=> this.setUid(user.uid))
            .catch((error) => {
                alert(error.message);
            });*/
            const {currentUser} = firebase.auth();
            this.setUid(currentUser.uid);
            this.messageGoTo = user.friendsUid;
    }

    setUid(value) {
        this.uid = value;
    }

    getUid(value) {
        const {currentUser} = firebase.auth();
        console.log("getUid nin ici");
        console.log(currentUser.uid);
        return currentUser.uid;
        //return this.uid;
    }

    //retrieve the messages from backend
    loadMessages(callback){
        const {currentUser} = firebase.auth();
        console.log("benim uid");
        console.log(currentUser.uid);

        this.messageRef = firebase.database()
        .ref('kullanicilar/' + currentUser.uid + '/friends/' + this.messageGoTo + '/messages');
        this.messageRef.off();

        this.messageRef2 = firebase.database()
        .ref('kullanicilar/' + this.messageGoTo + '/friends/' + currentUser.uid + '/messages');
        this.messageRef2.off();
        
        const onReceive = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    _id: message.user._id,
                    name: message.user.name,
                },
            });
        };
        this.messageRef.limitToLast(20).on('child_added',onReceive);
        //this.messageRef2.limitToLast(20).on('child_added',onReceive);
    }

    //send messages to the backend
    sendMessages(message){
        for(let i=0; i<message.length; i++){
            this.messageRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
            });
            this.messageRef2.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
            });
        }
    }

    //close the connection to the backend
    closeChat(){
        if(this.messageRef){
            this.messageRef.off();
        }
        if(this.messageRef2){
            this.messageRef2.off();
        }
    }
}

export default new Backend();