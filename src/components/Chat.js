import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from 'firebase';
import Backend from './Backend';

class Chat extends React.Component {

  state = {
    messages: [],
    username: '',
  };

  componentWillMount() {
    
    
    const { currentUser } = firebase.auth();
    firebase.database().ref('/kullanicilar/' + currentUser.uid + '/name')
    .once('value',(snapshot) => {
      console.log("bu mesajı gönderecek adamın snapshotu");
      console.log(snapshot.val());
      this.setState({ username: snapshot.val() });
    });


    /*.then(function(snapshot) {
      console.log("bu mesajı gönderecek adamın snapshotu");
      console.log(snapshot.val());
      this.username = snapshot.val();
    });*/
      
      console.log("burası chat componentwillmount");
      console.log(this.props.user);
      Backend.login(this.props.user);
      //console.log(this.props.mail);
      //console.log(this.props.sifre);
      //Backend.login(this.props.mail,this.props.sifre);
  }

  render() {
      console.log("Burası chat render");
      console.log(this.state.messages);
      console.log("username stateinin ici componentWillMount ");
      console.log(this.state.username);
    return (
      
     <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          //send message to backend
          Backend.sendMessages(message); 
        }}
        user={{
          _id: Backend.getUid(),
          name: this.state.username,
        }}
      />
      

    );
}

componentDidMount() {
  console.log("burası componentdidmount");
    Backend.loadMessages((message) => {
      console.log("backend.loadmessage kısmının icerisi:");
      console.log(message)
        this.setState((previousState) => {
            return{
                messages: GiftedChat.append(previousState.messages, message),
            };
        });
    });
} 

componentWillUnmount() {
  console.log("burası componentwillunmount");
    Backend.closeChat();
}

}

Chat.defaultProps = {
   name:'a@b.com',
   sifre:'123'
};

export default Chat;