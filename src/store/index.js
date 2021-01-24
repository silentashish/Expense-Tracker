import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const middlewares = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middlewares),
);

let persistor = persistStore(store);

export {persistor};

export default store;
