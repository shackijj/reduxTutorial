export const todos = (store = [], action)  => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...store, {
                id: action.id,
                text: action.text,
                completed: false
            }];
        case 'TOGGLE_TODO':
            return store.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }

                return Object.assign({}, todo, {
                    completed: !todo.completed
                });
            })
    }
}