import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import FirstComponent, { SecondComponent } from './components/learning-examples/FirstComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
      </div>
    );
  }
}

//Function Component
function ThirdComponent () {
  return (
  <div>
    Third Component
  </div>);
}

export default App;
