import React from 'react'
import ReactDOM from 'react-dom'

// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC'
// import HelloHooks from './components/demo/HelloHooks'
// import App from './components/App'
import Root from './routers'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Root />,
  document.querySelectorAll('.app')[0]
);
