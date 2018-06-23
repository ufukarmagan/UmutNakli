import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ContentFriendStory extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log("render");
        console.log(this.props);
        return (
            <View>
                <Text style={{ fontSize:30,  color:'blue' }} > KANSER SERÜVENİM </Text>
                    <Text style={{ fontWeight:'bold', fontStyle:'italic' }}>
                    {this.props.user.mystory}
                   </Text>
            </View>
        );
    }

}

export default ContentFriendStory;