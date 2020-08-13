import React from 'react';
import './App.css';

import logo from './logo.png';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    fetch('http://localhost:8153/data')

  }

  render () {
    return (
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <a href="https://www.ir.com/" target="_blank" rel="noopener noreferrer">
              <img className="logo-img" src={logo} alt="IR logo" />
            </a>
          </div>
          {/* <div className="">Prognosis</div> */}
          <div className="header-left first">
            <a className="left" href="google.com" target="_blank" rel="noopener noreferrer">Home</a>
          </div>
          <div className="header-left">
            <a className="left" href="google.com" target="_blank" rel="noopener noreferrer">Reports</a>
          </div>
          <div className="header-left">
            <a className="left" href="google.com" target="_blank" rel="noopener noreferrer">Network</a>
          </div>
          <div className="header-left">
            <a className="left" href="https://www.youtube.com/watch?v=On3vPlqcsLo" target="_blank" rel="noopener noreferrer">Alerts</a>
          </div>
          <div className="header-left right">
            <a className="symbol" href="google.com" target="_blank" rel="noopener noreferrer" ></a>
          </div>
          <div className="header-left right">
            <a className="left" href="http://www.kyleatilley.com/" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
