import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Welcome to my sharing programing knowledge page
          {' '}
          <code>
Hello world :)
          </code>
        </p>
      </div>
    );
  }
}

export default App;
