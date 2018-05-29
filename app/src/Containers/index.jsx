import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import NavContainer from './nav';
import Main from './main';
import Swipe from '../Components/Swipe';
import {ThemeProvider} from 'styled-components';

class Containers extends Component {



  render() {
const { Theme } = this.props
    return (
      <ThemeProvider theme={Theme}>
      <Swipe>
      <NavContainer/>
      <Main/>

    </Swipe>
    </ThemeProvider>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    Theme:state.UI.Theme
  };
};

export default connect(mapStateToProps)(Containers);
