import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store'
import Containers from '../Containers';

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
