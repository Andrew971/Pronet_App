import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Providers from './js/Providers';


ReactDOM.render(<Providers />, document.getElementById('root'));
registerServiceWorker();
