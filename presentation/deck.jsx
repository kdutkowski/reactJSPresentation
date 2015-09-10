import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  react: require("./react.svg"),
  flux: require("./flux.png"),
  reflux: require("./reflux.png"),
  flux2: require("./flux2.png")
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
            <ListItem><Appear fid="3">Flux</Appear></ListItem>
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
            <ListItem><Appear fid="2">One-way data flow</Appear></ListItem>
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
          <Text>But Facebook proposed Flux and gave a reference implementation</Text>
        </Slide>
        <Slide>
          <Heading>Flux</Heading>
          <Image src={images.flux} margin="0px auto 40px" height="293px"/>
        </Slide>
        <Slide>
          <Heading>Flux 2</Heading>
          <Image src={images.flux2} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide>
          <Heading>ReFlux</Heading>
          <Image src={images.reflux} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide>
          <Heading>Other fantastic libraries that come alongside</Heading>
          <List>
            <ListItem><Appear fid="1">Jest - a better Jasmine</Appear></ListItem>
            <ListItem><Appear fid="2">React-router</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Why use React.js?</Heading>
          <List>
            <ListItem><Appear fid="1">A massive speedup compared to other frameworks</Appear></ListItem>
            <ListItem><Appear fid="2">Simplicity</Appear></ListItem>
            <ListItem><Appear fid="2">...</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Things to come</Heading>
        </Slide>
        <Slide>
          <Heading>React Native</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./native.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading>GraphQL</Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw!./query.example")}
                margin="20px auto"/>
            </Fill>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw!./result.example")}
                margin="20px auto"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading><Appear fid="1">Do I have to drop AngularJS to use React?</Appear></Heading>
          <Heading textColor="black"><Appear fid="2">NO!</Appear></Heading>
        </Slide>
        <Slide>
          <Heading>Angular React</Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw!./angularReact.example")}
                margin="20px auto"/>
            </Fill>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw!./angularReact2.example")}
                margin="20px auto"/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={1000}>
          <Heading><Appear fid="1">Was this presentation made in React.js?</Appear></Heading>
          <Heading textColor="black"><Appear fid="2">YES!</Appear></Heading>
        </Slide>
        <Slide>
          <Heading>THE END</Heading>
        </Slide>
      </Deck>
    );
  }
}
