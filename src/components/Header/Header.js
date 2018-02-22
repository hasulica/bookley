import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="row">
        <div className="col-lg-3">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>
        </div>
      </header>
    )
  }
}

export default Header;