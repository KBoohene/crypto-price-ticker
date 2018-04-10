import React, { Component } from "react";
import "./App.css";
import api from "./api";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Divider,
  Header,
  Container,
  Menu,
  Input,
  Card
} from "semantic-ui-react";
import { img_32 } from "./crypto-imgs/img_dir";
const crypto_images = require.context("./crypto-imgs", true);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BTC: "",
      ETH: "",
      LTC: "",
      XRP: "",
      DASH: "",
      EOS: "",
      NEO: "",
      BCH: "",
      activeItem: "home"
    };
  }

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });

  //Constant update of crypto prices
  componentDidMount() {
    api.mainApp(data => {
      this.setState({
        BTC: data["BTC"]["USD"]
      });
      this.setState({
        ETH: data["ETH"]["USD"]
      });
      this.setState({
        LTC: data["LTC"]["USD"]
      });
      this.setState({
        XRP: data["XRP"]["USD"]
      });
      this.setState({
        BCH: data["BCH"]["USD"]
      });
      this.setState({
        NEO: data["NEO"]["USD"]
      });
      this.setState({
        DASH: data["DASH"]["USD"]
      });
      this.setState({
        EOS: data["EOS"]["USD"]
      });
    });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div className="container">
        <img alt="bch-32-icon" src={crypto_images(img_32.black.bch)} />
        <Menu secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container>
          <Header as="h1" textAlign="center">
            Top 8 Cryptos
          </Header>
          <Divider />
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> BTC: $ {this.state.BTC} </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> ETH: $ {this.state.ETH} </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> LTC: $ {this.state.LTC} </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> XRP: $ {this.state.XRP} </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> DASH: $ {this.state.DASH} </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> NEO: $ {this.state.NEO} </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> BCH: $ {this.state.BCH} </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content> EOS: $ {this.state.EOS} </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
