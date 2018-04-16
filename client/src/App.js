import React, { Component } from 'react';
import './App.css';
import AWSupload from '../src/components/AWSupload/AWSupload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AWS demo app</h1>
        </header>
        <AWSupload />
      </div>
    );
  }
}

export default App;
