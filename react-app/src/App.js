import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  handleAdd = () => {
    const { count } = this.state
    this.state.count = count + 1
    console.log('加法：', this.state.count)
  }

  handleSubtract = () => {
    const { count } = this.state
    this.setState({
      count: count - 1
    })
    console.log('减法：', this.state.count)
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <button onClick={this.handleAdd}>+</button>&nbsp;&nbsp;
          <span>{this.state.count}</span>&nbsp;&nbsp;
          <button onClick={this.handleSubtract}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
