import React, { Component } from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bookley</h1>
      </header>
    )
  }
}

export default Header;