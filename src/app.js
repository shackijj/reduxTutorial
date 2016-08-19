import * as ReactDOM from "react-dom";
import * as React from "react";
import { createStore, combineReducers } from "redux";
import { todos, visibilytyFilter } from "./Todos";


const todoApp = combineReducers({ todos, visibilytyFilter });



/*
const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilytyFilter: visibilytyFilter(
            state.visibilytyFilter,
            action
        )
    };
};
*/