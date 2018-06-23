import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ContentNonFriend extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log("ContentNonFriend'in disase propsu");
        console.log(this.props.userDisase);
        const disase = this.props.userDisase;
        const user = this.props.user;
        return (
            <View>
                <Text></Text>
                <Text style={{ fontSize:20 }}> Kanser Türü: {disase.disaseType}</Text>
                <Text></Text>
                <Text style={{ fontSize:20 }}> Yaş: {user.age} </Text>
                <Text></Text>
                <Text style={{ fontSize:20 }}> Şehir: {user.province} </Text>
                <Text></Text>
                <Text></Text>
                <Text style={{ fontSize:20, color:'blue', fontStyle:'italic'  }}> Kişinin fotoğraflarını görmek, hikayesini okumak ve onunla konuşmak için bağlantı kurmanız gerekmektedir </Text>
            </View> 
        );
    }

}

export default ContentNonFriend;

