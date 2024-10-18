import { createAsyncThunk } from '@reduxjs/toolkit';
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
