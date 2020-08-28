import React from "react";

import "./App.css";
import { HomePage, AboutPage, HowItWorksPage, RegisterPage, LoginPage } from "./containers";
import { Header, Footer } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
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
        path="/Register"
        render={(props) => {
          return <RegisterPage {...props} />;
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <LoginPage {...props} />;
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
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
