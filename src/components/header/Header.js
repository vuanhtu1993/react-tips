import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-light bg-light header">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              className="App-logo"
              width={80}
              height={80}
              alt="logo"
            />
            React
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
