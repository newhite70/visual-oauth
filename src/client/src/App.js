import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";

import VisualOAuth from "./steps";
import Introduction from "./components/Introduction/";

function App() {
  return (
    <Container style={{ margin: "25px", fontSize: "1.2rem" }}>
      <Header
        size="huge"
        textAlign="center"
        content="Learn OAuth Step-By-Step"
      />

      <Introduction />

      <Divider hidden />

      <VisualOAuth />
    </Container>
  );
}

export default App;
