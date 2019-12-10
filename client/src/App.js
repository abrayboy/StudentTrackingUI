import React from 'react';
import logo from './assets/logo.svg';
import './style/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:{}
    };
  }

  render() {
    let page = [(
      <div className="App" key="1">
        <div className="App-header" key="2">
          <img src={logo} className="App-logo" alt="logo" key="3"/>
          <p key="4">
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    )
  ];
    return page;
    }
}

export default App;
