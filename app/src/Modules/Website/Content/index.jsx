import React, {Component,Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Table from './Table';
import EnhancedTableToolbar from './TableHead';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  }
});
class Content extends Component {

  render() {
    const {classes} = this.props;
console.log(this.props)
    return (<Fragment>
      <Paper className={classes.root}>
      <EnhancedTableToolbar numSelected={0}/>
      <Table classes={classes}/>
    </Paper>
  </Fragment>)
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {

  return {}

}

export default withStyles(styles)(withRouter(connect(mapStateToProps)(Content)));
