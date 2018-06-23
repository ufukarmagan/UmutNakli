import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actSadsLoad } from '../actions';
import ListItemSad from './ListItemSad';
 
class ListSad extends Component {

    componentWillMount() {
        console.log('FRIENDS componentWillMount calisti');
        this.props.actSadsLoad();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(sadsArray) {
        this.createDataSource(sadsArray);
    }

    createDataSource({ sadsArray }) {   
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(sadsArray);
    }

     renderRow(name) {
         console.log("list item sad render oldu.");
         console.log(name);
        return <ListItemSad friend={name} disaseInfo={name.disaseInfo} profile={name.profile} />;
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

const mapStateToProps = ({ sadsResponse }) => { 
    /*const postArray = _.map(friendsResponse, ({ prPost }, uid) => {
        return { prPost, uid };
    });*/
    console.log("SADS MAPSTATETOPROS CALISTI. sadsArray:");
    const sadsArray = sadsResponse;
    console.log(sadsArray);
    return { sadsArray };
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

export default connect(mapStateToProps, { actSadsLoad })(ListSad);
