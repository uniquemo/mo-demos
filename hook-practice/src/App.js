import React from 'react';
import HookDemo from './components/HookDemo'
import ClassDemo from './components/ClassDemo'
import { Comp1, Comp2 } from './components/CustomHook'
import ReducerCounter from './components/ReducerDemo'
import OrderDemo from './components/OrderDemo'

class App extends React.PureComponent {
  render () {
    return <div>
      <div>
        <div>HookDemo</div>
        <HookDemo />
      </div>

      <hr />

      <div>
        <div>ClassDemo</div>
        <ClassDemo />
      </div>

      <hr />

      <div>
        <div>Custom Hook</div>
        <Comp1 />
        <Comp2 />
      </div>

      <hr />

      <div>
        <div>Reducer Demo</div>
        <ReducerCounter />
      </div>

      <hr />

      <div>
        <div>Order Demo</div>
        <OrderDemo />
      </div>
    </div>
  }
}

export default App;
