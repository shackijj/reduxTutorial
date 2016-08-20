import React from 'react';

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