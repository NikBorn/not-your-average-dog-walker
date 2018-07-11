import React, { Component } from 'react';
import './App.css';
import TabBar from './Components/TabBar/TabBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
         <h1>Not Your Average Dog Walker</h1>
       </header>

       <TabBar />
      </div>
    );
  }
}

export default App;
