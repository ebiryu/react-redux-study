// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TaskChuteContainer from './container/TaskChuteContainer';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)
const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <TaskChuteContainer />
      </BrowserRouter>
    </Provider>,
    root
  )
}

registerServiceWorker()