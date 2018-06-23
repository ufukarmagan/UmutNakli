import React, { Component } from 'react';
import { View, TextInput, Alert,Image, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Kaede } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import Toast from 'react-native-simple-toast';
import DropdownAlert from 'react-native-dropdownalert';
import { actEmailChanged, actPasswordChanged, actUserLogin } from '../actions';
//import action from '../actions';
import { Button, CardSection, Card, Header, FacebookButton } from '../ortak';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

class LoginForm extends Component {
   //state = { kullaniciadi: '', sifre: ''};

   
  onError = error => {
    if (error) {
      this.dropdown.alertWithType('error', 'Error', error);
    }
  };
  // ...
  onClose(data) {
    // data = {type, title, message, action}
    // action means how the alert was closed.
    // returns: automatic, programmatic, tap, pan or cancel
  }
   OnClickLogin() {
    console.log('LoginFormjsteki OnClickLogin fonksiyonu tamamlandı'); 
    const { prUsername, prPassword } = this.props;
    this.props.actUserLogin({prUsername, prPassword });
   }
  /*
   OnClickRegister() {
    console.log('LoginFormjsteki OnClickRegister fonksiyonu tamamlandı');
    const { kullaniciadi, sifre } = this.state;
    firebase.auth().createUserWithEmailAndPassword(kullaniciadi, sifre)
    .then(this.KayitBasarili.bind(this))
    .catch(() => console.log('Lütfen geçerli bir e-mail adresi giriniz.'));
   }*/

   KayitBasarili() {
    console.log('LoginFormjsteki KayitBasarili fonksiyonu calisti');
  }

  renderGiris() {
      console.log('LoginFormjsteki renderGiris fonksiyonu calisti');
      return <Button onPress={this.OnClickLogin.bind(this)}> GİRİŞ YAP </Button>;
  }

  goToRegister() {
    Actions.goRegister();
  }

  renderKayit() {
    console.log('LoginFormjsteki renderKayit fonksiyonu calisti');
      return <Button onPress={() => this.goToRegister()}> KAYIT OL </Button>;
  }

    render() {
      console.log('loginForm componenti render oldu');
      console.log('kullaniciadi: ' + this.props.prUsername);
      console.log('sifre: ' + this.props.prPassword);

        const { inputStyle } = styles;
        return (
        <View style={{ marginTop: 50, backgroundColor: 'transparent', flex:1}}>
          <View style={{ 
            backgroundColor:'transparent', flex: 1 }}>
          <Image 
            source={require('../images/background.png')} 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
           />
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  //justifyContent: 'center',
                }}
              >
                <Image source={require('../images/logomuz2.png')} style={{ marginTop:50, marginLeft:150, width: 120, height: 120 }} />
                <CardSection>
                
                
                    <Hideo
                      iconClass={FontAwesomeIcon}
                      iconName={'envelope'}
                      iconColor={'white'}
                      // this is used as backgroundColor of icon container view.
                      iconBackgroundColor={'purple'}
                      inputStyle={{ color: 'white' }}
                      value={this.props.prUsername}
                      onChangeText={degisentext => this.props.actEmailChanged({ stUsername: degisentext })} 
                    />
              </CardSection>
              <CardSection>
                    <Hideo
                      iconClass={FontAwesomeIcon}
                      iconName={'key'}
                      iconColor={'white'}
                      label='Şifre'
                      value={this.props.prPassword}
                      onChangeText={degisentext => this.props.actPasswordChanged({ stPassword: degisentext })}
                      // this is used as backgroundColor of icon container view.
                      iconBackgroundColor={'purple'}
                      inputStyle={{ color: 'white' }}
                    />
              </CardSection>
              <CardSection>
                {this.renderGiris()}
                {this.renderKayit()}
              </CardSection>
              <CardSection>
                <View style={{justifyContent:'center', flex:1}} >
                  <Text style={{ alignSelf: 'center', fontSize: 18, color: 'white' }}> VEYA </Text>
                </View>
              </CardSection>
              <CardSection>
                <FacebookButton onPress={() => Toast.show('Facebook ile giriş yazmadın ki',Toast.SHORT)} > 
                                          FACEBOOK ILE GİRİŞ YAP </FacebookButton>
              </CardSection>
            </View>
          </View>
        </View>
        );
    }
}

const styles = {
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor:'blue',
    borderWidth: 0,
    color: '#ffffff',
    borderColor: 'transparent',
  },
};
/** Reducer'dan gelen state'leri component'imizde propsolarak kullanabilmemiz
 * sağlıyor.
 */
const mapStateToProps = ({ authenticationResponse }) => {
   const { username, password } = authenticationResponse;

   let prUsername = username;
   let prPassword = password;

   //prUsername = 'ufukarmaganozgur@gmail.com';
   //prPassword = 'ufuk123'; 
   
   //console.log('mapstatetoprops kullaniciadi :' + prUsername);
   //console.log('mapstatetoprops sifre ' + prPassword);
   return { prUsername, prPassword };
};

export default connect(mapStateToProps, { actEmailChanged, actPasswordChanged, actUserLogin })(LoginForm);
