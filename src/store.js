
import {createStore} from 'redux';

let initialState = {
  odd: 0,
  even: 0
};

function addNumber(state, number) {
  let change;
  if (number % 2 === 0) {
    change = {even: state.even + number};
  } else {
    change = {odd: state.odd + number};
  }

  return Object.assign({}, state, change);
}


function reducer(state, action) {
  state = state || initialState;

  switch (action.type) {

    case "ADD_NUMBER":
      return addNumber(state, action.number);

    default:
      return state;
  }
}

let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
let store = createStore(reducer, null, middlewares);

export default store;
