import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {CategoryReducer} from "../components/category/CategoryReducer";

export const rootReducer = combineReducers({
    category: CategoryReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [thunk]
});