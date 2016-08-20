import ReactDOM from "react-dom";
import React from "react";

import { createStore, combineReducers } from "redux";
import { Provider, connect } from 'react-redux';

import { todos, visibilityFilter } from "./Todos";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';


const todoApp = combineReducers({ todos, visibilityFilter });


const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
}

const mapStateToTodoListProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
    };
};

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

AddTodo = connect()(AddTodo);


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