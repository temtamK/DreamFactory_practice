import React from "react";
import { Menu, Input } from "semantic-ui-react";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item>DreamChain</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item>Dream Stories</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
