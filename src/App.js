import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button1 from './Button1';
import Button2 from './Button2';
import Button2Result from './Button2Result';


class App extends Component {
  state = {
    clickCounter:0,
    clickCounter2 : 0
  };
  handleBtnClick = () =>{
    this.setState((prevState) => ({clickCounter: prevState.clickCounter + 1}))
  }
  handleBtnClick2 = (valToIncrement) =>{
    console.log(valToIncrement);
    this.setState((prevState) => ({clickCounter2: prevState.clickCounter2 + valToIncrement}))
  }
  render() {
    const {clickCounter, clickCounter2} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button/>
        <Button1 btnClick={this.handleBtnClick} currentValue={clickCounter} />
        <Button2 btnClick={this.handleBtnClick2} valToIncrement={5} />
        <Button2Result currentValue={clickCounter2}/>
      </div>
    );
  }
}

export default App;
