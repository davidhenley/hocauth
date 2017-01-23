import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class Header extends Component {

  authButton() {
    return (
      <button
        onClick={(e) => {this.props.authenticate(!this.props.authenticated)}}
        className="btn btn-outline-primary">
          {this.props.authenticated ? 'Sign Out' : 'Sign In'}
      </button>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-sm navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({authenticated}) {
  return {authenticated};
}

export default connect(mapStateToProps, actions)(Header);
