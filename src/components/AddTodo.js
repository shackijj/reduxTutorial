import React from 'react';

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
                () => { dispatch({
                            type: 'ADD_TODO',
                            text: input.value,
                            id: Date.now()
                        })
                }
            }>
                Add todo
            </button>
        </div>
    );
};

export default AddTodo;