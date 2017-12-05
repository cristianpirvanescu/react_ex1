import React, { Component } from 'react';

class Button2 extends Component {
  state = {counter : 0}
  handleClick = () =>{
    this.props.btnClick(this.props.valToIncrement);
  }
  render() {
    return (
      <div>
        <button style={btnStyle} className="btn" onClick={this.handleClick}>increment by: {this.props.valToIncrement}</button>
      </div>
    );
  }
}

var btnStyle = {
  width: '100px'
};

export default Button2;
