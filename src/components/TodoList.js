import Todo from './Todo';
import React from "react";

export default class TodoList extends React.Component {
    render() {

        const { todos, onTodoClick } = this.props;
        return (
            <ul>
                {todos.map(todo =>
                    <Todo 
                        key={todo.id}
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}
                    />
                )}
            </ul>
        );
    }
}