import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import App from './components/App';
import reducers from './reducers';

const state = createStore(reducers);


ReactDom.render(
  <Provider store={state}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);