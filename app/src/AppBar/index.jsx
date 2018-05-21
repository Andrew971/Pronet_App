import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Appbar from '../Components/Appbar';
import IconButton from '../Components/iconButton';
import Portal from '../js/portal'
import MenuContainer from './Menu'
import RightDrawer from './RighDrawer'
import Hamburger from '../Components/Icon/hamburger'

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const {dispatch, menuDisplay,RightDrawerDisplay} = this.props

    return (<Appbar menuDisplay={menuDisplay} RightDrawerDisplay={RightDrawerDisplay}>
      <IconButton onClick={() => {
          dispatch({type: "MENU_DISPLAY"})
        }}>
        <Hamburger />
      </IconButton>
      <h1>Pronet</h1>
      {
        menuDisplay && <Portal>
            <MenuContainer/>
          </Portal>
      }
      {
        RightDrawerDisplay && <Portal>
            <RightDrawer/>
          </Portal>
      }
    </Appbar>);
  }
}

const mapStateToProps = (state) => {
  return {
    menuDisplay: state.AppBar.menuDisplay,
    RightDrawerDisplay: state.AppBar.RightDrawerDisplay
  };
};

export default withRouter(connect(mapStateToProps)(AppBar));
