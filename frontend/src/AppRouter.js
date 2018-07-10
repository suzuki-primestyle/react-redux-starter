import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { email, name, password } = this.props.login;
    const { handleChange } = this.props;
    return (
      <div>
        name: <input name="name" value={name} onChange={handleChange} /><br />
        email: <input name="email" value={email} onChange={handleChange} /><br />
        password: <input name="password" value={password} onChange={handleChange} /><br />
      </div>
    );
  }
}

const mapStateToProps = ({login}) => {
  return { login };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      dispatch(updateLoginForm(e.target.name, e.target.value));
    },
    handleSubmit() {
      dispatch(submitLoginForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
