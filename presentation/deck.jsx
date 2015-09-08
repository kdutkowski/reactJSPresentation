import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  react: require("./react.svg")
};

preloader([images.react]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            React.js
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            A ReactJS Framework Research presentation
          </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>By Jakub Dutkowski</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.react} margin="0px auto 40px" height="293px"/>
        </Slide>

        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading>Plan</Heading>
          <List>
            <ListItem><Appear fid="1">What is React?!</Appear></ListItem>
            <ListItem><Appear fid="2">Intro to Flux</Appear></ListItem>
            <ListItem><Appear fid="3">Flux libraries</Appear></ListItem>
            <ListItem><Appear fid="4">Why use it?</Appear></ListItem>
            <ListItem><Appear fid="5">Can I use it with AngularJS?</Appear></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
