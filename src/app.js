import * as ReactDOM from "react-dom";
import * as React from "react";
import { createStore, combineReducers } from "redux";
import { todos, visibilytyFilter } from "./Todos";


const todoApp = combineReducers({ todos, visibilytyFilter });
const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(
        <TodoApp />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

/*const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        )
    };
};*/