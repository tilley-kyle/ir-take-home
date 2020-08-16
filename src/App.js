import React from 'react';
import './App.css';

import SystemDetails from './components/SystemDetails';

import logo from './logo.png';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: {},
    }
  }

  componentDidMount() {
    fetch('http://localhost:8153/data')
    .then((response) => {
      return response.json();
    })
    .then(async (data) => {
      await this.setState({ status: data });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    const { status } = this.state;
    return (
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <a href="https://www.ir.com/" target="_blank" rel="noopener noreferrer">
              <img className="logo-img" src={logo} alt="IR logo" />
            </a>
          </div>
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
            <a className="left" href="http://www.kyleatilley.com/" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </div>
        </div>
        <div className="body-container">
          <SystemDetails status={status} />
        </div>
      </div>
    );
  }
}

export default App;
