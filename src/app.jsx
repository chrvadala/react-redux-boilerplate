import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Main from './ui/main';
import * as actions from './actions';

function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
