import React from 'react';

export default class AddTodo extends React.Component {
    render() {

        const { onAddTodoClick } = this.props;

        return (
            <div>
                <input ref={node => {
                    this.input = node 
                }}/>
                <button onClick={
                    () => onAddTodoClick(this.input.value)
                }>Add todo </button>
            </div>
        );
    }
}