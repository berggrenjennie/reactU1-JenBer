import React, { Component } from 'react';
import './App.css';
import DashBoardComponent from './components/DashBoardComponent';


class App extends Component {

  render() {
    return (
      <div className="App">
      <DashBoardComponent className="flex-container"/>
      </div>
    );
  }
}

export default App;
