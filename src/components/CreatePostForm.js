import React, { Component } from 'react';
import { TextInput, Alert, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { CardSection, Card, Button } from '../ortak/index';
import { actPostChanged, actPostCreate } from '../actions';

class CreatePostForm extends Component {

    state = { res: null };

    OnClickPost() {
        console.log('onClickPost calisti.');
        
        this.getResult();
        
        
    }

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
           fetch('http://web-service-um.193b.starter-ca-central-1.openshiftapps.com/polarity', {
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
              console.log(response._bodyText);
              Toast.show(response._bodyText, Toast.SHORT);
              this.setState({ res: response._bodyText });
              console.log("res state i: ");
              console.log(this.state.res);
              const res = this.state.res;
              console.log("res constu");
              console.log(res);
              const { prPost } = this.props;
              console.log({ prPost });
              this.props.actPostCreate({ prPost, res });
          }) 
          .catch((error) => {
            console.error(error);
          }); 
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
                        placeholder="Postunuzu buraya giriniz"
                        style={inputStyle}
                        value={this.props.prPost}
                        onChangeText={degisenPost => this.props.actPostChanged({ stPost: degisenPost })}
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
      console.log('CreatePostFrom mapStateToProps calıştı: ');
      console.log(prPost);
      return { prPost };
  };
export default connect(mapStateToProps, { actPostChanged, actPostCreate })(CreatePostForm);
