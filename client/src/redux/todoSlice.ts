import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '@/types';


const initialState: TodoState = {
    todos: [],
    filter: 'ALL',
    searchTerm: '',
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ title: string; description: string }>) => {
            const newTodo: Todo = {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false,
            };
            state.todos.push(newTodo);
        },
        updateTodo: (
            state,
            action: PayloadAction<{ id: number; updatedTitle: string; updatedDescription: string }>
        ) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.updatedTitle;
                todo.description = action.payload.updatedDescription;
            }
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markCompleted: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = true;
            }
        },
        markIncompleted: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = false;
            }
        },
        updateSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        markAllCompleted: (state) => {
            state.todos.forEach((todo) => (todo.completed = true));
        },
        markAllIncompleted: (state) => {
            state.todos.forEach((todo) => (todo.completed = false));
        },
        filterTodos: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
});

export const {
    addTodo,
    updateTodo,
    toggleTodo,
    removeTodo,
    markCompleted,
    markIncompleted,
    updateSearchTerm,
    markAllCompleted,
    markAllIncompleted,
    filterTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
