import ReactDOM from "react-dom";
import React from "react";
import { createStore, combineReducers } from "redux";
import { todos, visibilytyFilter } from "./Todos";
import TodoList from "./components/TodoList";
import AddTodo from './components/AddTodo';

const todoApp = combineReducers({ todos, visibilytyFilter });
const store = createStore(todoApp);
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

class TodoApp extends React.Component {
    render() {
        const visibleTodos = getVisibleTodos(
            this.props.todos,
            this.props.visibilytyFilter
        );

        const currentFilter = this.props.visibilytyFilter;

        return (
            <div>
                <AddTodo 
                    onAddTodoClick={text => {
                            store.dispatch({
                                type: 'ADD_TODO',
                                text: text,
                                id: Date.now()
                            })
                        }
                    }
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={ id =>
                         store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    }
                />
                <p>
                    Show:
                    {' '}
                    <FilterLink 
                        filter='SHOW_ALL'
                        currentFilter={currentFilter}> 
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink filter='SHOW_ACTIVE'
                                currentFilter={currentFilter}>
                    Active</FilterLink>
                    {' '}
                    <FilterLink filter='SHOW_COMPLETED'
                                currentFilter={currentFilter}>
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

class FilterLink extends React.Component {
    render() {

        if (this.props.filter === this.props.currentFilter) {
            return <span>{this.props.children}</span>
        }

        return (
            <a href="#" onClick={(event) => {
                event.preventDefault()
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: this.props.filter
                })
            }}>{this.props.children}</a>
        );
    };
}

const render = () => {
    ReactDOM.render(
        <TodoApp 
            todos={store.getState().todos}
            visibilytyFilter={store.getState().visibilytyFilter}
        />
        ,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();