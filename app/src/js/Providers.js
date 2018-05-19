import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from '../Modules'
import Containers from '../Containers';
import {rootUrl} from './constants';

const store = configureStore()

export default class Providers extends PureComponent {

  render() {
    return (
      <Provider store={store}>
      <Router>
<Route path="/" component={Containers} />
      </Router>

    </Provider>
);
  }

}
