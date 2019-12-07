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
  componentDidMount() {
    this.callBackendAPI()
    .then(res => this.setState({ data: res.Hi }))
    .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await  fetch('/hi', {method:"GET", headers:{"Content-Type":"text/plain"}});
    console.log(await response.body);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body);
    return body;
  };

  render() {
    let page = [(
      <div className="App">
        <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        </div>
        <p className="App-intro">{this.state.data.Hi}</p>
      </div>
    )
  ];
    return page;
    }
}

export default App;
