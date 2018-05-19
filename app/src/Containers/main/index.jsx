import React, {Component} from 'react';
import Home from '../../Modules/Home';
import Dashboard from '../../Modules/Dashboard';
import Website from '../../Modules/Website';
import {withRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import {Paths} from '../../js/constants';

class MainContainer extends Component {

  render() {
    const {match}=this.props
    console.log(this.props)
    return (<main>

      <Switch>
        <Route exact path={match.url} render={(routeProps) =>
            <Home {...routeProps}/>}/>
        <Route path={`${match.url}${Paths.dashboard}`} render={(routeProps) =>
            <Dashboard {...routeProps}/>}/>
        <Route strict path={match.url+Paths.website} render={(routeProps) =>
            <Website {...routeProps}/>}/>
      </Switch>
    </main>)
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(MainContainer));
