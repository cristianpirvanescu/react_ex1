import React, { Component } from 'react';

class Button extends Component {
  // constructor(props){
  //   super(props);
  //   this.handleRequestOpen = this.handleRequestOpen.bind(this)    
  // }
  state = {counter : 0}
  // handleClick = () =>{
  //   this.setState({
  //     counter : this.state.counter += 1
  //   }) 
  // };
  handleClick = () =>{
    this.setState((prevState)=>({ counter : prevState.counter += 1})) 
  };

  render() {
    return (
      <div>
        <button style={btnStyle} className="btn" onClick={this.handleClick}>+{this.state.counter}</button>
      </div>
    );
  }
}

var btnStyle = {
  width: '100px'
};

export default Button;
