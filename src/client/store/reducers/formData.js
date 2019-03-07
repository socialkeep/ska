import * as types from '../actionTypes';
import { Types } from 'aws-sdk/clients/firehose';


//todo fix image
const initialState = {
  firstName: '',
  lastName: '',
  email: '',

  instagram: '',
  facebook: '',
  twitter: '',

  socialMediaPostText: '',
  file: ''

}

const formDataReducer = (state = initialState, action) => {
  let newState;
  newState = Object.assign({},state);
  console.log("form data reducer payload ", action.payload)
  console.log("form data reducer state ", state)
  switch(action.type) {
    case types.HANDLE_TEXT_CHANGE:
      const { id, text } = action.payload;
      newState[id] = text;
      return newState
    case types.ADD_PHOTO:
      newState.file = action.payload
      return newState;
      
    default:
      return state;
  }
}

export default formDataReducer;