// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
const reducer = combineReducers(reducers)


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: '@kickerApp:root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
export default {
  store,
  persistor
}
