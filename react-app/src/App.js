import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.timer = null
    this.state = {
      data: ''
    }
  }
  componentDidMount() {
    // this.updateUI()
  }

  fetchData() {
    if (!this.timer) {
      return
    }

    window.fetch('http://localhost:3001')
      .then(response => {
        console.log(response)
        return response.text()
      })
      .then(data => {
        console.log('data => ', data)
        this.setState({ data: this.state.data + data })
      })
  }

  updateUI() {
    this.timer = setInterval(() => {
      this.fetchData()
    }, 300)
  }

  render() {
    return (
      <div className="App">
        abc
        <div ref="content" dangerouslySetInnerHTML={{ __html: this.state.data }}></div>
      </div>
    );
  }
}

export default App;
