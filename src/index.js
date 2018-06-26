// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TaskChuteContainer from './container/TaskChuteContainer';
// import reducer from './reducers'
// import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'

// const store = createStore(reducer)
const { store, persistor } = configureStore()
const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <TaskChuteContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    root
  )
}

// registerServiceWorker()

if (process.env.NODE_ENV === 'production' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}