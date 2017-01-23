import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) this.context.router.push('/');
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) this.context.router.push('/');
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  function mapStateToProps({authenticated}) {
    return {authenticated};
  }
  return connect(mapStateToProps)(Authentication);
}
