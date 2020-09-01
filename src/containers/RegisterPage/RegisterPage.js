import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Col, Row, Form, Button } from "react-bootstrap";
import './RegisterPage.css'
class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <Row className="register d-flex">
        <Col md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 3 }}>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword2">
                <Form.Control
                  type="password"
                  name="password2"
                  placeholder="Confirm Your Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(
  withRouter(RegisterPage)
);
