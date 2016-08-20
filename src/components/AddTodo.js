import React from 'react';

const AddTodo = (props, { store }) => {
    let input;

    return ( 
        <div>
            <input ref={node => {
                input = node 
            }}/>
            <button onClick={
                () => { store.dispatch({
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
AddTodo.contextTypes = {
    store: React.PropTypes.object
};

export default AddTodo;