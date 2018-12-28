import React from 'react';

export default class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleResize = () => {
    console.log('class demo resize')
  }

  componentDidMount () {
    document.title = `You clicked ${this.state.count} times`

    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        <button onClick={() => this.setState(preState => ({ count: preState.count + 1 }))}>+</button>
        <button onClick={() => this.setState(preState => ({ count: preState.count - 1 }))}>-</button>
      </div>
    );
  }
}
