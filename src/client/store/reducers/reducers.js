import { combineReducers } from 'redux';
import formData from './formData';
import userData from './userData';
import cardData from './cardData';


export default combineReducers({
  formData: formData,
  userData: userData,
  cardData: cardData
})