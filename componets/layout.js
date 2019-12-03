import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./haeder";
import Footer from "./footer";

export default props => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};
