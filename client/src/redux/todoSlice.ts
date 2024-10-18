import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import axios from 'axios';

// Async actions for interacting with the backend
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('http://localhost:5000/api/todos');
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo: { title: string; description: string }) => {
    const response = await axios.post('http://localhost:5000/api/todos', newTodo);
    return response.data;

});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, updatedTodo }: { id: string; updatedTodo: { title: string; description: string; completed: boolean } }) => {
    const response = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
    return response.data;

});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: string) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    return id;

});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id: string) => {
    const response = await axios.patch(`http://localhost:5000/api/todos/${id}/toggle`);
    return response.data;
});

export const markAllCompleted = createAsyncThunk('todos/markAllCompleted', async () => {
    const response = await axios.patch('http://localhost:5000/api/todos/markAllCompleted');
    toast.success('All todos marked as completed!');
    return response.data;

});

export const markAllIncompleted = createAsyncThunk('todos/markAllIncompleted', async () => {
    const response = await axios.patch('http://localhost:5000/api/todos/markAllIncompleted');
    toast.success('All todos marked as incompleted!');
    return response.data;

});

// Initial state
interface Todo {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

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
