import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import LoginReducers from "./loginreducers";
import PlusReducers from "./plusreducers";

const rootReducer = combineReducers({
    LoginReducers,
    PlusReducers
});

const store = configureStore({reducer: rootReducer});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;