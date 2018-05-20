import React, {Component} from 'react';
import Home from '../../Home';
import Dashboard from '../../Dashboard';
import Website from '../../Website';
import {withRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import {Paths} from '../../js/constants';
import Main from '../../Components/Main';

class MainContainer extends Component {

  render() {
    const {match,menuDisplay}=this.props

    return (<Main menuDisplay={menuDisplay}>

      <Switch>
        <Route exact path={match.url} render={(routeProps) =>
            <Home {...routeProps}/>}/>
        <Route path={`${match.url}${Paths.dashboard}`} render={(routeProps) =>
            <Dashboard {...routeProps}/>}/>
        <Route strict path={match.url+Paths.website} render={(routeProps) =>
            <Website {...routeProps}/>}/>
      </Switch>
    </Main>)
  }
}
const mapStateToProps = (state) => {

  return {
    menuDisplay: state.AppBar.menuDisplay
  }

}

export default withRouter(connect(mapStateToProps)(MainContainer));
