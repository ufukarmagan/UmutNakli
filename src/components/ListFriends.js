import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actFriendsLoad } from '../actions';
import ListItemFriends from './ListItemFriends';
 
class ListFriends extends Component {

    componentWillMount() {
        console.log('FRIENDS componentWillMount calisti');
        this.props.actFriendsLoad();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(friendsArray) {
        this.createDataSource(friendsArray);
    }

    createDataSource({ friendsArray }) {   
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(friendsArray);
    }

     renderRow(name) {
        console.log("list item friends'den oncesi");
        console.log(name);
        return <ListItemFriends friend={name} disaseInfo={name.disase} />;
    }

    render() {
        //console.log('post list form render oldu');
        //console.log(this.props.postArray);
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

const mapStateToProps = ({ friendsResponse }) => { 
    /*const postArray = _.map(friendsResponse, ({ prPost }, uid) => {
        return { prPost, uid };
    });*/
    console.log("FRIENDS MAPSTATETOPROS CALISTI.");
    const friendsArray = friendsResponse;
    console.log(friendsArray);
    return { friendsArray };
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

export default connect(mapStateToProps, { actFriendsLoad })(ListFriends);
