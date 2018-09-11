import React, { Component } from 'react';
import './App.css';
import TabBar from './Components/TabBar/TabBar.js';
import './images/happydog.png';
import { Route } from 'react-router';
import HomePage from './Components/HomePage/HomePage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
         <h1>Not Your Average Dog Walker</h1>
       </header>
        <HomePage/>
        {/* <div className='happy-dog'>
        </div> */}
       <TabBar />
      </div>
    );
  }
}

export default App;
