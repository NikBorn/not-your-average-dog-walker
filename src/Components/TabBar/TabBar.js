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
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#contactz">ContactZ</a>

      </div>
    )
  }
};

export default TabBar;