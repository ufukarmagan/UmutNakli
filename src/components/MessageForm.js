import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actPostLoad } from '../actions';
import ListItem from './ListItem';
import { CardSection, Button } from '../ortak/index';
 
class MessageFrom extends Component {

    render() {
        console.log('post list form render oldu');
        console.log(this.props.postArray);
        return (
                <View style={styles.container}>
                <ScrollView style={styles.container2}>
                    <View style={styles.subContainerStyle} >
                        <View style={styles.friendMessageView} >
                            <Text style={{ fontSize: 18 }}>Selam kanka şu ödevi yapamadım sen yaptıysan bana atar mısın?</Text>
                        </View>
                    </View>
                    <View style={styles.subContainerStyle} >
                        <View style={styles.userMessageView} >
                            <Text style={{ fontSize: 18 }}> Selam kanka şu ödevi yapamadım </Text>
                        </View>
                    </View>
                    <View style={styles.subContainerStyle} >
                        <View style={styles.friendMessageView} >
                            <Text style={{ fontSize: 18 }}>Selam kanka şu ödevi yapamadım sen yaptıysan bana atar mısın?</Text>
                        </View>
                    </View>
                    <View style={styles.subContainerStyle} >
                        <View style={styles.userMessageView} >
                            <Text style={{ fontSize: 18 }}>Tamam kanka</Text>
                        </View>
                    </View>
                    <View style={styles.subContainerStyle} >
                        <View style={styles.friendMessageView} >
                            <Text style={{ fontSize: 18 }}>Ok sağolasın.</Text>
                        </View>
                    </View>
                    <View style={styles.subContainerStyle}>
                        <View style={styles.friendMessageView} >
                            <Text style={{ fontSize: 18 }}>Ok sağolasıaaaaaaaaaaaaaaaaaaaaaaaaaan.</Text>
                        </View>
                    </View>
            </ScrollView>
            <View style={{ alignSelf: 'flex-start', flexDirection:'row' }}>
                <TextInput style={{ marginRight: 5, marginLeft: 5, alignSelf: 'flex-end', width: 300 }} />
                <TouchableOpacity onPress={()=> console.log('')} style={styles.buttonStyle}>
                    <Image source={require('../icons/mesaj.png')} style={{ alignSelf: 'center', width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        inputStyle: {
            marginBottom: 60,
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 18,
            flex: 1
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
        userMessageView: {
            backgroundColor: '#FAFAFA',
            alignSelf: 'flex-end',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#FAFAFA',
        },
        friendMessageView: {
            backgroundColor: '#F2F2F2',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#F2F2F2',
        },
        container: {
            marginTop: 55,
            marginBottom: 55,
            flex: 1,
            //flexDirection: 'row',
            //justifyContent: 'center',
            //alignItems: 'center',
            backgroundColor: 'white',
            flexWrap: 'wrap',
        },
        container2: {
             //marginTop: 55,
             marginBottom: 55,
             flex: 1,
             //flexDirection: 'row',
             //justifyContent: 'center',
             //alignItems: 'center',
             backgroundColor: 'white',
             flexWrap: 'wrap',
         },
        
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        },
        subContainerStyle: {
            //borderBottomWidth: 1,
            padding: 5,
            height: 'auto',
            backgroundColor: '#fff',
            //justifyContent: 'center',
            //flexDirection: 'row',
            //borderColor: '#ddd',
            position: 'relative',
      },
    }
);

export default MessageFrom;
