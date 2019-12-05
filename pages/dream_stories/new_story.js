//import React
import React, { Component } from "react";
//import Form, Button from semantic-ui-react
import { Form, Button, Input, TextArea, Message } from "semantic-ui-react";
//import loyout
import Layout from "../../componets/layout";
//import DreamFactory
import dream_factory from "../../ethereum/dream_factory";
//import web3
import web3 from "../../ethereum/web3";
//import route helper
import { Router } from "../../routes";

//class based componet
class NewDreamStory extends Component {
  //state for form input and error message
  state = {
    title: "",
    story: "",
    min_down_price: "",
    error_msg: "",
    loading: false
  };

  //event handler for create button
  onCreate = async () => {
    //block defalut submitting the form
    event.preventDefault();
    //set button loading and clear error message
    this.setState({ loading: true, error_msg: "" });
    //catch any error while executing the following
    try {
      //get all accounts and use the accounts[0] to create a Dreamstory
      const accounts = await web3.eth.getAccounts(console.log);
      //convert minimum download price to wei
      const min_down_pirce_wei = web3.utils.toWei(
        this.state.min_down_price,
        "ether"
      );
      //call createDreamStory of DreamFactory
      //use metamsk's functionality to estimate the gas limit
      await dream_factory.methods
        .createDreamStory(
          min_down_pirce_wei,
          this.state.title,
          this.state.story
        )
        .send({
          from: accounts[0]
        });
      //redirect to the index page
      Router.pushRoute("/");
    } catch (error) {
      this.setState({ error_msg: error.message });
    }
    //clear loading
    this.setState({ loading: false });
  };
  //render
  render() {
    return (
      <Layout>
        <Form onSubmit={this.onCreate} error={!!this.state.error_msg}>
          <Form.Group>
            <Form.Field width={12}>
              <label>Create a Dream Story</label>
              <Input
                placeholder="Title"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
              ></Input>
            </Form.Field>
            <Form.Field width={4}>
              <label>Minimum Download Price</label>
              <Input
                label="ether"
                labelPosition="right"
                placeholder="0.001"
                value={this.state.min_down_price}
                onChange={event =>
                  this.setState({ min_down_price: event.target.value })
                }
              ></Input>
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field width={12}>
              <TextArea
                label="Creat a Dream Story"
                placeholder="Tell us about your dream story"
                style={{ minHeight: 300 }}
                value={this.state.story}
                onChange={event => this.setState({ story: event.target.value })}
              ></TextArea>
            </Form.Field>
          </Form.Group>
          <Message
            error
            header="Failed!"
            content={this.state.error_msg}
          ></Message>
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default NewDreamStory;
