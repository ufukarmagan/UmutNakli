import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../ortak';

class ListItemSad extends Component {

    constructor(props) {
        super(props);
        console.log("cons");
        console.log(props);
        let disase;
        if (this.props.disaseInfo === undefined){
             disase = {};
        } else {
             disase = this.props.disaseInfo;
        }
        this.state = { durum: disase.profileType };
        console.log(this.props.disaseInfo);
        // Toggle the state every second
        /*setInterval(() => {
          this.setState({ showText: !this.state.durum });
        }, 1000);*/
      }

      renderImage() {
        if (this.state.durum === 'savasci') {
            return <Image source={require('../icons/warrior.png')} style={{ width: 50, height: 50 }} />;
        }
        else {
            return <Image source={require('../icons/winner.png')} style={{ width: 50, height: 50 }} />;
        }
    }

    goProfile2() {
        Actions.profilefriend({ user: this.props.friend, disaseInfo: this.props.disaseInfo });
    }

    render() {
        console.log("listitem SADSE gelen friend propsu---------:");
        console.log(this.props.friend);
        let disase;
        if (this.props.disaseInfo === undefined){
             disase = {};
        } else {
             disase = this.props.disaseInfo;
        }
        let url;
        if (this.props.profile === undefined){
            url = "";
        } else {
            url  = this.props.profile.url;
        }
        console.log("listitem sadse gelen disaseInfo propsu");
        console.log(this.props.disaseInfo);
        return (
            //<TouchableWithoutFeedback onPress={this.onPostClick.bind(this)}>
            <TouchableWithoutFeedback onPress={() => console.log("tiklama ulan")}>
                <View>
                <Text style={styles.headerStyle}> {this.props.friend.name} </Text>
                    <View style={styles.subContainerStyle} >
                        <Image source={{uri: url}} style={{borderRadius:30, width: 70, height: 70 }} />
                        {this.renderImage()}
                        <View style={styles.textContainerStyle}>
                        <Text style={styles.textStyle}>Kanser Türü:{disase.disaseType}</Text>
                        <Text style={styles.textStyle}>Evre:{disase.disaseStage}</Text>
                        </View>
                        <TouchableOpacity 
                         onPress={() => Actions.chat({ user: this.props.friend })} 
                         style={styles.buttonStyle}>                     
                             <Image source={require('../icons/chat.png')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
                       </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goProfile2()} style={styles.buttonStyle}>
                            
                            <Image source={require('../icons/ekle.jpg')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        flex:4,
        color:'#007aff',
        height: 'auto',
        width: 200,
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Comic Sans MS'
    },
    buttonStyle: {
        flex: 1,
        justifyContent:'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 5
      },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
      },
    textStyle: {
        flex:4,
        color:'purple',
        height: 'auto',
        width: 150,
        fontSize: 12,
        fontWeight: 'bold',
        //fontFamily: 'Comic Sans MS'
    },
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 30,
        position: 'relative'
  },
  textContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'
}
});


export default ListItemSad;
