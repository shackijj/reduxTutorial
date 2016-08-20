import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';

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

export default VisibleTodoList;

/*
class VisibleTodoList extends React.Component {

    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _getVisibleTodos(todos, filter) {
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
            
    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <TodoList
                todos={
                    this._getVisibleTodos(
                        state.todos,
                        state.visibilityFilter
                    )
                }
                onTodoClick={ id =>
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            }
            />
        );
    }
}
VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
};

*/