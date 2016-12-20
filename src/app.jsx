import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Main from './ui/main';
import {addNumberAction} from './actions';

function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNumber: bindActionCreators(addNumberAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
