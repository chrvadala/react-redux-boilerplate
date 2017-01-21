import React, {PropTypes} from 'react';
import FormData from './form-data';
import Count from './count';

const STYLE = {
  margin: "20px"
};

export default function Main({state, actions}) {
  return (
    <div style={STYLE}>
      <Count value={state.count}/>
      <FormData addNumber={actions.addNumberAction}/>
    </div>
  )
}

Main.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};


