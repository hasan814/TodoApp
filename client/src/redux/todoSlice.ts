import { addTodo, deleteTodo, fetchTodos, markAllCompleted, markAllIncompleted, toggleTodo, updateTodo } from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { TodoState } from '@/types';


const initialState: TodoState = {
    todos: [],
    filter: 'ALL',
    searchTerm: '',
    status: 'idle',
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        filterTodos: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.todos.findIndex(todo => todo._id === action.payload._id);
                state.todos[index] = action.payload;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter(todo => todo._id !== action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const index = state.todos.findIndex(todo => todo._id === action.payload._id);
                if (index !== -1) {
                    state.todos[index].completed = action.payload.completed;
                }
            })
            .addCase(markAllCompleted.fulfilled, (state) => {
                state.todos.forEach(todo => {
                    todo.completed = true;
                });
            })
            .addCase(markAllIncompleted.fulfilled, (state) => {
                state.todos.forEach(todo => {
                    todo.completed = false;
                });
            });
    },
});

// Export the new actions
export const { updateSearchTerm, filterTodos } = todoSlice.actions;
export default todoSlice.reducer;
