import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ContentFriend from './ContentFriend';
import ContentFriendStory from './ContentFriendStory';
import PostListForm from './PostListForm';
 
class ProfileFriends extends Component {

    constructor(props) {
        super(props);
        this.state = { postlarigetir: 'hayir' , durum: this.props.disaseInfo.profileType, 
                selectedInfo: false, selectedPost: false, selectedStory: false
            };
        
    
        // Toggle the state every second
        /*setInterval(() => {
          this.setState({ showText: !this.state.durum });
        }, 1000);*/
      }

      goPosts() {
        this.setState({ postlarigetir: 'evet', selectedInfo: false, selectedPost: true, selectedStory: false });
        console.log('Userin postları yuklendi');
      }

      goAbout() {
        this.setState({ postlarigetir: 'hayir', selectedInfo: true, selectedPost: false, selectedStory: false });
        console.log('Userin hakkindasi yuklendi');
      }

      goStory() {
        this.setState({ postlarigetir: 'story', selectedInfo: false, selectedPost: false, selectedStory: true });
        console.log('Userin hakkindasi yuklendi');
      }

      renderRow() {
        console.log('Profile Nonfreindeseki renderRow fonksiyonu calisti');
        if (this.state.postlarigetir === 'hayir') {
            //return <Text> Hakkinda sayfasi </Text>;
            return <ContentFriend user={this.props.user} userDisase={this.props.disaseInfo} />;
        }                
        if (this.state.postlarigetir === 'evet') {
            //return <Text> Postlar sayfasi </Text>;
            return <PostListForm user={this.props.user} />;
        }
        if(this.state.postlarigetir === 'story') {
            return <ContentFriendStory user={this.props.user} userDisase={this.props.disaseInfo} />;
        }
      }

       render() {
        //console.log('profilefriends post list form render oldu');
        //console.log(this.props.postArray);
        console.log("ProfileFriends e gelen user propsu ");
        console.log(this.props.user);
        console.log("ProfileFriends e gelen disaseInfo propsu ");
        console.log(this.props.disaseInfo);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subContainerStyle} >
                    <Image source={{uri: this.props.user.url}} style={{ width: 100, height: 100 }} />
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={styles.profileNameStyle} >{this.props.user.name}</Text>
                        <Text style = {{ color:'purple' , fontSize:25 }} > {this.state.durum} </Text>
                        <Button style={{ marginLeft:10, marginRight:10 }} title="KONUŞMA BAŞLAT"
                        onPress={ () => Actions.chat({ user: this.props.user }) }>
                        </Button>
                    </View>
                </View>
                
                <View style={styles.subContainerStyle}>
                        <TouchableOpacity
                          style={{borderColor: this.state.selectedInfo ? '#03AFEE' : '#0281A4',
                          height: 35, borderBottomWidth: this.state.selectedInfo ? 4 : 3 , width: 130, alignItems: 'center'}} 
                         onPress={() => this.goAbout()}> 
                          <Text style={{ flex:2 }}>HAKKINDA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{borderColor: this.state.selectedPost ? '#03AFEE' : '#0281A4',
                          height: 35, borderBottomWidth: this.state.selectedPost ? 4 : 3 , width: 130, alignItems: 'center'}} 
                         onPress={() => this.goPosts()}> 
                          <Text style={{ flex:2 }}>POSTLAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         style={{borderColor: this.state.selectedStory ? '#03AFEE' : '#0281A4',
                         height: 35, borderBottomWidth: this.state.selectedStory ? 4 : 3 , width: 130, alignItems: 'center'}} 
                        onPress={() => this.goStory()}> 
                          <Text style={{ flex:2 }}> SERÜVEN </Text>
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
            backgroundColor: 'white'
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

export default ProfileFriends;
