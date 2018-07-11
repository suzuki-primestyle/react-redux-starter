import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginForm, submitLoginForm } from './action';

class Login extends Component {
  render() {
    const { email, password } = this.props.login;
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        email: <input name="email" value={email} onChange={handleChange} /><br />
        password: <input name="password" value={password} onChange={handleChange} /><br />
        <button onClick={handleSubmit}>Submit</button>
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
