import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent/>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className='firstComponent'>
        FirstComponent
      </div>
    );
  }
}

export default App;
