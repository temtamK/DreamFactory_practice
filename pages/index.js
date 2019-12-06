// import react
import React, { Component } from "react";
// import DreamFactory instance
import dream_factory from "../ethereum/dream_factory";
// import layout file
import Layout from "../components/layout";
// import Card UI component only
import { Card } from "semantic-ui-react";
// import Button UI component only
import { Button } from "semantic-ui-react";
import { Link } from "../routes";

// class based component
class FactoryIndex extends Component {
  // get initial properties
  // use static to accelerate the rendering.
  // static functions belong not to instance but to class
  static async getInitialProps() {
    // get dream factory instance
    const stories = await dream_factory.methods
      .getDeployedDreamStories()
      .call();
    // Generate array of indices and fill them
    const titles = await Promise.all(
      Array(parseInt(stories.length))
        .fill()
        .map((element, index) => {
          return dream_factory.methods.stories_titles(stories[index]).call();
        })
    );

    return { stories, titles };
  }

  // render card groups to display stories
  renderStories() {
    // map calls the arugment function one time for every element inside stories array
    const items = Object.entries(this.props.stories).map((address, index) => {
      return {
        header: this.props.titles[index],
        description: (
          <Link route={`/dream_stories/${address[1]}`}>
            <a>View Story Details</a>
          </Link>
        ),
        meta: address,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  // render the component
  render() {
    // now whenever the component is rendered, the getInitialProps() is called before.
    // so we can access the stories object
    return (
      <Layout>
        <h3>Dream Stories on slae</h3>
        <Link route="/dream_stories/new_story">
          <Button
            floated="right"
            content="Create a Story"
            icon="add"
            primary={true}
          />
        </Link>
        {this.renderStories()}
        <h3>The number of stories: {this.props.stories.length}</h3>
      </Layout>
    );
  }
}

// export the component so that the next can use this
export default FactoryIndex;
