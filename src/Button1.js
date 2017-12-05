import React, { Component } from 'react';

class Button1 extends Component {
  state = {counter : 0}
  handleClick = () =>{
    this.props.btnClick();
  }
  render() {
    return (
      <div>
        <button style={btnStyle} className="btn" onClick={this.handleClick}>+{this.props.currentValue}</button>
      </div>
    );
  }
}

var btnStyle = {
  width: '100px'
};

export default Button1;
