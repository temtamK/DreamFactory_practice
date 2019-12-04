//import react
import React from "react";
//import Contrainer
import { Container } from "semantic-ui-react";
//import header.js
import Header from "./haeder";
//import Footer.js
import Footer from "./footer";
//import <head> tag of next
import Head from "next/head";

//functional component
export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
        ></link>
      </Head>

      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};
