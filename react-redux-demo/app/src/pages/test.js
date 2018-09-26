import React from 'react';

export default class Test extends React.PureComponent {
  state = {
    value: 0
  };

  /**
   * 111 =>  0
     222 =>  0
     333 =>  0
     111回调 =>  1
     222回调 =>  1
     333回调 =>  1
     111 set 回调 =>  2
     111 setTimeout =>  2
     222 set 回调 =>  3
     222 setTimeout =>  3
   */
  componentDidMount() {
    this.setState({value: this.state.value + 1}, () => {
      console.log('111回调 => ', this.state.value);
    });
    console.log('111 => ', this.state.value);

    this.setState({value: this.state.value + 1}, () => {
      console.log('222回调 => ', this.state.value);
    });
    console.log('222 => ', this.state.value);

    this.setState({value: this.state.value + 1}, () => {
      console.log('333回调 => ', this.state.value);
    });
    console.log('333 => ', this.state.value);  // 0

    setTimeout(() => {
      this.setState({value: this.state.value + 1}, () => {
        console.log('111 set 回调 => ', this.state.value);
      });
      console.log('111 setTimeout => ', this.state.value);

      this.setState({value: this.state.value + 1}, () => {
        console.log('222 set 回调 => ', this.state.value);
      });
      console.log('222 setTimeout => ', this.state.value);
    }, 0);
  }

  render() {
    return <div>hhhh</div>;
  }
}
