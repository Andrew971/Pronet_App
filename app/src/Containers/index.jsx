import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import NavContainer from './nav';
import Main from './main';
import {MuiThemeProvider} from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import {theme} from '../js/theme';

const styles = theme => ({root: {
    flexGrow: 1
  }});

class Containers extends Component {

  render() {
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.root}>
        <NavContainer/>
        <Main/>
      </div>
    </MuiThemeProvider>);
  }
}
Containers.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {};
};

export default withStyles(styles)(connect(mapStateToProps)(Containers));
