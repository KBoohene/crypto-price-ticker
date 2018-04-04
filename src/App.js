import React, { Component } from 'react';
import './App.css';
import api from './api'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'BTC':'',    
      'ETH':'',
      'LTC':'',
      'XRP':''
    }
  }

  componentDidMount(){
    api.mainApp((data)=>{
      this.setState({"BTC":data['BTC']['USD']})
      this.setState({"ETH":data['ETH']['USD']})
      this.setState({"LTC":data['LTC']['USD']})
      this.setState({"XRP":data['XRP']['USD']})
    })
  }
  render() {
    return (
      <div>
        <h1>Prices</h1>
        <p>BTC: {this.state.BTC}</p>
        <p>ETH: {this.state.ETH}</p>
        <p>LTC: {this.state.LTC}</p>
        <p>XRP: {this.state.XRP}</p>
      </div>
    );
  }
}

export default App;
