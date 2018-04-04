import React, { Component } from 'react';
import './App.css';
import api from './api'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react'

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
        <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Card>
              BTC: {this.state.BTC}
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              ETH: {this.state.ETH}
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card>
              LTC: {this.state.LTC}
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              XRP: {this.state.XRP}
            </Card>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
