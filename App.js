import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
//import KaydolForm from './src/components/KaydolForm';
//import { Header } from './src/ortak/Header';
import { Button } from './src/ortak/Button';
import { CardSection } from './src/ortak/CardSection';
/** Bizim hatamız router'ı {Router} şeklinde kullanmamız. */
import Router from './src/Router';

//reducersın statelere erişmesi için store oluşturduk.
//const store = createStore(reducers);
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(
      // cofigs
	  {
      apiKey: 'AIzaSyDqDiTlEIV_IV5SzMHXsXR3vpxNyRztiWc',
      authDomain: 'umut-nakli.firebaseapp.com',
      databaseURL: 'https://umut-nakli.firebaseio.com',
      projectId: 'umut-nakli',
      storageBucket: 'umut-nakli.appspot.com',
      messagingSenderId: '15474182958'
      }
    );

     firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.setState({ loggedIn: true });
       } else {
         this.setState({ loggedIn: false });
       }
     });
  }

  cikisYap() {
      firebase.auth().signOut();
  }
   /*
  renderIcerik() {
    console.log('render icerik');
      if (this.state.loggedIn) {
        console.log('if bir');
      return (
        <CardSection>
        <Button onPress={this.cikisYap.bind(this)}> ÇIKIŞ YAP </Button>
        </CardSection>
        );
      } else if (!this.state.loggedIn) {
        console.log('if iki');
        return <LoginForm />;
      } else {
        console.log('if uc');
        return <LoginForm />;
      }
  }
  */
  render() {
    //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.log('render appjs');
  return (
    <Provider store={store}>
          <Router />
    </Provider>   
  );
  }
} 

export default App;
