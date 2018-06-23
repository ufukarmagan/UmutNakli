import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actOtherPostsLoad } from '../actions';
import ListItemOtherPosts from './ListItemOtherPosts';
import CreatePostForm from './CreatePostForm';
 
class OtherPostsList extends Component {

    componentWillMount() {
        this.props.actOtherPostsLoad();
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
    }

     renderRow(post) {
        return <ListItemOtherPosts post={post} />;
    }

    render() {
        console.log('other posts list form render oldu');
        console.log(this.props.postArray);
        return (
            <View style={styles.container}>
            <CreatePostForm />
                <ListView
                    style={{marginBottom: 50}}
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
    //const postArray = _.map(postListResponse, ({ post, owner }, uid) => {
      // return { post, owner, uid };
    //});
    const postArray = postListResponse;
    console.log("Other post list form mapstatetoprops");
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

export default connect(mapStateToProps, { actOtherPostsLoad })(OtherPostsList);
