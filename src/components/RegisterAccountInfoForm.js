import React, { Component } from 'react';
import { View, TextInput, Alert,Image, Text, Dimensions, Picker } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { actRegisterEmailChanged, 
  actRegisterPasswordChanged, 
  actRegisterUsernameChanged,
  actRegisterProvinceChanged,
  actUserRegister } from '../actions';
//import action from '../actions';

import { Button, CardSection, Card, Header, FacebookButton } from '../ortak';


const window = Dimensions.get('window');

class RegisterAccountInfoForm extends Component {
   OnClickRegister() {
    console.log('RegisterFormdaki OnClickRegister fonksiyonu tamamlandı');
    //const { kullaniciadi, sifre } = this.state;
    const { prEmail, prPassword, prUsername, prAge,
       prProvince, prGender, prProfileType, prDisaseType, prDisaseStage, prCureNumber, prHospital } = this.props;
    this.props.actUserRegister({ prEmail, 
      prPassword, 
      prUsername, 
      prAge,
      prProvince, 
      prGender, 
      prProfileType, 
      prDisaseType,
      prDisaseStage,
      prCureNumber,
      prHospital });
   }
    renderDevam() {
      console.log('LoginFormjsteki renderKayit fonksiyonu calisti');
        return <Button onPress={() => Actions.login_screen()}> TAMAMLA </Button>;
    }
    render() {
      console.log('Kayittaki kullaniciadi: ' + this.props.prEmail);
      console.log('Kayittaki sifre: ' + this.props.prPassword);

        const { inputStyle } = styles;

        return (
        <View style={{ marginTop: 50, backgroundColor: 'transparent', flex: 1 }}>
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
                
              <CardSection>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="white"
                  style={inputStyle}
                  value={this.props.prEmail}
                  underlineColorAndroid='white'
                  onChangeText={degisentext => this.props.actRegisterEmailChanged({ stEmail: degisentext })}
                />
              </CardSection>
              <CardSection>
                <TextInput
                  secureTextEntry
                  placeholder="Şifre"
                  placeholderTextColor="white"
                  style={inputStyle}
                  value={this.props.prPassword}
                  underlineColorAndroid='white'
                  onChangeText={degisentext => this.props.actRegisterPasswordChanged({ stPassword: degisentext })}
                />
              </CardSection>
              <CardSection>
                <TextInput
                  secureTextEntry
                  placeholder="Şifre Doğrulayın"
                  placeholderTextColor="white"
                  style={inputStyle}
                  //value={this.props.prPassword}
                  underlineColorAndroid='white'
                  //onChangeText={degisentext => this.props.actPasswordChanged({ stPassword: degisentext })}
                />
              </CardSection>
              <CardSection>
                <Button onPress={() => this.OnClickRegister()}> KAYDOL </Button>
                
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
    borderWidth: 0,
    color: '#ffffff',
    borderColor: 'transparent',
  },
  pickerStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    //fontSize: 18,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    color: '#ffffff',
    borderColor: 'white',
  },
};
/** Reducer'dan gelen state'leri component'imizde propsolarak kullanabilmemiz
 * sağlıyor.
 */
const mapStateToProps = ({ registerResponse }) => {
   const { email, password, username, age, province,
     gender, profileType, disaseType, disaseStage, cureNumber, hospital } = registerResponse;

   const prEmail = email;
   const prPassword = password;
   const prUsername = username;
   const prAge = age;
   const prProvince = province;
   const prGender = gender;
   const prProfileType = profileType;
   const prDisaseType = disaseType;
   const prDisaseStage = disaseStage;
   const prCureNumber = cureNumber;
   const prHospital = hospital;
   
   //prUsername = '';
   //prPassword = '';
   
   console.log('mapstatetoprops kayit kullaniciadi :' + prEmail);
   console.log('mapstatetoprops kayit sifre ' + prPassword);
   return { prEmail, 
    prPassword, 
    prUsername, 
    prAge, 
    prProvince, 
    prGender, 
    prProfileType, 
    prDisaseType, 
    prDisaseStage,
    prCureNumber,
    prHospital
    };
};

export default connect(mapStateToProps, { actRegisterEmailChanged, 
  actRegisterProvinceChanged,
  actRegisterPasswordChanged, 
  actRegisterUsernameChanged, 
  actUserRegister })(RegisterAccountInfoForm);
