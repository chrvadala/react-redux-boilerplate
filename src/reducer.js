import {Record} from 'immutable';

const AppState = Record({
  total: 0,
  currentNumber: 0
}, 'AppState');


function doSum(state) {
  let {total, currentNumber} = state;

  return state.merge({
    'total': total + currentNumber,
    'currentNumber': 0
  })
}

function setCurrentNumber(state, {number}) {
  return state.set('currentNumber', number);
}


export default function reducer(state, action) {

  state = state || new AppState();
  let {type, ...options} = action;

  switch (type) {
    case "DO_SUM":
      return doSum(state);

    case "SET_CURRENT_NUMBER":
      return setCurrentNumber(state, options);

    default:
      return state;
  }
}
