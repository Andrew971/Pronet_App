import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import {withRouter} from 'react-router-dom'


const styles = theme => ({
  root: {
    width: '100%',
     maxWidth: 360,
     backgroundColor: theme.palette.background.paper,
   },
   nested: {
     paddingLeft: theme.spacing.unit * 4,
   },
});

class AppNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render (){
  const { classes,toggleDrawer,history } = this.props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button onClick={()=>{toggleDrawer('right', false)
        history.push('/dashboard')}}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={()=>{toggleDrawer('right', false)
        history.push('/website')}}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Website" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} onClick={()=>{toggleDrawer('right', false); history.push('/website')}}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Content" />
              </ListItem>
            </List>
          </Collapse>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button onClick={toggleDrawer('right', false)}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list" onClick={toggleDrawer('right', false)}>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}
}

AppNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AppNav));
