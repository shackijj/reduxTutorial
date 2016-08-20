import ReactDOM from "react-dom";
import React from "react";

import { createStore, combineReducers } from "redux";
import { Provider, connect } from 'react-redux';

import { todos, visibilityFilter } from "./Todos";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';


const todoApp = combineReducers({ todos, visibilityFilter });

const TodoApp = () => ( 
    <div>
        <ConnectedAddTodo/>
        <VisibleTodoList/>
        <Footer/> 
    </div>
);


const render = () => {
    ReactDOM.render(
        <Provider store={createStore(todoApp)}>
            <TodoApp/>
        </Provider>,
        document.getElementById('root')
    );
};

render();