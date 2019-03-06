import * as types from '../actionTypes';


//todo fix image
const initialState = {
  firstName: '',
  lastName: '',
  email: '',

  instagram: '',
  facebook: '',
  twitter: '',

  socialMediaText: '',
  image: '',

}

export default formDataReducer = (state = initialState, action) => {
  let newState;

  switch(action.type) {
    case types.HANDLE_TEXT_CHANGE:
      newState = state.slice();
      newState[data.id] = data.text;
      return newState;
  }



}
