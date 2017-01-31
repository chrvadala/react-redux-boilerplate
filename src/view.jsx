import React, {PropTypes} from 'react';

const STYLE = {
  margin: "20px",
  fontSize: "20px"
};

export default function View({state, actions}) {
  let onChangeInput = event => {
    let number = parseInt(event.target.value);
    if (!isNaN(number)) {
      actions.setCurrentNumber(number);
    }
  };

  let onSubmit = event => {
    actions.doSum();
    event.preventDefault();
  };

  return (
    <div style={STYLE}>
      <div>{state.total} +</div>
      <form onSubmit={onSubmit}>
        <input value={state.currentNumber} onChange={onChangeInput}/>
        <button type="submit">=</button>
      </form>
    </div>
  );
}

View.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

