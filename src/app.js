console.log("Hello!");

import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import store from './store';
import View from './view';
import {addNumberAction} from './actions';


function mapStateToProps(reduxState) {
  return {
    odd: reduxState.odd,
    even: reduxState.even
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNumber: bindActionCreators(addNumberAction, dispatch)
  }
}


let ViewConnected = connect(mapStateToProps, mapDispatchToProps)(View);


ReactDOM.render(
  React.createElement(ViewConnected, {store: store}),
  document.getElementById('app')
);


window.store = store;
window.addNumberAction = addNumberAction;
