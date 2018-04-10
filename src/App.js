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
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img
                        alt="btc-32-color"
                        src={crypto_images(img_32.color.btc)}
                      />
                    </span>
                    <span>BTC: $ {this.state.BTC}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img alt="" src={crypto_images(img_32.color.eth)} />
                    </span>
                    <span>ETH: $ {this.state.ETH}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img alt="" src={crypto_images(img_32.color.ltc)} />
                    </span>
                    <span> LTC: $ {this.state.LTC}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img alt="" src={crypto_images(img_32.color.xrp)} />
                    </span>
                    <span>XRP: $ {this.state.XRP}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img alt="" src={crypto_images(img_32.color.dash)} />
                    </span>
                    <span>DASH: $ {this.state.DASH}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img alt="" src={crypto_images(img_32.color.neo)} />
                    </span>
                    <span>NEO: $ {this.state.NEO}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img alt="" src={crypto_images(img_32.color.bch)} />
                    </span>
                    <span>BCH: $ {this.state.BCH}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid raised>
                  <Card.Content>
                    <span style={styles.crypto_imgs}>
                      <img alt="" src={crypto_images(img_32.color.eos)} />
                    </span>
                    <span>EOS: $ {this.state.EOS}</span>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

let styles = {
  crypto_imgs: {
    padding: 10
  }
};

export default App;
