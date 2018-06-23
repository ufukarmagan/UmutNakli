import { Alert } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { USERNAME_CHANGED, 
    PASSWORD_CHANGED, 
    USER_LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL } from './types';
/** Bizim hatamız buraya export const emailChanged = (kullaniciadi) yazıyormuşuz. */
    export const actEmailChanged = ({ stUsername }) => {
    console.log('actemailChanged actionu calisti'+ stUsername);
        return (dispatch) => {
            dispatch({
                type: USERNAME_CHANGED,
                payload: stUsername
            }
            );
        };
    };

    export const actPasswordChanged = ({ stPassword }) => {
        return (dispatch) => {
            dispatch({
                type: PASSWORD_CHANGED,
                payload: stPassword
            }
            );
        };
    };

    export const actUserLogin = ({ prUsername, prPassword }) => {
        console.log('actUserLogin actionu calisti.');
        return (dispatch) => {
            dispatch({ type: USER_LOGIN });
            if (prUsername === '' || prPassword === '') {
                Alert.alert(
                'Mesaj',
                'Her iki alanda dolu olmalıdır',
                [
                    { text: 'Tamam', onPress: () => null }
                ]
                );
            } else {
                firebase.auth().signInWithEmailAndPassword(prUsername, prPassword)
                .then(user => LoginSuccess(dispatch, user))
                .catch(() => LoginFail(dispatch));
            }
        };
    };

    const LoginSuccess = (dispatch, user) => {
        console.log('LoginSuccess oldu.');
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user
        });
        console.log('postlisten önce.');
        Actions.main();
        console.log('postlistten sonra.');
    };

    const LoginFail = (dispatch) => {
        console.log('LoginFail oldu.');
        Alert.alert(
            'Mesaj',
            'Giris basarisiz oldu.',
            [
            { text: 'Tamam', onPress: () => null }
            ]
        );
        dispatch({
            type: LOGIN_FAIL
        });
    };
