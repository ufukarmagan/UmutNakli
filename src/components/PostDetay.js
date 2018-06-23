import React, { Component } from 'react';
import { TextInput, Alert, Text, View, TouchableOpacity } from 'react-native';
import { CardSection } from '../ortak/index';


class PostDetay extends Component {
    /*OnClickPost() {
        console.log('onClickPost calisti.');
        const { prPost } = this.props;
        console.log({prPost});
        this.props.actPostCreate({ prPost });
    }*/
    render() {
        console.log('postdetay sayfasına gelen props---');
        console.log(this.props.clickedPost);
        //console.log({prPost});
        const { inputStyle } = styles;
        //console.log('posta tıklandığında gelen post bilgisi' + this.props.clickedPost.prPost);
        console.log('PostDetay sayfasi render oldu: ');
        return (
            //<Text>CreatePostForm</Text>
            <View style={styles.container}>
                    <Text style={{ fontSize:20, color: 'blue' }}> {this.props.clickedPost.post} </Text>
            </View>
        );
    }
}
const styles = {
    inputStyle: {
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      flex: 1
    },
    container: {
        marginTop: 55,
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white'
    }
};

export default PostDetay;
