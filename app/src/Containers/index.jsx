import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import NavContainer from './nav';
import Main from './main';
import Swipe from '../js/HOC/Swipe';

class Containers extends Component {



  render() {

    return (<Swipe>
      <NavContainer/>
      <Main/>
    </Swipe>);
  }
}

const mapStateToProps = (state) => {
  return {menuDisplay: state.AppBar.menuDisplay};
};

export default connect(mapStateToProps)(Containers);
