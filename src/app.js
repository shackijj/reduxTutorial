import ReactDOM from "react-dom";
import React from "react";

import { createStore, combineReducers } from "redux";
import { todos, visibilityFilter } from "./Todos";

import VisibleTodoList from "./components/VisibleTodoList";
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

const todoApp = combineReducers({ todos, visibilityFilter });

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