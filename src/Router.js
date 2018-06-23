import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity,Button } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import PostListForm from './components/PostListForm';
import CreatePostForm from './components/CreatePostForm';
import FriendsForm from './components/FriendsForm';
import ProfileForm from './components/ProfileForm';
import MessageForm from './components/MessageForm';
import ListDiscoverFriends from './components/ListDiscoverFriends';
import ListFriends from './components/ListFriends';
import ProfileNonFriends from './components/ProfileNonFriends';
import ProfileNonFriends2 from './components/ProfileNonFriends2';
import ProfileFriends from './components/ProfileFriends';
import RecentTalkList from './components/RecentTalkList';
import DataMiningDeneme from './components/DataMiningDeneme';
import RegisterPersonalInfoForm from './components/RegisterPersonalInfoForm';
import RegisterDisaseInfoForm from './components/RegisterDisaseInfoForm';
import RegisterAccountInfoForm from './components/RegisterAccountInfoForm';
import PostDetay from './components/PostDetay';
import SendedRequests from './components/SendedRequests';
import IncomingRequests from './components/IncomingRequests';
import OtherPostsList from './components/OtherPostsList';
import Chat from './components/Chat';
import ListChat from './components/ListChat';
import GalleryForm from './components/GalleryForm';
import ListSad from './components/ListSad';

