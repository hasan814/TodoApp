import { ADD_TODO, FILTER_TODOS, MAKE_COMPLETED, MAKE_INCOMPLETED, MARK_ALL_COMPLETED, MARK_ALL_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM, UPDATE_TODO } from './actionTypes';

export interface TodoAction {
    type: string;
    payload?: any;
}

export const addTodo = (title: string, description: string): TodoAction => ({
    type: ADD_TODO,
    payload: { id: Date.now(), title, description },
});

export const updateTodo = (id: number, updatedText: string, updatedDescription: string): TodoAction => ({
    type: UPDATE_TODO,
    payload: { id, updatedText, updatedDescription },
});

export const toggleTodo = (id: number): TodoAction => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const removeTodo = (id: number): TodoAction => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const makeCompleted = (id: number): TodoAction => ({
    type: MAKE_COMPLETED,
    payload: { id },
});

export const makeIncompleted = (id: number): TodoAction => ({
    type: MAKE_INCOMPLETED,
    payload: { id },
});

export const filterTodo = (filter: string): TodoAction => ({
    type: FILTER_TODOS,
    payload: { filter },
});

export const markAllCompleted = (): TodoAction => ({
    type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm: string): TodoAction => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
});

export const markAllIncompleted = (): TodoAction => ({
    type: MARK_ALL_INCOMPLETED,
});
