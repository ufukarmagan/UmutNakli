import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../ortak';

class ListItem extends Component {

    /*onPostClick() {
        Actions.post_detay({ clickedPost: this.props.post });
    }*/

    render() {
        const { prPost } = this.props.post;
        console.log("List itema gelen post propsu boyle gorunuyor");
        console.log(this.props.post);
        console.log(this.props.post.uid);
        console.log(this.props.post.prPost);
        const obj = {
            uid: this.props.post.uid,
            post: this.props.post.prPost
        }
        return (
            //<TouchableWithoutFeedback onPress={this.onPostClick.bind(this)}>
                <View style={{ borderColor: '#ddd',borderWidth: 2,borderRadius: 30, }} >
                    <CardSection>
                        <Text style={styles.postStyle} > {prPost} </Text>
                    </CardSection>
                </View>
            //</TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    postStyle: {
        //height: 'auto',
        //width: 350,
        flex: 4,
        fontSize: 20,
        color:'purple',
        //fontWeight: 'bold',
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
    textStyle: {
        flex:3,
        color:'#007aff',
        height: 'auto',
        width: 150,
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Comic Sans MS'
    }
});


export default ListItem;
