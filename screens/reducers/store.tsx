import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import LoginReducers from './loginreducers';
import PlusReducers from './plusreducers';
import userReducer from './counterReducer';

const rootReducer = combineReducers({
  login: LoginReducers,
  plus: PlusReducers,
  user: userReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
