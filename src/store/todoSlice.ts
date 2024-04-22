import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Task} from '../types'

const initialState = {
    todos: [{
        id: 1,
        title: 'Create react app',
        date: '01.04',
        status: 'opened'
    }]
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Task>) => {
            state.todos.push(action.payload);
        },
        editTodo: (state, action: PayloadAction<{ id: number | string, updatedTodo: Task }>) => {
            const { id, updatedTodo } = action.payload;
            const todoToEdit = state.todos.find(todo => todo.id === id);
            if (todoToEdit) {
                Object.assign(todoToEdit, updatedTodo);
            }
        },
        deleteTodo: (state, action: PayloadAction<number | string>) => {
            const idToDelete = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== idToDelete);
        },
        toggleStatus: (state, action: PayloadAction<number | string>) => {
            const idToToggle = action.payload;
            const todoToToggle = state.todos.find(todo => todo.id === idToToggle);
            if (todoToToggle) {
                todoToToggle.status = todoToToggle.status === 'opened' ? 'completed' : 'opened';
            }
        }
    }
});

export const { addTodo, editTodo, deleteTodo,toggleStatus } = todoSlice.actions;

export default todoSlice.reducer;