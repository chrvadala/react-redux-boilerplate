import React from 'react';

let OddView = function({number}){
  return (
    <div style={{color: "red", fontSize: "24px"}}>{number}</div>
  )
};

let EvenView = function({number}){
  return (
    <div style={{color: "green", fontSize: "24px"}}>{number}</div>
  )
};


class FormData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleAddNumber = this.handleAddNumber.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleAddNumber() {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.props.addNumber(number);
      this.setState({text: ""})
    }
  }

  render() {
    return (
      <div>
        <input type="text"
               onChange={event => this.handleChange(event)}
               value={this.state.text}
        />
        <button onClick={event => this.handleAddNumber()}>Add Number</button>
      </div>
    )
  }
}

let View = function(props){
  return (
    <div>
      <OddView number={props.odd} />
      <EvenView number={props.even} />
      <FormData addNumber={props.addNumber}/>
    </div>
  )
};



export default View;


//
//let View = function(props){
//  return React.createElement('div', "prova");
//};
