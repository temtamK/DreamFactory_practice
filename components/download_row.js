import React, { Component } from "react";
// import Table`
import { Table } from "semantic-ui-react";
// import web3
import web3 from "../ethereum/web3";

const Timestamp = require("react-timestamp");

// class based component
class DownloadRow extends Component {
  //
  render() {
    // get required tags
    const { Row, Cell } = Table;
    // shorten the properties
    const { id, download } = this.props;
    return (
      <Row>
        <Cell>{this.props.id}</Cell>
        <Cell>{download.downloader}</Cell>
        <Cell>{web3.utils.fromWei(download.price_wei, "ether")}</Cell>
        <Cell>
          <Timestamp time={download.date} format="full" />
        </Cell>
      </Row>
    );
  }
}

// export the component
export default DownloadRow;
