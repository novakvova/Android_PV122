import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {CategoryReducer} from "../components/category/CategoryReducer";
import {AuthReducer} from "../components/account/AuthReducer";

export const rootReducer = combineReducers({
    category: CategoryReducer,
    auth: AuthReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [thunk]
});