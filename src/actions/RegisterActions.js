import { Alert } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { REGISTER_EMAIL_CHANGED, 
        REGISTER_PASSWORD_CHANGED,
        REGISTER_USERNAME_CHANGED, 
        REGISTER_AGE_CHANGED, 
        REGISTER_DISASETYPE_CHANGED,
        USER_REGISTER, 
        REGISTER_CURENUMBER_CHANGED,
        REGISTER_HOSPITAL_CHANGED,
        REGISTER_PROFILETYPE_CHANGED,
        REGISTER_DISASESTAGE_CHANGED,
        REGISTER_PROVINCE_CHANGED,
        REGISTER_GENDER_CHANGED,
        REGISTER_SUCCESS, 
        REGISTER_FAIL } from './types';
/** Bizim hatamız buraya export const emailChanged = (kullaniciadi) yazıyormuşuz. */
    export const actRegisterEmailChanged = ({ stEmail }) => {
    console.log('actRegisterEmailChanged actionu calisti'+ stEmail);
        return (dispatch) => {
            dispatch({
                type: REGISTER_EMAIL_CHANGED,
                payload: stEmail
            }
            );
        };
    };

    export const actRegisterPasswordChanged = ({ stPassword }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_PASSWORD_CHANGED,
                payload: stPassword
            }
            );
        };
    };
   
    export const actRegisterUsernameChanged = ({ stUsername }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_USERNAME_CHANGED,
                payload: stUsername
            }
            );
        };
    };

    export const actRegisterAgeChanged = ({ stAge }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_AGE_CHANGED,
                payload: stAge
            }
            );
        };
    };

    export const actRegisterProvinceChanged = ({ stProvince }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_PROVINCE_CHANGED,
                payload: stProvince
            }
            );
        };
    };

    export const actRegisterGenderChanged = ({ stGender }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_GENDER_CHANGED,
                payload: stGender
            }
            );
        };
    };

    export const actRegisterProfileTypeChanged = ({ stProfileType }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_PROFILETYPE_CHANGED,
                payload: stProfileType
            }
            );
        };
    };
    
    export const actRegisterDisaseTypeChanged = ({ stDisaseType }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_DISASETYPE_CHANGED,
                payload: stDisaseType
            }
            );
        };
    };

    export const actRegisterDisaseStageChanged = ({ stDisaseStage }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_DISASESTAGE_CHANGED,
                payload: stDisaseStage
            }
            );
        };
    };

    export const actRegisterNumberCureChanged = ({ stCureNumber }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_CURENUMBER_CHANGED,
                payload: stCureNumber
            }
            );
        };
    };

    export const actRegisterHospitalChanged = ({ stHospital }) => {
        return (dispatch) => {
            dispatch({
                type: REGISTER_HOSPITAL_CHANGED,
                payload: stHospital
            }
            );
        };
    };

    export const actUserRegister = ({ prEmail, prPassword, prUsername,
         prAge, prProvince, prGender, prProfileType, prDisaseType, prDisaseStage, prCureNumber, prHospital }) => {
        console.log('actUserCreate actionu calisti.');
        return (dispatch) => {
            dispatch({ type: USER_REGISTER });
            if (prEmail === '' || prPassword === '') {
                /*Alert.alert(
                'Mesaj',
                'Her iki alanda dolu olmalıdır',
                [
                    { text: 'Tamam', onPress: () => null }
                ]
                    ".read": "$uid === auth.uid",
            ".write": "$uid === auth.uid"   
                );*/
            } else { 
                const database = firebase.database();
                const signUp = (email, password, username, age, province, 
                    gender, profileType, disaseType, disaseStage, cureNumber, hospital) => {
                    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
                        console.log('kayit basarili');
                        database.ref('kullanicilar/' + user.uid).set({
                            email: email,
                            password: password,
                            username: username,
                            mystory: "Hikaye eklenmemiş...",
                            profile: {
                                url: "https://firebasestorage.googleapis.com/v0/b/umut-nakli.appspot.com/o/default%2Fdefault.jpg?alt=media&token=330015f2-dcde-4448-8009-042a75999258"
                            },
                            name: username,
                            age: age,
                            province: province,
                            gender: gender,
                            disaseInfo: {
                                profileType: profileType,
                                disaseType: disaseType,
                                disaseStage: disaseStage,
                                cureNumber: cureNumber,
                                hospital: hospital
                            }
                        });
                        RegisterSuccess(dispatch);
                    }).catch((error) => {
                        console.log(error.code);
                        console.log(error.message);
                        RegisterFail(dispatch);
                    });
                };
                const signIn = (email, password) => {
                    firebase.auth().signInWithEmailAndPassword(email, password).then(
                        () => {
                            console.log('basarili');
                        }).catch((error) => {
                        console.log(error.code);
                        console.log(error.message);
                       });
                };
                signUp(prEmail, prPassword, prUsername, prAge,
                     prProvince, prGender, prProfileType, prDisaseType, prDisaseStage, prCureNumber, prHospital);
                //signIn(prEmail, prPassword);
                }
        };
    };
    const RegisterSuccess = (dispatch) => {
        console.log('RegisterSuccess oldu.');
        dispatch({
            type: REGISTER_SUCCESS
        });
        Actions.login_screen();
    };

    const RegisterFail = (dispatch) => {
        console.log('RegisterFail oldu.');
        Alert.alert(
            'Mesaj',
            'Giris basarisiz oldu.',
            [
            { text: 'Tamam', onPress: () => null }
            ]
        );
        dispatch({
            type: REGISTER_FAIL
        });
    };
