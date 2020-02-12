import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/wechat.png'
import moto from './images/moto.jpg'
import { a } from './tree-shaking'
import '../../common'

import './search.less'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Text: null
    }
  }

  loadComponent () {
    import('./text.js').then((Text) => {
      this.setState({ Text: Text.default })
    })
  }

  render () {
    console.log(a())
    const { Text } = this.state

    return (
      <>
        <div className='search-text'>
          {
            Text ? <Text /> : null
          }
          Search Text
          <img src={logo} onClick={this.loadComponent.bind(this)} />
        </div>
        <img src={moto} />
      </>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
