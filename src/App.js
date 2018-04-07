import React, { Component } from 'react';
import './App.css';
import api from './api'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Divider, Header, Container, Menu, Input } from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'BTC':'',    
      'ETH':'',
      'LTC':'',
      'XRP':'',
      'activeItem':'home',
    }
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  //Constant update of crypto prices
  componentDidMount(){
    api.mainApp((data)=>{
      this.setState({"BTC":data['BTC']['USD']});
      this.setState({"ETH":data['ETH']['USD']});
      this.setState({"LTC":data['LTC']['USD']});
      this.setState({"XRP":data['XRP']['USD']});
    })
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div className="container">
        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container>
          <Header as='h1' textAlign='center'>
            First Header
          </Header>
          <Divider />
          <Grid columns={4} celled>
            <Grid.Row>
              <Grid.Column>
                BTC: ${this.state.BTC}
              </Grid.Column>
              <Grid.Column>
                ETH: ${this.state.ETH}
              </Grid.Column>
              <Grid.Column>
                LTC: ${this.state.LTC}
              </Grid.Column>
              <Grid.Column>
                XRP: ${this.state.XRP}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                Dash: $
              </Grid.Column>
              <Grid.Column>
                NEO: $
              </Grid.Column>
              <Grid.Column>
                BCH: $
              </Grid.Column>
              <Grid.Column>
                EOS: $
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
