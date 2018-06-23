import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { actProfileLoad } from '../actions';
import { Button } from '../ortak/index';

class ContentMyProfileStory extends Component {
    constructor(props) {
        super(props);
        this.state = { stStory: this.props.profile.mystory }; 
    }
    componentWillMount() {
        //this.props.actProfileLoad();
        console.log('ContentMyProfileStory wilmount calıstı');
        console.log(this.props.profile);
    }
 
    clicked() {
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        let story;
    
        if (this.state.stStory !== undefined) {
            story = this.state.stStory;
        } else {
            story = this.props.profile.story;
        }
        database.ref('kullanicilar/' + currentUser.uid).update({
            mystory: story
            }
        );
        Toast.show('Öykünüz başarıyla güncellendi',Toast.SHORT);
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize:40,  color:'blue' }} > KANSER SERÜVENİM </Text>
                <View>
                    <TextInput 
                     placeholder={this.props.profile.mystory}
                     value={this.state.stStory}
                     onChangeText={degisen => this.setState({stStory: degisen })} 
                     multiline={true}
                     numberOfLines={20}
                    />
                </View>
                <View>
                    <Button onPress={() => this.clicked(this.state)}> GÜNCELLE </Button>
                </View>
            </View>
        );
    }

}

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

export default connect(mapStateToProps, { actProfileLoad })(ContentMyProfileStory);
