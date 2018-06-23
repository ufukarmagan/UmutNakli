import React, { Component } from 'react';
import { TextInput, Alert, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from '../ortak/index';
import { actDMPostChanged, actDMPostCreate } from '../actions';

class DataMiningDeneme extends Component {

    /*async getResult() {
        try {
          const response = await axios.post('http://localhost:8080/polarity', {
                                                          id: 'Fred',
                                                          text: 'Ne kadar guzel bir gun hayat cok guzel',
                                                          userName: 'hebelehubele' 
                                                         });
          console.log("response:");                                              
          console.log(response);
        } catch (error) {
          console.log("error:");
          console.error(error);
        }
      }*/

    getResult() {
        /*axios.post('http://localhost:8080/polarity', {
            id: '123',
            text: 'Ne kadar guzel bir gun hayat cok guzel',
            userName: 'hebelehubele'
          })
          .then((response) => {
            console.log("response:");
            console.log(response);
          })
          .catch((error) => {
            console.log("error:");
            console.log(error);
          });*/
           fetch('http://192.168.1.60:8080/polarity', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: "123",
                text: this.props.prPost,
                userName: "hebelehubele",
            }),
          }).then((response) => {
              console.log("response:");
              console.log(response);
          }) 
          .catch((error) => {
            console.error(error);
          }); 
    }  
    
    OnClickPost() {
        console.log('DataMining onClickPost metodu calisti.');
        const { prPost } = this.props;
        console.log({ prPost });
        this.getResult();
    }


    render() {
        
        const { inputStyle } = styles;
        //console.log('posta tıklandığında gelen post bilgisi' + this.props.clickedPost.prPost);
        console.log('CreatePostForm render oldu: ' + this.props.prPost);
        return (
            //<Text>CreatePostForm</Text>
            <View style={{ /*marginBottom: 50*/ }}>
                <CardSection>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder="DataMining Postunuzu buraya giriniz"
                        style={inputStyle}
                        value={this.props.prPost}
                        onChangeText={degisenPost => this.props.actDMPostChanged({ DMstPost: degisenPost })}
                    />
                </CardSection>
               
                <CardSection>
                    <Button onPress={this.OnClickPost.bind(this)}> POST EKLE </Button>
                </CardSection>
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
};
  const mapStateToProps = ({ postListResponse }) => {
      const { post } = postListResponse;
      const prPost = post;
      console.log('DATA MINING DENEME mapStateToProps calıştı: ');
      console.log(prPost);
      return { prPost };
  };
export default connect(mapStateToProps, { actDMPostChanged, actDMPostCreate })(DataMiningDeneme);
