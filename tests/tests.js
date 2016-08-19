import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { todos } from "../src/Todos";

describe('addTodo', function() {
    it('Should return new state object with added todo object ',
    function () {
        const stateBefore = [];

        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });
});

describe('ToggleTodo', function() {
    it('Should return new todo object with swtched completed option',
    function () {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Learn Flux',
                completed: true
            }
        ];

        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: true
            },
            {
                id: 1,
                text: 'Learn Flux',
                completed: true
            }
        ];

        const action = {
            type: 'TOGGLE_TODO',
            id: 0
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });
});