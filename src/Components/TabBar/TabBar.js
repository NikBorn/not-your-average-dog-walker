import React, { Component } from 'react';
import './TabBar.css';

class TabBar extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="TabBar">
        <div className="tab tab-one">
        X
        </div>     
        <div className="tab tab-two">
        X
        </div>
        <div className="tab tab-three">
        X
        </div>
        <div className="tab tab-four">
        X
        </div>
      </div>
    )
  }
};

export default TabBar;