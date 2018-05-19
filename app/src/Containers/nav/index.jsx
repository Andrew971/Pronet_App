import React, {Component} from 'react';
import {connect} from 'react-redux';
import CssBaseline from 'material-ui/CssBaseline';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import UserNav from './userNav';
import AppNav from './appNav';
import {withRouter} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      right: false,
      anchorEl: null,
      auth: true,
    };
  }



  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };
  render() {
    const {classes} = this.props;
    const {auth, anchorEl} = this.state;
    const open = Boolean(anchorEl);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (<div className={classes.root}>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer('left', true)}/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Pronet
          </Typography>
          {
            auth
              ? (<div>
                <IconButton aria-owns={open
                    ? 'menu-appbar'
                    : null} aria-haspopup="true" onClick={this.toggleDrawer('right', true)} color="inherit">
                  <AccountCircle/>
                </IconButton>
              </div>)
              : (<Button color="inherit">Login</Button>)
          }
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={this.state.left} onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)} disableBackdropTransition={!iOS} disableDiscovery={iOS}>
        <div tabIndex={0} role="button" onKeyDown={this.toggleDrawer('left', false)}>
          <AppNav toggleDrawer={this.toggleDrawer}/>
        </div>
      </SwipeableDrawer>
      <SwipeableDrawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)} onOpen={this.toggleDrawer('right', true)} disableBackdropTransition={!iOS} disableDiscovery={iOS}>
        <div tabIndex={0} role="button"  onKeyDown={this.toggleDrawer('right', false)}>
          <UserNav toggleDrawer={this.toggleDrawer}/>
        </div>
      </SwipeableDrawer>
    </div>);
  }
}
NavContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {};
};

export default withRouter(withStyles(styles)(connect(mapStateToProps)(NavContainer)));
