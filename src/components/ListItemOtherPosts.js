import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { CardSection,Button } from '../ortak';

class ListItemOtherPosts extends Component {
    constructor(props){
        super(props);
        this.state = { name: ''};
    }/*
    componentWillMount(){
        console.log('component will mount');
    //let info;
    console.log('calist-a');
    const prms =  firebase.database().ref('kullanicilar/'+this.props.post.owner+'/name').once('value');
    console.log('calist-b');
        const  prms_then = prms.then( snapshot => {
            console.log('calist-c');
            console.log(snapshot.val());
            console.log('calist-d');
            return info = snapshot.val();
             console.log('calist-e');
        }).then(() => {
           return this.setState({name: info});
        });
    }
*/
    render() {
        const { post } = this.props.post;

        let disase;
        if (this.props.post.disase === undefined){
             disase = {};
        } else {
             disase = this.props.post.disase;
        }

        console.log("ListItemOtherPosts gelen post propsu boyle gorunuyor");
        console.log(this.props.post);
        console.log("ListItemOtherPosts gelen disase degeri");
        console.log(disase);
        return (
            //<TouchableWithoutFeedback onPress={this.onPostClick.bind(this)}>
                <View style={{ borderColor: '#ddd',borderWidth: 2,borderRadius: 30, }} >
                <Text style={styles.textStyle}> {this.props.post.user} </Text>
                    <CardSection>
                        <Image source={{uri: this.props.post.uri}} style={{borderRadius:30, flex:1, /*width: 70,*/ height: 70 }} />
                        <Text style={styles.postStyle} > {post} </Text>
                        <Button onPress={() => Actions.profilenonfriend2({ age: this.props.post.age, province: this.props.post.province, propuser: this.props.post.user, userDisase: disase, profileUrl: this.props.post.uri })}>
                          Profile Git </Button>        
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


export default ListItemOtherPosts;
