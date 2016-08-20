import React from 'react';
import { addTodo } from '../Actions';

AddTodo = connect()(AddTodo);

// Equiuivalent AddTodo = connect(null, null)(AddTodo);

const AddTodo = ({ dispatch }) => {
    let input;

    return ( 
        <div>
            <input ref={node => {
                input = node 
            }}/>
            <button onClick={
                () => { dispatch(addTodo(input.value))
                }
            }>
                Add todo
            </button>
        </div>
    );
};

export default AddTodo;