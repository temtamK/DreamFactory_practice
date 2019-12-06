import React, { Component } from "react";
import DownloadRow from "../../components/download_row";
import Layout from "../../components/layout";
import dream_story from "../../ethereum/dream_story";
import { Table, Button } from "semantic-ui-react";
import { Link } from "../../routes";

class DownloadsList extends Component {
  static async getInitialProps(props) {
    // get the contract address from url
    // this expression is to just get the address from props.query object
    const { address } = props.query;
    // get DreamStory instance
    const story = dream_story(address);
    // get the number of downloads`
    const downloads_count = await story.methods.getDownloadsCount().call();
    // get the download struct instance one by one
    const downloads = await Promise.all(
      // Generate array of indices and fill them
      Array(parseInt(downloads_count))
        .fill()
        .map((element, index) => {
          return story.methods.downloads(index).call();
        })
    );
    return { address, downloads, downloads_count };
  }

  // render all download rows
  renderDownloadRows() {
    return this.props.downloads.map((download, index) => {
      return (
        <DownloadRow
          key={index}
          id={index}
          download={download}
          address={this.props.address}
        />
      );
    });
  }

  render() {
    // get required tags at once from Table
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h2>Downloads List</h2>
        <Link route={`/dream_stories/${this.props.address}/request_download`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              Request Download
            </Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Downloader</HeaderCell>
              <HeaderCell>Download Price</HeaderCell>
              <HeaderCell>Date</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderDownloadRows()}</Body>
        </Table>
        <p>{this.props.downloads_count} Downloads</p>
      </Layout>
    );
  }
}

export default DownloadsList;