const HomeIcon = ()=> {
    return (
        <Image source={require('./icons/if_home_blue_68743.png')} style={{ width: 50, height: 50 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};

const MessageIcon = ()=> {
    return (
        <Image source={require('./icons/if_balloon_blue_68668.png')} style={{ width: 50, height: 50 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};

const ProfileIcon = ()=> {
    return (
        <Image source={require('./icons/if_users_blue_68832.png')} style={{ width: 50, height: 50 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};

const SadIcon = ()=> {
    return (
        <Image source={require('./icons/unhappy.png')} style={{ width: 50, height: 50 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};

const FriendsIcon = ()=> {
    return (
        <Image source={require('./icons/if_search_blue_68804.png')} style={{ width: 50, height: 50 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};

const TabIcon = ()=> {
    return (
        <Image source={require('./images/logomuz.jpg')} style={{ width: 70, height: 70 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};

const EditIcon = ()=> {
    return (
        <Image source={require('./icons/if_user_blue_68830.png')} style={{ width: 50, height:50 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};

/*const TabIcon = ({ path }) => {
    return (
        <Image source={require(path)} style={{ width: 70, height: 70 }} />
        //<Text style={{ color: selected ? 'red' : 'black' }} > {title} </Text>
    );
};*/

const NavIcon = () => {
    return (
        <View>
        <Image source={require('./images/logomuz2.png')} style={{ width: 70, height: 70 }} />
        </View>
    );
}

class RouterComponent extends Component {

    confirm() {
        console.log('confirm fonksiyonu');
    }

    render() {
    return (
        <Router>
        
            <Scene key="auth">

              <Scene
                    onLeft={() => console.log("zuhauhua")}
                    renderLeftButton={() =>
                      <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />}   
                    key="login_screen" 
                    component={LoginForm} 
                    navigationBarStyle={{ backgroundColor: '#6c56b7', shadowOpacity:20 }}
                    
                    title="Giris" 
              />
              <Scene
                    onLeft={() => console.log("zuhauhua")}
                    renderLeftButton={() =>
                      <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />}   
                    key="goRegister" 
                    component={RegisterPersonalInfoForm} 
                    navigationBarStyle={{ backgroundColor: '#6c56b7', shadowOpacity:20 }}
                    
                    title="KİŞİSEL BİLGİLER" 
              />
              <Scene
                    onLeft={() => console.log("zuhauhua")}
                    renderLeftButton={() =>
                      <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />}   
                    key="goDisaseInfo" 
                    component={RegisterDisaseInfoForm} 
                    navigationBarStyle={{ backgroundColor: '#6c56b7', shadowOpacity:20 }}
                    
                    title="HASTALIK BİLGİLERİ" 
              />
              <Scene
                    onLeft={() => console.log("zuhauhua")}
                    renderLeftButton={() =>
                      <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />}   
                    key="goAccountInfo" 
                    component={RegisterAccountInfoForm} 
                    navigationBarStyle={{ backgroundColor: '#6c56b7', shadowOpacity:20 }}
                    
                    title="HESAP BİLGİLERİ" 
              />
            </Scene> 

            <Scene key="main">
                <Scene
                key="tabbar"
                //navigationBarTitleImageStyle
                tabs
                tabBarPosition='top'
                tabBarStyle={{ backgroundColor: '#e0ebeb' }}
                >
                  <Scene key="postlar" title="POST" icon={HomeIcon}>
                    <Scene   
                        //navigationBarTitleImage={require('./images/logomuz.jpg')}
                        //navigationBarTitleImageStyle={{ width: 70, height: 70 }}
                        //style={{ marginTop:65 }}
                        navigationBarStyle={{ backgroundColor: '#e0ebeb' }} 
                        key="post_list"
                        onLeft={() => console.log('sol buton')}
                        renderLeftButton={() =>
                         <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />}
                         component={OtherPostsList}
                        title="Ana Sayfa"
                        titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                        initial
                    />
                    <Scene
                        navigationBarStyle={{ backgroundColor: '#e0ebeb' }} 
                        key="post_detay"
                        onLeft={() => console.log("zuhauhua")}
                        renderLeftButton={() =>
                         <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />}
                        component={PostDetay} 
                        title="Gönderi"
                        titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}} 
                    />
                    <Scene
                                onLeft={() => console.log('Geriye basti')}
                                renderLeftButton={() =>
                                <TouchableOpacity onPress={()=> Actions.mosu_friends()}>
                                <Image source={require('./icons/back.png')} style={{ width: 40, height: 35 }} />
                                </TouchableOpacity>}   
                                key="profilenonfriend2" 
                                component={ProfileNonFriends2} 
                                navigationBarStyle={{ backgroundColor: '#e0ebeb', shadowOpacity:20 }}
                                title="Kişinin Profili"
                                titleStyle={{color:'black',fontSize: 17,
                                textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                             />
                      
                    </Scene>

                    <Scene key="mosu_message" title="MESAJ" icon={MessageIcon}>

                       <Scene 
                            key="recent_talking_form"
                            onLeft={() => console.log("zuhauhua")}
                        renderLeftButton={() =>
                         <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />} 
                            component={ListChat} 
                            navigationBarStyle={{ backgroundColor: '#e0ebeb' }}
                            title="Son Konuşulanlar"
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}} 
                        />

                        <Scene 
                            key="chat" 
                            component={Chat} 
                            onLeft={() => console.log("zuhauhua")}
                        renderLeftButton={() =>
                         <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />}
                            navigationBarStyle={{ backgroundColor: '#e0ebeb' }}
                            title="Mesajlarım"
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                             hideTabBar = 'true' 
                        />
                    </Scene>

                    <Scene key="mosu_proife" title="PROFILE" icon={EditIcon}>
                        <Scene 
                            key="profile_form" 
                            component={ProfileForm}
                            navigationBarStyle={{ backgroundColor: '#e0ebeb' }}
                            onRight={(scene,proxy) => { scene.component.WrappedComponent.prototype.confirm(); }}
                        renderRightButton={() =>
                            <Button title='Çıkış Yap' onPress={ () => 
                                firebase.auth().signOut().then(function() {
                                    Actions.pop();
                                  }).catch(function(error) {
                                    // An error happened.
                                  })
                            } />}
                            onLeft={() => console.log("zuhauhua")}
                            renderLeftButton={() =>
                             <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />} 
                            title="Profil"
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}} 
                        />
                        <Scene
                            navigationBarStyle={{shadowOpacity:10}} 
                            key="gallery_form" 
                            component={GalleryForm}
                            onLeft={() => console.log("zuhauhua")}
                            renderLeftButton={() =>
                             <Image source={require('./images/logomuz.jpg')} style={{ width: 40, height: 35 }} />} 
                            navigationBarStyle={{ backgroundColor: '#e0ebeb' }}
                            title="Resim Yükle"
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}} 
                        />
                    </Scene>

                    <Scene key="mosu_friends" title="SİZE UYGUN KAHRAMANLAR" icon={FriendsIcon}>
                        <Scene
                            navigationBarStyle={{shadowOpacity:10}} 
                            key="discover_friends" 
                            component={ListDiscoverFriends}
                            onLeft={() => console.log("zuhauhua")}
                            renderLeftButton={() =>
                             <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />} 
                            navigationBarStyle={{ backgroundColor: '#e0ebeb' }}
                            title="Arkadaş Bul"
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}} 
                        /> 
                            <Scene
                                onLeft={() => console.log('Geriye basti')}
                                renderLeftButton={() =>
                                <TouchableOpacity onPress={()=> Actions.mosu_friends()}>
                                <Image source={require('./icons/back.png')} style={{ width: 40, height: 35 }} />
                                </TouchableOpacity>}   
                                key="profilenonfriend" 
                                component={ProfileNonFriends} 
                                navigationBarStyle={{ backgroundColor: '#e0ebeb', shadowOpacity:20 }}
                                title="Kişinin Profili"
                                titleStyle={{color:'black',fontSize: 17,
                                textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                             />
                              <Scene
                                onLeft={() => console.log('Geriye basti')}
                                renderLeftButton={() =>
                                <TouchableOpacity onPress={()=> Actions.mosu_friends()}>
                                <Image source={require('./icons/back.png')} style={{ width: 40, height: 35 }} />
                                </TouchableOpacity>}   
                                key="sendedrequests" 
                                component={SendedRequests} 
                                navigationBarStyle={{ backgroundColor: '#e0ebeb', shadowOpacity:20 }}
                                title="Gönderilen istekler"
                                titleStyle={{color:'black',fontSize: 17,
                                textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                             />
                             <Scene
                                onLeft={() => console.log('Geriye basti')}
                                renderLeftButton={() =>
                                <TouchableOpacity onPress={()=> Actions.mosu_friends()}>
                                <Image source={require('./icons/back.png')} style={{ width: 40, height: 35 }} />
                                </TouchableOpacity>}   
                                key="incomingrequests" 
                                component={IncomingRequests} 
                                navigationBarStyle={{ backgroundColor: '#e0ebeb', shadowOpacity:20 }}
                                title="Gelen istekler"
                                titleStyle={{color:'black',fontSize: 17,
                                textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                             />
                    </Scene>
                    <Scene key="mosu_myfriends" title="Arkadaslar" icon={ProfileIcon}>
                        <Scene
                            navigationBarStyle={{shadowOpacity:10}} 
                            key="my_friends" 
                            component={ListFriends}
                            onLeft={() => console.log("zuhauhua")}
                            renderLeftButton={() =>
                             <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />} 
                            navigationBarStyle={{ backgroundColor: '#e0ebeb' }}
                            title="Arkadaşlarım" 
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                        />
                        <Scene
                            onLeft={() => console.log('Geriye basti')}
                            renderLeftButton={() =>
                            <TouchableOpacity onPress={()=> Actions.mosu_myfriends() }>
                            <Image source={require('./icons/back.png')} style={{ width: 40, height: 35 }} />
                            </TouchableOpacity>}   
                            key="profilefriend" 
                            component={ProfileFriends} 
                            navigationBarStyle={{ backgroundColor: '#e0ebeb', shadowOpacity:20 }}
                            
                            title="Kişinin Profili" 
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                        />
                    </Scene>

                    <Scene key="abc" title="Mutsuzlar" icon={SadIcon}>
                        <Scene
                            navigationBarStyle={{shadowOpacity:10}} 
                            key="sadsList" 
                            component={ListSad}
                            onLeft={() => console.log("zuhauhua")}
                            renderLeftButton={() =>
                             <Image source={require('./images/logomuz2.png')} style={{ width: 40, height: 35 }} />} 
                            navigationBarStyle={{ backgroundColor: '#e0ebeb' }}
                            title="Mutsuzlar" 
                            titleStyle={{color:'black',fontSize: 17,
                             textShadowColor:'dimgray', textShadowOffset:{width:1,height:1}}}
                        />
                    </Scene>

                </Scene> 
            </Scene>
          
        </Router>
    );
 } }

export default RouterComponent;
