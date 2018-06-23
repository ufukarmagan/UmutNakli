import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { actProfileLoad, actFriendsLoad } from '../actions';
import ListItem from './ListItem';
import PostListForm from './PostListForm';
import ContentMyProfile from './ContentMyProfile';
import ContentMyProfilePhotos from './ContentMyProfilePhotos';
import ContentMyProfileStory from './ContentMyProfileStory';
import { CardSection, Button } from '../ortak/index';
 
class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = { postlarigetir: 'hayir', user: {}, profile: '', selectedInfo: false, selectedPost: false, 
        selectedStory: false, selectedPhoto: false };
    }

    componentWillMount() {
        console.log("Willl mount calıstı");
        const { currentUser } = firebase.auth();
        const database = firebase.database();

        database.ref("kullanicilar/" + currentUser.uid)
        .once("value", (snapshot) => {
            console.log("ProfileForm constructoruna gelen user snapshotu");
            console.log(snapshot.val());
            this.setState({ user: snapshot.val() });
        });
        this.getImages();
    }

    getImages() {
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        const data = [];
        database.ref('kullanicilar/' + currentUser.uid + '/profile').on('value', (snapshot) => {
            console.log("GET IMAGES methodu");
            console.log(snapshot.val());
            //snapshot.forEach((childsnapshot) => {
                //console.log(childsnapshot.val().url);
                //const element = {};
                //const key = childsnapshot.val().key;
                //element.key = childsnapshot.val().url;
                //data.push(element);
                //this.setState({ data: childsnapshot.val().url });
                console.log("GET IMAGES set state oldu mu");
                let img;
                if (snapshot.val() === null){
                    img = '';
                } else {
                    img = snapshot.val().url;
                }
                this.setState({ profile: img });
                console.log(this.state.profile);
            //});
        });
    }

      goPosts() {
        this.setState({ postlarigetir: 'evet', selectedInfo: false, selectedPost: true, selectedStory: false, selectedPhoto: false });
        console.log('Userin postları yuklendi');
      }

      goAbout() {
        this.setState({ postlarigetir: 'hayir', selectedInfo: true, selectedPost: false, selectedStory: false, selectedPhoto: false });
        console.log('Userin hakkindasi yuklendi');
      }

      goStory() {
        this.setState({ postlarigetir: 'story', selectedInfo: false, selectedPost: false, selectedStory: true, selectedPhoto: false });
        console.log('Userin storysi yuklendi');
      }

      goPhotos() {
        this.setState({ postlarigetir: 'photos', selectedInfo: false, selectedPost: false, selectedStory: false, selectedPhoto: true });
        console.log('Userin fotolari yuklendi');
      }

      renderRow() {
        console.log('Profile Nonfreindeseki renderRow fonksiyonu calisti');
        if (this.state.postlarigetir === 'hayir') {
            //return <Text> Hakkinda sayfasi </Text>;
            return <ContentMyProfile />;
        }                
        if (this.state.postlarigetir === 'evet') {
            //return <Text> Postlar sayfasi </Text>;
            return <PostListForm user={this.state.user} />;
        }
        
        if (this.state.postlarigetir === 'story') {
            return <ContentMyProfileStory />;
        }
        
        if (this.state.postlarigetir === 'photos') {
            return <ContentMyProfilePhotos user={this.props.user} userDisase={this.props.disaseInfo} />;
        } 
      }

    render() {
        console.log('PROFILE FORM render oldu');
        console.log(this.state.user);
        return (
            <ScrollView style={styles.container} >
                <View style={styles.subContainerStyle} >
                    <Image source={{ uri: this.state.profile }} style={{ width: 100, height: 100 }} />
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={styles.profileNameStyle}> {this.state.user.name} </Text>
                        <View>
                        <Text style={styles.profileNameStyle} >15 Gönderi</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.subContainerStyle} >
                        <TouchableOpacity
                          style={{borderColor: this.state.selectedInfo ? '#03AFEE' : '#0281A4',
                           height: 35, borderBottomWidth: this.state.selectedInfo ? 4 : 3 , width: 100, alignItems: 'center'}} 
                          onPress={() => this.goAbout()}> 
                          <Text style={{ flex:2 }}>BİLGİLERİM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{ height: 35, borderColor: this.state.selectedPost ? '#03AFEE' : '#0281A4',
                           width: 100, alignItems: 'center', borderBottomWidth: this.state.selectedPost ? 4 : 3 }} 
                          onPress={() => this.goPosts()}> 
                          <Text style={{ flex:2 }}>POSTLARIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{ borderColor: this.state.selectedStory ? '#03AFEE' : '#0281A4',
                          borderBottomWidth: this.state.selectedStory ? 4 : 3,
                           height: 35, width: 100, alignItems: 'center' }} 
                          onPress={() => this.goStory()}> 
                          <Text style={{ flex: 2}}> SERÜVENİM </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{ borderColor: this.state.selectedPhoto ? '#03AFEE' : '#0281A4', 
                          borderBottomWidth: this.state.selectedPhoto ? 4 : 3, height: 35, width: 100, alignItems: 'center' }} 
                          onPress={() => this.goPhotos()}> 
                          <Text style={{ flex:2 }}> FOTOĞRAFLAR </Text>
                        </TouchableOpacity>
                </View>
                <View>
                      {this.renderRow()}  
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
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
    }
);
 
 export default ProfileForm;
