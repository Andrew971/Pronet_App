import React, {Component, Fragment} from "react";
import {withRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import Content from "./Content";
import Content1 from "./Content1";
import SingleContent from "./SingleContent";
import {Paths} from "../js/constants";
import Portal from "../js/portal";
import NewContent from "./Content/NewContent";

class Website extends Component {
  componentDidMount() {
    navigator.geolocation.watchPosition(position=>{
      console.log(position);
    })
  }
  render() {
    const {match} = this.props;
    const {modalDisplay} = this.props;

    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path={match.url}
            render={routeProps => <Content1 {...routeProps} />}
          />
          <Route
          exact
            path={`${Paths.websiteContent(match.url)}`}
            render={routeProps => <Content {...routeProps} />}
          />
          <Route
          exact
            path={`${Paths.websiteSingleContent(match.url)}`}
            render={routeProps => <SingleContent {...routeProps} />}
          />
        </Switch>


        {modalDisplay && (
          <Portal>
            <NewContent />
          </Portal>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    modalDisplay: state.UI.modalDisplay
  };
};

export default withRouter(connect(mapStateToProps)(Website));
