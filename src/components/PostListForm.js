import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actPostLoad } from '../actions';
import ListItem from './ListItem';
import CreatePostForm from './CreatePostForm';
 
class PostListForm extends Component {

    componentWillMount() {
        console.log('componentWillMount calisti');
        //this.props.actPostLoad();
        this.props.actPostLoad({ user: this.props.user });
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ postArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(postArray);
        console.log("create data soruce burası");
        console.log(postArray);
       //console.log(this.props.user); burda çalışıyor.
        
    }

     renderRow(post) {
         console.log("burası renderRowdaki post");
         console.log(post);
         //console.log(this.props);
        return <ListItem post={post} />;
    }

    render() {
        console.log('post list form render olduu');
        console.log(this.props.postArray);
        const userim = this.props.user;
        console.log(this.props.user);
        return (
            <View style={styles.container}>

                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                
            </View>
        );
        /*return (
            <View style={styles.container}>
               <View style={styles.navBar}>
                  <Image source={require('../images/logomuz.jpg')} style={{width: 70, height: 70 }} />
               </View>    
            </View>
        );*/
    }
}

const mapStateToProps = ({ postListResponse }) => { 
    //const userim = this.props.user;
    //console.log("mapstatetopeopstaki user");
    //console.log(userim);
    const postArray = _.map(postListResponse, ({ prPost }, uid) => {
        return { prPost, uid };
    });
    console.log(postArray);
    return { postArray };
};

const styles = StyleSheet.create(
    {
        mystil: {
            backgroundColor: 'red'
        },
        container: {
            marginTop: 55,
            flex: 1,
            justifyContent: 'center',
            //alignItems: 'center',
            backgroundColor: '#f0f5f5'
        },
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        }
    }
);

export default connect(mapStateToProps, { actPostLoad })(PostListForm);
