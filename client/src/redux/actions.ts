import { ADD_TODO, FILTER_TODOS, MAKE_COMPLETED, MAKE_INCOMPLETED, MARK_ALL_COMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from './actionTypes';

export const addTodo = (text) => ({ type: ADD_TODO, payload: { text } });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: { id } });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: { id } });
export const makeCompleted = (id) => ({ type: MAKE_COMPLETED, payload: { id } });
export const makeIncompleted = (id) => ({ type: MAKE_INCOMPLETED, payload: { id } });
export const filterTodo = (filter) => ({ type: FILTER_TODOS, payload: { filter } }); // corrected action type
export const markAllCompleted = () => ({ type: MARK_ALL_COMPLETED });
export const updateSearchTerm = (searchTerm) => ({ type: UPDATE_SEARCH_TERM, payload: { searchTerm } });
