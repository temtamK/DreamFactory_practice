import React, { Component } from "react";
// import Form, Button from semantic-ui-react
import { Card, Icon } from "semantic-ui-react";
// import Grid, Input, Form, Message, Button
import { Grid, Input, Form, Message, Button } from "semantic-ui-react";
// import Container and Header
import { Container, Header } from "semantic-ui-react";
// import Link, Router
import { Link, Router } from "../../routes";
// import layout
import Layout from "../../components/layout";
// import DreamStory instance
import dream_story from "../../ethereum/dream_story";
// import web3
import web3 from "../../ethereum/web3";

class RequestDownload extends Component {
  // state for form inputs
  state = {
    down_price: "",
    error_msg: "",
    loading: false
  };

  // get initial properties
  // the DreamStory address can be obtained from the argument props using the url
  // since the url includes the contract address
  static async getInitialProps(props) {
    // get the DreamStory instance of the address
    const story = dream_story(props.query.address);
    // get summary of the story
    const summary = await story.methods.getSummary().call();
    // get author's balance
    const author_balance = await web3.eth.getBalance(summary[5]);
    // return the summary with labels
    return {
      address: props.query.address,
      balance: web3.utils.fromWei(summary[0], "ether"),
      author_balance: web3.utils.fromWei(author_balance, "ether"),
      votes_count: summary[1],
      downloads_count: summary[2],
      min_down_price: web3.utils.fromWei(summary[3], "ether"),
      approvers_count: summary[4],
      author: summary[5],
      story_title: summary[6],
      story: summary[7]
    };
  }

  // event handler for download button
  onDownload = async () => {
    // block default submitting the form
    event.preventDefault();
    // set button loading and clear error message
    this.setState({ loading: true, error_msg: "" });
    // catch any error while executing the following
    try {
      // get all accounts of a user and use the accounts[0] to download
      const accounts = await web3.eth.getAccounts();
      // get the DreamStory instance of the address
      const story = dream_story(this.props.address);
      // convert download price to wei
      const down_price_wei = web3.utils.toWei(this.state.down_price, "ether");
      // call download function using the user's first account
      // use metamask's functinality to estimate the gas limit
      await story.methods.download().send({
        from: accounts[0],
        value: down_price_wei
      });
      // redirect to the download list page
      Router.replaceRoute(
        `/dream_stories/${this.props.address}/downloads_list`
      );
    } catch (error) {
      this.setState({ error_msg: error.message });
    }
    // clear loading
    this.setState({ loading: false });
  };

  renderActionButtons() {
    return (
      <Form onSubmit={this.onDownload} error={!!this.state.error_msg}>
        <Form.Field>
          <label>Amount to pay for Download</label>
          <Input
            label="ether"
            labelPosition="right"
            placeholder="0.001"
            value={this.state.down_price}
            onChange={event =>
              this.setState({ down_price: event.target.value })
            }
          />
        </Form.Field>
        <Message error header="Failed!" content={this.state.error_msg} />
        <Button loading={this.state.loading} primary>
          Download
        </Button>
        <p></p>
        <Link route={`/dream_stories/${this.props.address}/downloads_list`}>
          <a>
            <Button primary>View Downloads</Button>
          </a>
        </Link>
      </Form>
    );
  }

  // render
  render() {
    return (
      <Layout>
        <h2>Request Download</h2>
        <Grid>
          <Grid.Column width={10}>
            <Container text>
              <Header as="h3">{this.props.story_title}</Header>
              <p>{this.props.story}</p>
            </Container>
          </Grid.Column>
          <Grid.Column width={6}>
            <Card>
              <Card.Content header="Story Statistics" />
              <Card.Content extra>
                <Icon name="dollar sign" />
                {this.props.author_balance} (author balance)
              </Card.Content>
              <Card.Content extra>
                <Icon name="dollar sign" />
                {this.props.balance} (balance)
              </Card.Content>
              <Card.Content extra>
                <Icon name="user" />
                {this.props.votes_count} (votes)
              </Card.Content>
              <Card.Content extra>
                <Icon name="download" />
                {this.props.downloads_count} (downloads)
              </Card.Content>
              <Card.Content extra>
                <Icon name="cart arrow down" />
                {this.props.min_down_price} (minimum download price )
              </Card.Content>
            </Card>
            {this.renderActionButtons()}
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default RequestDownload;
