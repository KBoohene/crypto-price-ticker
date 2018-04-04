import React, { Component } from 'react';
import './App.css';
import api from './api'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Divider, Header, Container } from 'semantic-ui-react'

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
      <div className="container">
        <Container>
          <Header as='h1' textAlign='center'>
            First Header
          </Header>
          <Divider />
          <Grid columns={2} celled>
            <Grid.Row>
              <Grid.Column>
                BTC: ${this.state.BTC}
              </Grid.Column>
              <Grid.Column>
                ETH: ${this.state.ETH}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                LTC: ${this.state.LTC}
              </Grid.Column>
              <Grid.Column>
                XRP: ${this.state.XRP}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
