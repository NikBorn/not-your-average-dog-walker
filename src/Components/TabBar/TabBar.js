import React, { Component } from 'react';
import './TabBar.css';

class TabBar extends Component {
  constructor() {
    super();

  }

  render() {
    return(
      <div className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#reviews">reviews</a>
        <a href="#contact">Contact</a>
        <a href="#more">News</a>
      </div>
    )
  }
};

export default TabBar;