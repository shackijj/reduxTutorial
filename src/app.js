import * as ReactDOM from "react-dom";
import * as React from "react";
import { createStore, combineReducers } from "redux";
import { todos, visibilytyFilter } from "./Todos";


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
        return (
            <div>
               <input ref={node => {
                    this.input = node 
                }}/>
                <button onClick={
                    () => store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: Date.now()
                    })
                }>Add todo </button>
                <ul>
                    {visibleTodos.map(todo =>
                        <li key={todo.id}
                            onClick={() => store.dispatch({
                                type: 'TOGGLE_TODO',
                                id: todo.id
                            })}
                            style={{
                                textDecoration: todo.completed ?
                                    'line-through' : 'none'
                            }}>
                            {todo.text}
                        </li>
                    )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink filter='SHOW_ALL'>All</FilterLink>
                    {' '}
                    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
                    {' '}
                    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
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