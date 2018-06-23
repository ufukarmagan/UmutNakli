import { REGISTER_EMAIL_CHANGED,
  REGISTER_PASSWORD_CHANGED,
  REGISTER_USERNAME_CHANGED,
  REGISTER_AGE_CHANGED,
  REGISTER_PROVINCE_CHANGED,
  REGISTER_GENDER_CHANGED,
  REGISTER_PROFILETYPE_CHANGED,
  REGISTER_DISASESTAGE_CHANGED,
  REGISTER_DISASETYPE_CHANGED,
  REGISTER_CURENUMBER_CHANGED,
  REGISTER_HOSPITAL_CHANGED,
  USER_REGISTER, 
  REGISTER_SUCCESS, 
  REGISTER_FAIL, } from '../actions/types';

const INITIAL_STATE = {
email: '',
password: '',
username: '',
age: '',
province: '',
gender: '',
profileType: '',
disaseType: '',
disaseStage: '',
cureNumber: '',
hospital: ''
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
case REGISTER_EMAIL_CHANGED:
  console.log('REGISTER_EMAIL_CHANGED changed reducer calisti :' + action.payload);
  return { ...state, email: action.payload };
case REGISTER_PASSWORD_CHANGED:
  console.log('REGISTER_PASSWORD_CHANGED reducer calisti :' + action.payload);
  return { ...state, password: action.payload };
case REGISTER_USERNAME_CHANGED:
  console.log('REGISTER_USERNAME_CHANGED reducer calisti :' + action.payload);
  return { ...state, username: action.payload };
case REGISTER_AGE_CHANGED:
  console.log('REGISTER_AGE_CHANGED reducer calisti :' + action.payload);
  return { ...state, age: action.payload };
case REGISTER_PROVINCE_CHANGED:
  console.log('REGISTER_PROVINCE_CHANGED reducer calisti :' + action.payload);
  return { ...state, province: action.payload };
case REGISTER_GENDER_CHANGED:
  console.log('REGISTER_GENDER_CHANGED reducer calisti :' + action.payload);
  return { ...state, gender: action.payload };
case REGISTER_PROFILETYPE_CHANGED:
  console.log('REGISTER_PROFILETYPE_CHANGED reducer calisti :' + action.payload);
  return { ...state, profileType: action.payload };
case REGISTER_DISASETYPE_CHANGED:
  console.log('REGISTER_DISASETYPE_CHANGED reducer calisti :' + action.payload);
  return { ...state, disaseType: action.payload };
case REGISTER_DISASESTAGE_CHANGED:
 console.log('REGISTER_DISASESTAGE_CHANGED reducer calisti :' + action.payload);
 return { ...state, disaseStage: action.payload };
 case REGISTER_CURENUMBER_CHANGED:
 console.log('REGISTER_CURENUMBER_CHANGED reducer calisti :' + action.payload);
 return { ...state, cureNumber: action.payload };
 case REGISTER_HOSPITAL_CHANGED:
 console.log('REGISTER_HOSPITAL_CHANGED reducer calisti :' + action.payload);
 return { ...state, hospital: action.payload };
case USER_REGISTER:
  console.log('USER_REGISTER reducer calisti :');
  return { ...state };
case REGISTER_SUCCESS:
  console.log('REGISTER_SUCCESS reducer calisti :');
  return { ...state };
case REGISTER_FAIL:
  console.log('REGISTER_FAIL reducer calisti :');
  return { ...state };
default:
  return state;
}
};
