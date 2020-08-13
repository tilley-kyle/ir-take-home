import React from 'react';
import './App.css';

import logo from './logo.png';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render () {
    return (
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <a href="https://www.ir.com/" >
              <img className="logo-img" src={logo} alt="IR logo" />
            </a>
          </div>
          {/* <div className="">Prognosis</div> */}
          <div className="header-left first">
            <a className="left" href="google.com">Home</a>
          </div>
          <div className="header-left">
            <a className="left" href="google.com">Reports</a>
          </div>
          <div className="header-left">
            <a className="left" href="google.com">Network</a>
          </div>
          <div className="header-left">
            <a className="left" href="google.com">Alerts</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
