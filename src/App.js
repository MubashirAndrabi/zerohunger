import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import {
  HomePage,
  AboutPage,
  RegisterPage,
  LoginPage,
  RecipesPage,
  VolunteerPage,
} from "./containers";
import { Header, Footer } from "./components";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
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
            path="/login"
            exact
            render={(props) => {
              return <LoginPage {...props} />;
            }}
          />
          <Route
            path="/register"
            exact
            render={(props) => {
              return <RegisterPage {...props} />;
            }}
          />
          <Route
            path="/about"
            render={(props) => {
              return <AboutPage {...props} />;
            }}
          />
          <Route
            path="/volunteer"
            render={(props) => {
              return <VolunteerPage {...props} />;
            }}
          />
          <Route
            path="/recipes"
            render={(props) => {
              return <RecipesPage {...props} />;
            }}
          />
          <Footer />
        </Router>
      </Provider>
    );
  }
}
export default App;
