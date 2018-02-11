const initState = [
  'Alex',
  'John',
  'Sam',
  'George',
  'Andrew',
  'Paul',
  'July'
];

const  peopleReducer = (state = initState, action) => {
  if (action.type === 'ADD_NEW_USER') {
    return state.concat(`Alexxxx_${Date.now()}`);
  }
  return state;
};

export default peopleReducer;