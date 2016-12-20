import React, {PropTypes} from 'react';
import FormData from './form-data';
import Count from './count';

const STYLE = {
  margin: "20px"
};

export default function Main({state, addNumber}) {
  return (
    <div style={STYLE}>
      <Count value={state.count}/>
      <FormData addNumber={addNumber}/>
    </div>
  )
}

Main.propTypes = {
  state: PropTypes.object.isRequired,
  addNumber: PropTypes.func.isRequired
};


