import React, { Component } from 'react';
import Home from './views/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do List</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
