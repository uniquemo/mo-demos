import React, { Component } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import badMutable from 'dayjs/plugin/badMutable';
import './App.css';

dayjs.extend(relativeTime);
dayjs.extend(badMutable);

class App extends Component {
  render() {
    return (
      <div className="App">
        {dayjs(new Date(1588262400000)).fromNow()}
      </div>
    );
  }
}

export default App;
