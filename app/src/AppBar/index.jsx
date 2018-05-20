import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {AppBarAction} from './reducer';
import Appbar from '../Components/Appbar';
import IconButton from '../Components/iconButton';
import Portal from '../js/portal'
import MenuContainer from './Menu'
import Hamburger from '../Components/svg/hamburger'

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const {dispatch, menuDisplay} = this.props

    return (<Appbar menuDisplay={menuDisplay}>
      <IconButton onClick={() => {
          dispatch(AppBarAction({type: "MENU_DISPLAY"}))
        }}>
        <Hamburger size="1.5em"/>
      </IconButton>
      <h1>Pronet</h1>
      {
        menuDisplay && <Portal>
            <MenuContainer/>
          </Portal>
      }
    </Appbar>);
  }
}

const mapStateToProps = (state) => {
  return {menuDisplay: state.AppBar.menuDisplay};
};

export default withRouter(connect(mapStateToProps)(AppBar));
