import React, { Component } from 'react';
import { View, TextInput, Alert,Image, Text, Dimensions, Picker } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { actEmailChanged, 
  actRegisterAgeChanged,
  actRegisterUsernameChanged,
  actRegisterProvinceChanged,
  actRegisterGenderChanged,
  actPasswordChanged, 
  actUserLogin } from '../actions';
//import action from '../actions';

import { Button, CardSection, Card, Header, FacebookButton } from '../ortak';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

class RegisterPersonalInfoForm extends Component {
   //state = { kullaniciadi: '', sifre: ''};
   //  state = { gender: '' };
   OnClickLogin() {
    console.log('LoginFormjsteki OnClickLogin fonksiyonu tamamlandı'); 
    const { prUsername, prPassword } = this.props;
    this.props.actUserLogin({prUsername, prPassword });
   }

   /*OnClickRegister() {
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
  goToDisaseInfo() {
    Actions.goDisaseInfo();
  }
  renderDevam() {
    console.log('LoginFormjsteki renderKayit fonksiyonu calisti');
      return <Button onPress={() => this.goToDisaseInfo()}> DEVAM ET </Button>;
  }

    render() {
      console.log('loginForm componenti render oldu');
      console.log('kullaniciadi: ' + this.props.prUsername);
      console.log('sifre: ' + this.props.prPassword);

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
                placeholder="Ad ve Soyad"
                placeholderTextColor='white'
                style={inputStyle}
                value={this.props.prUsername}
                underlineColorAndroid='white'
                onChangeText={degisentext => this.props.actRegisterUsernameChanged({ stUsername: degisentext })}
                />
              </CardSection>
              <CardSection>
                <TextInput
                  placeholder="Yaş"
                  placeholderTextColor='white'
                  style={inputStyle}
                  value={this.props.prAge}
                  underlineColorAndroid='white'
                  onChangeText={degisentext => this.props.actRegisterAgeChanged({ stAge: degisentext })}
                />
              </CardSection>
              <CardSection>
                <TextInput
                  placeholder="Şehir"
                  placeholderTextColor="white"
                  style={inputStyle}
                  value={this.props.prProvince}
                  underlineColorAndroid='white'
                  onChangeText={degisentext => this.props.actRegisterProvinceChanged({ stProvince: degisentext })}
                />
              </CardSection>
              <CardSection>
              <Picker
                style={styles.pickerStyle}
                selectedValue={this.props.prGender}
                onValueChange={(degisentext) => this.props.actRegisterGenderChanged({ stGender: degisentext })}>
                <Picker.Item label="Cinsiyet" value="" />
                <Picker.Item label="Erkek" value="Erkek" />
                <Picker.Item label="Kadın" value="Kadın" />
              </Picker>
              </CardSection>
              <CardSection>
                {this.renderDevam()}
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
/** Reducer'dan gelen state'leri component'imizde props olarak kullanabilmemiz
 * sağlıyor.
 */
const mapStateToProps = ({ registerResponse }) => {
   const { username, age, province, gender } = registerResponse;

   const prUsername = username;
   const prAge = age;
   const prProvince = province;
   const prGender = gender;
   /*
   prUsername = '';
   prPassword = '';*/
   
   console.log('mapstatetoprops kullaniciadi :' + prUsername);
   console.log('mapstatetoprops sifre ' + prAge);
   return { prUsername, prAge, prProvince, prGender };
};

export default connect(mapStateToProps, { actEmailChanged, 
  actRegisterAgeChanged,
  actPasswordChanged, 
  actRegisterUsernameChanged,
  actRegisterGenderChanged,
  actRegisterProvinceChanged,
  actUserLogin })(RegisterPersonalInfoForm);
