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
    const {dispatch, drawerLeftDisplay,drawerRightDisplay} = this.props

    return (<Appbar isOpen={drawerLeftDisplay}>
      <IconButton onClick={() => {
          !drawerLeftDisplay && dispatch({type: "LEFT_DRAWER_DISPLAY"})
          drawerLeftDisplay && dispatch({type: "LEFT_DRAWER_HIDE"})
        }} primary>
        <Hamburger open={drawerLeftDisplay}/>
      </IconButton>
      <h1>Pronet</h1>
      {
        drawerLeftDisplay && <Portal>
            <MenuContainer/>
          </Portal>
      }
      {
        drawerRightDisplay && <Portal>
            <RightDrawer/>
          </Portal>
      }
    </Appbar>);
  }
}

const mapStateToProps = (state) => {
  return {
    drawerLeftDisplay: state.UI.drawerLeftDisplay,
    drawerRightDisplay: state.UI.drawerRightDisplay
  };
};

export default withRouter(connect(mapStateToProps)(AppBar));
