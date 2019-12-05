import React from "react";
import { Menu, Input } from "semantic-ui-react";
//import Link from routes.js
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">DreamChain</a>
      </Link>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Link route="/">
          <a className="item">Dream Stories</a>
        </Link>
        <Link route="/dream_stories/new_story">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
