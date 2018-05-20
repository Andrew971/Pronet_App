import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import AppBar from '../../AppBar';

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}

  render() {

    return (
      <AppBar />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(NavContainer));
