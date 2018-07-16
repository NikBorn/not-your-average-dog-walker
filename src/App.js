import React, { Component } from 'react';
import './App.css';
import TabBar from './Components/TabBar/TabBar.js';
import './images/happydog.png';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
         <h1>Not Your Average Dog Walker</h1>
       </header>
       <div className='main-section'>
        <h2>Let's Run!</h2>
        <p>Most dogs benefit enormously from daily aerobic exercise (exercise that makes them pant, like fetch, tug, running and swimming), as well as at least one half-hour walk. I will help you choose activities that suit your dog’s individual personality and natural interests. Every dog has different needs.</p>
        <button>Schedule Dog Walk</button>
       </div>
        <div className='happy-dog'>
        </div>
       <TabBar />
      </div>
    );
  }
}

export default App;
