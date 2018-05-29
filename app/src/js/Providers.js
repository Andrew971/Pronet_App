import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store'
import Containers from '../Containers';


export default class Providers extends PureComponent {
  constructor(props) {
      super(props)
      this.store=configureStore()
    }
  render() {
    return (
      <Provider store={this.store}>
      <Router>
<Route path="/" component={Containers} />
      </Router>

    </Provider>
);
  }

}
