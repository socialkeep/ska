import * as types from '../actionTypes';


//todo fix image
const initialState = {
  isLoggedIn: false,
  email: '',
  password: ''
}

const userDataReducer = (state = initialState, action) => {
  let newState;
  console.log("user data reducer payload ", action.payload)

  switch(action.type) {
    case types.HANDLE_TEXT_CHANGE:
      newState = Object.assign({},state);
      newState[action.payload.id] = action.payload.text;
      return newState;
    default: return state;  
  }
}

export default userDataReducer;