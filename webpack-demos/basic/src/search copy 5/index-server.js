// import React from 'react'
// import logo from './images/wechat.png'
// import '../../common'
// import './search.less'
const React = require('react')
const logo = require('./images/wechat.png')
require('../../common')
require('./search.less')

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
    const { Text } = this.state

    return (
      <div className='search-text'>
        {
          Text ? <Text /> : null
        }
        Search Text
        <img src={logo.default} onClick={this.loadComponent.bind(this)} />
      </div>
    )
  }
}

module.exports = <Search />
