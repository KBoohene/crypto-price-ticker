import React, { Component } from 'react';
import './App.css';
import api from './api'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'BTC':'',    
      'ETH':'',
      'LTC':''
    }
  }

  componentDidMount(){
    api.mainApp((data)=>{
      this.setState({"BTC":data['BTC']['USD']})
      this.setState({"ETH":data['ETH']['USD']})
      this.setState({"LTC":data['LTC']['USD']})
    })
  }
  render() {
    return (
      <div>
        <p>BTC: {this.state.BTC}</p>
        <p>ETH: {this.state.ETH}</p>
        <p>LTC: {this.state.LTC}</p>
      </div>
    );
  }
}

export default App;
