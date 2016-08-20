import ReactDOM from "react-dom";
import React from "react";

import { createStore, combineReducers } from "redux";
import { todos, visibilytyFilter } from "./Todos";

import VisibleTodoList from "./components/VisibleTodoList";
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

const todoApp = combineReducers({ todos, visibilytyFilter });

const getVisibleTodos = (
    todos,
    filter
) => {
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
};

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store: React.PropTypes.object
};

const TodoApp = () => ( 
    <div>
        <AddTodo/>
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