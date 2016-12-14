import {Record} from 'immutable';

const AppState = Record({
  count: 0
}, 'AppState');


function addNumber(state, number) {
  return state.set('count', number + state.count);
}

export default function reducer(state, action) {
  state = state || new AppState();

  switch (action.type) {
    case "ADD_NUMBER":
      return addNumber(state, action.number);

    default:
      return state;
  }
}
