import React, { Component } from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

interface State {
  count: number
}

class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  }

  static defaultProps = {
    firstName: '',
    lastName: ''
  }

  render () {
    const { count } = this.state

    return (
      <>
        <p>你点击了 {this.state.count} 次</p>
        <Button onClick={() => this.setState({ count: count + 1 })}>Hello {this.props.name}</Button>
      </>
    )
  }
}

export default HelloClass
