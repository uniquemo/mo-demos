import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/wechat.png'
import { a } from './tree-shaking'
import '../../common'

import './search.less'

class Search extends React.Component {
  render () {
    console.log(a())

    return (
      <div className='search-text'>
        Search Text
        <img src={logo} />
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
