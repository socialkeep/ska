import * as types from './actionTypes';

export const handleTextChange = (data) => ({
  type: types.HANDLE_TEXT_CHANGE,
  payload: data
});

// export const handleLogin = () => ({
//   type: types.HANDLE_LOGIN,
// })

export const handleSelectFilter = (id) => (
  fetch(`/${id}`,{
    method:'GET',
  })
  .then(
    res => res.json())
  .then((result) => {
    
    const data = {
      cardData: result,
      status: id
    }
    return {
      type: types.SELECT_FILTER,
      payload: data
    }
    console.log(result);
    // const fav = JSON.parse(result);
  });








// export const addSocialMediaPost = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })

