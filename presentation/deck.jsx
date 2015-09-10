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
            <ListItem><Appear fid="5">Do I have to leave AngularJS?</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading>Hello World</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./hello.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading>Another example</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./example2.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading>Main advantages</Heading>
          <List>
            <ListItem><Appear fid="1">Low complexity</Appear></ListItem>
            <ListItem><Appear fid="2">Flexibility</Appear></ListItem>
            <ListItem><Appear fid="3">Easy to use stuff like npm, Browserify (modularity)</Appear></ListItem>
            <ListItem><Appear fid="3">'Native' jsx</Appear></ListItem>
            <ListItem><Appear fid="5">Virtual DOM</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading>Virtual DOM</Heading>
          <Text>Fast in-memory rendering</Text>
          <Text>Propagate changes to DOM with diff</Text>
          <Text>Ability to render server side with no heavy browser DOM</Text>
        </Slide>
        <Slide>
          <Heading>Where are my 'M' and 'C'?</Heading>
        </Slide>
        <Slide>
          <Text>React.js is not really a 'full' framework - more like a view library</Text>
          <Text>But Facebook </Text>
        </Slide>
      </Deck>
    );
  }
}
