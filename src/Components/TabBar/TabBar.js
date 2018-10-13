import React, { Component } from 'react';
import './TabBar.css';

class TabBar extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/reviews">Reviews</a>
        <a href="/contact">Contact</a>
        <a href="/connect"
           onClick={()=>{
             console.log('MORE!!!')
           }}        
        >Connect</a>
      </div>
    )
  }
};

export default TabBar;