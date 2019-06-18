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
        <div>
          <button onClick={this.handleAdd}>+</button>&nbsp;&nbsp;
          <span>{this.state.count}</span>&nbsp;&nbsp;
          <button onClick={this.handleSubtract}>-</button>
        </div>

        <User userId={1} />
        <User userId={2} />
      </div>
    );
  }
}

class User extends Component {
  componentDidMount () {
    console.log('userId => ', this.props.userId)
  }
}

export default App;
