import React, { Component } from 'react';
import { View, TextInput, Alert,Image, Text, Dimensions, Picker } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { actPasswordChanged, 
        actRegisterProfileTypeChanged,
        actRegisterDisaseStageChanged,
        actRegisterDisaseTypeChanged,
        actRegisterNumberCureChanged,
        actRegisterHospitalChanged,
        actUserLogin } from '../actions';
//import action from '../actions';

import { Button, CardSection, Card, Header, FacebookButton } from '../ortak';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

class RegisterDisaseInfoForm extends Component {
   //state = { kullaniciadi: '', sifre: ''};
     state = { prfileType: '', disaseType: '', disaseStage: '' };
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
  goToAccountInfo() {
    Actions.goAccountInfo();
  }
  renderDevam() {
    console.log('LoginFormjsteki renderKayit fonksiyonu calisti');
      return <Button onPress={() => this.goToAccountInfo()}> DEVAM ET </Button>;
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
                <CardSection>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.props.prProfileType}
                  onValueChange={(degisentext) => this.props.actRegisterProfileTypeChanged({ stProfileType: degisentext })}>
                  <Picker.Item label="Profil Tipi" value="" />
                  <Picker.Item label="Savasci" value="Savasci" />
                  <Picker.Item label="Kahraman" value="Kahraman" />
                </Picker>
                </CardSection>
                <CardSection>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.props.prDisaseType}
                  onValueChange={(degisentext) => this.props.actRegisterDisaseTypeChanged({ stDisaseType: degisentext })}>
                  <Picker.Item label="Hastalık Türü" value="" />
                  <Picker.Item label="Losemi" value="Losemi" />
                  <Picker.Item label="Akciğer Kanseri" value="Akciğer Kanseri" />
                  <Picker.Item label="Kemik Kanseri" value="Kemik Kanseri" />
                  <Picker.Item label="Mide Kanseri" value="Mide Kanseri" />
                  <Picker.Item label="Lenfoma" value="Lenfoma" />
                  <Picker.Item label="Cilt Kanseri" value="Cilt Kanseri" />
                  <Picker.Item label="Göğüs Kanseri" value="Göğüs Kanseri" />
                </Picker>
                </CardSection>
                <CardSection>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.props.prDisaseStage}
                  onValueChange={(degisentext) => this.props.actRegisterDisaseStageChanged({ stDisaseStage: degisentext })}>
                  <Picker.Item label="Hastalık Evresi" value="" />
                  <Picker.Item label="1A" value="1A" />
                  <Picker.Item label="1B" value="1B" />
                  <Picker.Item label="1C" value="1C" />
                  <Picker.Item label="2A" value="2A" />
                  <Picker.Item label="2B" value="2B" />
                  <Picker.Item label="2C" value="2C" />
                  <Picker.Item label="3A" value="3A" />
                  <Picker.Item label="3B" value="3B" />
                  <Picker.Item label="3C" value="3C" />
                </Picker>
                </CardSection>
              <CardSection>
                <TextInput
                  placeholder="Kemoterapi Kür Sayisi"
                  placeholderTextColor="white"
                  style={inputStyle}
                  value={this.props.prCureNumber}
                  underlineColorAndroid='white'
                  onChangeText={degisentext => this.props.actRegisterNumberCureChanged({ stCureNumber: degisentext })}
                />
              </CardSection>
              <CardSection>
                <TextInput
                  placeholder="Tedavi Görülen Hastane"
                  placeholderTextColor="white"
                  style={inputStyle}
                  value={this.props.prHospital}
                  underlineColorAndroid='white'
                  onChangeText={degisentext => this.props.actRegisterHospitalChanged({ stHospital: degisentext })}
                />
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
/** Reducer'dan gelen state'leri component'imizde propsolarak kullanabilmemiz
 * sağlıyor.
 */
const mapStateToProps = ({ registerResponse }) => {
   const { profileType, disaseType, disaseStage, cureNumber, hospital } = registerResponse;

   const prProfileType = profileType;
   const prDisaseType = disaseType;
   const prDisaseStage = disaseStage;
   const prCureNumber = cureNumber;
   const prHospital = hospital;
   
   return { prProfileType, prDisaseType, prDisaseStage, prCureNumber, prHospital };
};

export default connect(mapStateToProps, { actRegisterProfileTypeChanged, 
  actRegisterDisaseStageChanged,
  actRegisterDisaseTypeChanged,
  actRegisterNumberCureChanged,
  actRegisterHospitalChanged,
  actPasswordChanged, 
  actUserLogin })(RegisterDisaseInfoForm);
