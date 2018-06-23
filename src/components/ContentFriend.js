import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';
import { Button, Detay } from '../ortak';

class ContentFriend extends Component {
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    componentWillMount() {
        this.getImages();
    }
    getImages() {
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        const data = [];
        database.ref('kullanicilar/' + this.props.user.friendsUid + '/resimler').on('value', (snapshot) => {
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
                this.setState({ data: snapshot.val() });
                console.log(this.state.data);
            //});
        });
    }
    renderData() {
        let d = [];
        if(this.state.data === undefined) {
            d = [];
            //return <Detay data={''} />;
        }else {
            console.log("RENDER DATA methodu");
            d = this.state.data;
            const a = _.map(d, ({ url }, uid) => {
                return { url };
            });
            console.log(a);
           return a.map((data, Id) => <Detay key={Id} data={data} />);
        }
      }
    render() {
        console.log("ContentFriend'in disase propsu");
        console.log(this.props.userDisase);

        return (
            <View>
            <View>
                <Text></Text>
                        <Text style={{ fontSize:20 }}>
                        <Text style={{ color: 'blue' }} >Kanser Türü:</Text>
                        <Text style={{ fontWeight:'bold' }} >{this.props.userDisase.disaseType}</Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Yaş: </Text>
                        <Text style={{ fontWeight:'bold' }} >{this.props.user.age} </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Şehir:</Text>
                        <Text style={{ fontWeight:'bold' }} > {this.props.user.province} </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Evre:</Text>
                        <Text style={{ fontWeight:'bold' }} > {this.props.userDisase.disaseStage} </Text> </Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Hastane:</Text>
                        <Text style={{ fontWeight:'bold' }} >{this.props.userDisase.hospital} </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Kemoterapi Kür Sayısı: </Text>
                        <Text style={{ fontWeight:'bold' }} > {this.props.userDisase.cureNumber} </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Bağlantılı Savaşçı Sayısı: </Text>
                        <Text style={{ fontWeight:'bold' }} >12 </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Bağlantılı Kahraman Sayısı: </Text>
                        <Text style={{ fontWeight:'bold' }} >8 </Text></Text>
                <Text></Text>
            </View>
            
            <View>
                <View>
                    {this.renderData()}
                </View>
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
    };

export default ContentFriend;