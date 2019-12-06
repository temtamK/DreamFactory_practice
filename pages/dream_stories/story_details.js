// import react
import React, { Component } from "react";
// import layout
import Layout from "../../components/layout";
// import DreamStory instance
import dream_story from "../../ethereum/dream_story";
// import Form, Button from semantic-ui-react
import { Card, Icon } from "semantic-ui-react";
// import Grid, Input, Form, Message, Button
import { Grid, Input, Form, Message, Button } from "semantic-ui-react";
// import Container and Header
import { Container, Header } from "semantic-ui-react";
//import route helper
import { Link, Router } from "../../routes";

// class based component
class StoryDetails extends Component {
  //state for form input and error message
  state = {
    title: "",
    story: "",
    min_down_price: "",
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
    // return the summary with labels
    return {
      address: props.query.address,
      balance: summary[0],
      votes_count: summary[1],
      downloads_count: summary[2],
      min_down_price_wei: summary[3],
      approvers_count: summary[4],
      author: summary[5],
      story_title: summary[6],
      story: summary[7]
    };
  }

  renderActionButtons() {
    return (
      <Form onSubmit={this.onContribute} error={!!this.state.error_msg}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            placeholder="0.001"
            value={this.state.contribute_price}
            onChange={event =>
              this.setState({ contribute_price: event.target.value })
            }
          />
        </Form.Field>
        <Message error header="Failed!" content={this.state.error_msg} />
        <Button loading={this.state.loading} primary>
          Contribute
        </Button>
        <p></p>
        <Link route={`/dream_stories/${this.props.address}/downloads_list`}>
          <a>
            <Button primary>View Downloads</Button>
          </a>
        </Link>
        <p></p>
        <Link route={`/dream_stories/${this.props.address}/request_download`}>
          <a>
            <Button primary>Request Download</Button>
          </a>
        </Link>
      </Form>
    );
  }

  // event handler for contribute button
  onContribute = async () => {
    // block default submitting the form
    event.preventDefault();
    // set button loading and clear error message
    this.setState({ loading: true, error_msg: "" });
    // catch any error while executing the following
    try {
      // get all accounts of a user and use the accounts[0] to contribute
      const accounts = await web3.eth.getAccounts();
      // get the DreamStory instance of the address
      const story = dream_story(this.props.address);
      // convert contribute price to wei
      const contribute_price_wei = web3.utils.toWei(
        this.state.contribute_price,
        "ether"
      );
      // call contribute function using the user's first account
      // use metamask's functinality to estimate the gas limit
      await story.methods.contribute().send({
        from: accounts[0],
        value: contribute_price_wei
      });
      // refresh the current page, so the getInitialProps re-runs
      Router.replaceRoute(`/dream_stories/${this.props.address}`);
    } catch (error) {
      this.setState({ error_msg: error.message });
    }
    // clear loading
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h2>Story Details</h2>
        <Grid>
          <Grid.Column width={10}>
            <Container text>
              <Header as="h3">{this.props.story_title}</Header>
              <p>{this.props.story}</p>
            </Container>
          </Grid.Column>
          <Grid.Column width={6}>
            <Card>
              <Card.Content header="Statistics" />
              <Card.Content extra>
                <Icon name="dollar sign" />
                {this.props.balance} (balance, ether)
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
                {this.props.min_down_price} (download price, ether )
              </Card.Content>
            </Card>
            {this.renderActionButtons()}
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

// export the component
export default StoryDetails;
