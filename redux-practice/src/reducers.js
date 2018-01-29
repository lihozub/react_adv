import { combineReducers } from 'redux';

const userState = ['@jack123', '@alex1989', 'chris'];
const messagesState = [
  {
    text: "Hello world!",
    datetime: 1517087851175,
    author: "@alex1989"
  },
  {
    text: "Hi, Alex",
    datetime: 1517087891175,
    author: "@chris"
  }
];

const usersReducer = (state = userState, action) => {
  if(action.type === 'ADD_NEW_USER') {
    return state.concat(action.username);
  }
  return state;
};

const messagesReducer = (state = messagesState, action) => {
  if(action.type === 'ADD_NEW_MESSAGE') {
    return state.concat({
      text: action.text,
      datetime: action.datetime,
      author: action.author
    });
  }
  return state;
};

export default combineReducers({
  usersReducer,
  messagesReducer
});