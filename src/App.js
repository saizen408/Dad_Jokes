import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import JokeList from './JokeList';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <JokeList />
        </div>
      </HashRouter>
    );
  }
}

export default App;
