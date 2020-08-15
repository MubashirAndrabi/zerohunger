import React from "react";

import "./App.css";
import { HomePage, AboutPage, HowItWorksPage } from "./containers";
import { Header, Footer } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header style={{ width: "100%" }} />
        <Route
          path="/"
          exact
          render={(props) => {
            return <HomePage {...props} />;
          }}
        />
        <Route
          path="/about"
          render={(props) => {
            return <AboutPage {...props} />;
          }}
        />
        <Route
          path="/howitworks"
          render={(props) => {
            return <HowItWorksPage {...props} />;
          }}
        />

      <Container>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
