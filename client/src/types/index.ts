// Import action types
import {
    ADD_TODO,
    FILTERS_TODOS,
    MAKE_COMPLETED,
    MAKE_INCOMPLETED,
    MARK_ALL_COMLETED,
    REMOVE_TODO,
    TOGGLE_TODO,
    UPDATA_SEARCH_TERM
} from '../redux/actionTypes';

// Define types for action payloads
export interface Todo {
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
}

export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: { text: string };
}

export interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: { id: number };
}

export interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: { id: number };
}

export interface MakeCompletedAction {
    type: typeof MAKE_COMPLETED;
    payload: { id: number };
}

export interface MakeIncompletedAction {
    type: typeof MAKE_INCOMPLETED;
    payload: { id: number };
}

export interface FilterTodoAction {
    type: typeof FILTERS_TODOS;
    payload: { filter: string };
}

export interface MarkAllCompletedAction {
    type: typeof MARK_ALL_COMLETED;
}

export interface UpdateSearchTermAction {
    type: typeof UPDATA_SEARCH_TERM;
    payload: { searchTerm: string };
}