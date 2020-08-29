import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { TwoCardCarousel } from "../../components";
import { Row, Col, Form, Button } from "react-bootstrap";
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <TwoCardCarousel />
        <Row
          className="contact d-flex justify-content-center"
          style={{ padding: "2% 15%" }}
        >
          <Col xs="6">
            <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group controlId="Email">
                <Form.Control
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  name="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(LoginPage);
