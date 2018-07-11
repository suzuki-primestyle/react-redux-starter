import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sayHello } from './action';

// Ask API if user has login-session or not.
// If it's ok, update authentication status.
class Hello extends Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    return null;
  }
}

const mapStateToProps = () => {return {}};
const mapDispatchToProps = (dispatch) => {
  return {
    initialize() {
      dispatch(sayHello());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
