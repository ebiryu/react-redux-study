import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import localForage from 'localforage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: localForage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}