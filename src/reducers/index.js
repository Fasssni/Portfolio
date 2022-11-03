import React from "react";
import { combineReducers, createStore } from "redux";
import { themeReducer } from "./themeReducer";


const rootReducer=combineReducers({
    theme:themeReducer,


})

export const store=createStore(rootReducer)