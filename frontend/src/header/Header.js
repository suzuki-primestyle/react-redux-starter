import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLogout } from '../auth/action';

class Header extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout() {
      dispatch(requestLogout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
