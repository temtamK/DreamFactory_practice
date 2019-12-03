// import react
import React, { Component } from "react";
// import DreamFactory instance
import dream_factory from "../ethereum/dream_factory";
// import layout file
import Layout from "../componets/layout";
// import Card UI component only
import { Card } from "semantic-ui-react";
// import Button UI component only
import { Button } from "semantic-ui-react";

// class based component
class FactoryIndex extends Component {
  // get initial properties
  // use static to accelerate the rendering.
  // static functions belong not to instance but to class
  static async getInitialProps() {
    const stories = await dream_factory.methods
      .getDeployedDreamStories()
      .call();
    // return stories object
    // if we use ES6 code the following can be condensed to return { stories }
    return { stories: stories };
  }

  // render card groups to display stories
  renderStories() {
    // map calls the arugment function one time for every element inside stories array
    // fluid option is to extend the component
    const items = this.props.stories.map(address => {
      return {
        header: address,
        description: <a>View Story</a>,
        fluid: true
      };
    });

    return <Card.Group items={items}></Card.Group>;
  }

  // render the component
  render() {
    // now whenever the component is rendered, the getInitialProps() is called before.
    // so we can access the stories object
    return (
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
          ></link>
          <h3>Dream Stories on slae</h3>

          <Button
            floated="right"
            content="Create a Story"
            icon="add"
            primary={true}
          />
          {this.renderStories()}
        </div>
      </Layout>
    );
  }
}

// export the component so that the next can use this
export default FactoryIndex;
