import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TaskChuteContainer from './container/TaskChuteContainer';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <TaskChuteContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
