import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

import Test from './pages/test';

let store = createStore(todoApp);

// {todos: [], visibilityFilter: "SHOW_ALL"}
// console.log('store.getState() ==> ', store.getState());

const App = (
  <Provider store={store}>
    <div>
      <Sidebar />
      <Test />
    </div>
  </Provider>
);

// 注意：这里是App，而不是<App />
ReactDOM.render(App, document.querySelector('#root'));
