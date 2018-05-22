import React, {Component,Fragment} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import Content from './Content';
import Content1 from './Content1';
import {Paths} from '../js/constants';

class Website extends Component {

  render() {
    const {match} = this.props

    return (<Fragment>

      <Switch>
        <Route exact path={match.url} render={(routeProps) =>
            <Content1 {...routeProps}/>}/>
        <Route path={`${Paths.websiteContent(match.url)}`} render={(routeProps) =>
            <Content {...routeProps}/>}/>
      </Switch>
    </Fragment>)
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(Website));
