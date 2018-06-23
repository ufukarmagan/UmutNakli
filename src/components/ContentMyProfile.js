import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Text, View, Image,TextInput } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Kaede } from 'react-native-textinput-effects';
import { actProfileLoad } from '../actions';
import { CardSection, Button } from '../ortak/index';

class ContentMyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = { stName: '' };
        this.state = { stEmail: '' };
        this.state = { stAge: '' };
        this.state = { stProvince: '' };
        this.state = { stDisaseType: '' };
        this.state = { stDisaseStage: '' };
        this.state = { stCureNumber: '' };   
        this.state = { stHospital: '' };
    }
    
    componentWillMount() {
        this.props.actProfileLoad();
        console.log("Willl mount calıstı");
        console.log(this.props.profile.name);
    }

    clicked() {
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        let name, 
        age, 
        province, 
        email,
        disaseType,
        disaseStage,
        cureNumber,
        hospital;
        if (this.state.stName !== undefined) {
            name = this.state.stName;
        } else {
            name = this.props.profile.name;
        }
        if (this.state.stAge !== undefined) {
            age = this.state.stAge;
        } else {
            age = this.props.profile.age;
        }
        if (this.state.stProvince !== undefined) {
            province = this.state.stProvince;
        } else {
            province = this.props.profile.province;
        }
        if (this.state.stEmail !== undefined) {
            email = this.state.stEmail;
        } else {
            email = this.props.profile.email;
        }
        if (this.state.stDisaseType !== undefined) {
            disaseType = this.state.stDisaseType;
        } else {
            disaseType = this.props.profile.disaseInfo.disaseType;
        }
        if (this.state.stDisaseStage !== undefined) {
            disaseStage = this.state.stDisaseStage;
        } else {
            disaseStage = this.props.profile.disaseInfo.disaseStage;
        }
        if (this.state.stCureNumber !== undefined) {
            cureNumber = this.state.stCureNumber;
        } else {
            cureNumber = this.props.profile.disaseInfo.cureNumber;
        }
        if (this.state.stHospital !== undefined) {
            hospital = this.state.stHospital;
        } else {
            hospital = this.props.profile.disaseInfo.hospital;
        }
        database.ref("kullanicilar/" + currentUser.uid).update({
            name: name,
            age: age,
            province: province,
            email: email,
            disaseInfo: {
                disaseType: disaseType,
                disaseStage: disaseStage,
                cureNumber: cureNumber,
                hospital: hospital,
                profileType: this.props.profile.disaseInfo.profileType 
            }
        });
        console.log("clicked");
            console.log(this.props.profile.name);
            console.log(this.state.stName);
    }

    render() {
        console.log("ContentFriend'in disase propsu");
        console.log(this.props.userDisase);

        return (
            <View>
                <View style={styles.subContainerStyle} >
                <Kaede
                    style={styles.inputStyle}
                    label={this.props.profile.name}
                    placeholder={this.props.profile.name} 
                    label='İsim'
                    onChangeText={degisen => this.setState({stName: degisen })}
                />
                </View>
                <View style={styles.subContainerStyle} >
                    <Kaede style={styles.inputStyle} 
                    placeholder={this.props.profile.email} 
                    label='Email'
                    onChangeText={degisen => this.setState({stEmail: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Kaede style={styles.inputStyle} 
                    placeholder={this.props.profile.age} 
                    label='Yaş'
                    onChangeText={degisen => this.setState({stAge: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Kaede style={styles.inputStyle} 
                    placeholder={this.props.profile.province} 
                    label='Şehir'
                    onChangeText={degisen => this.setState({stProvince: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Kaede style={styles.inputStyle}
                     placeholder={this.props.disase.disaseType} 
                     label='Hastalık Türü'
                     onChangeText={degisen => this.setState({stDisaseType: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Kaede style={styles.inputStyle} 
                    placeholder={this.props.disase.disaseStage}
                    label='Hastalık Aşaması'
                    onChangeText={degisen => this.setState({stDisaseStage: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Kaede style={styles.inputStyle} 
                    placeholder={this.props.disase.cureNumber} 
                    label='Kür'
                    onChangeText={degisen => this.setState({stCureNumber: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Kaede style={styles.inputStyle} 
                    placeholder={this.props.disase.hospital} 
                    label='Hastane'
                    onChangeText={degisen => this.setState({stHospital: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Button onPress={() => this.clicked(this.state)}> GÜNCELLE </Button>
                </View>
            </View>    
        );
    }

}

const styles =
    {
        profileNameStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            //fontFamily: 'Comic Sans MS',
        },
        profileStroyStyle: {
            fontSize: 15,
            //fontFamily: 'Comic Sans MS',
        },
        mystil: {
            backgroundColor: 'red'
        },
        container: {
            marginTop: 55,
            marginBottom: 55,
            flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            backgroundColor: '#f0f5f5'
        },
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        },
        subContainerStyle: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
      },
      inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
      },
    };

    const mapStateToProps = ({ profileResponse }) => {
        const profile = profileResponse;
        console.log("PROFILE FORM MAPSTATETOPROPS profileResponse");
        console.log(profile);
        console.log(profileResponse);
        let disase;
        if (profileResponse.disaseInfo === undefined){
             disase = {};
        } else {
             disase = profileResponse.disaseInfo;
        }
        return { profile, disase };
     };

export default connect(mapStateToProps, { actProfileLoad })(ContentMyProfile);
