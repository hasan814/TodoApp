import { AddTodoAction, FilterTodoAction, MakeCompletedAction, MakeIncompletedAction, MarkAllCompletedAction, RemoveTodoAction, ToggleTodoAction, UpdateSearchTermAction } from '@/types';
import { ADD_TODO, FILTERS_TODOS, MAKE_COMPLETED, MAKE_INCOMPLETED, MARK_ALL_COMLETED, REMOVE_TODO, TOGGLE_TODO, UPDATA_SEARCH_TERM } from './actionTypes';


export const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    payload: { text },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const removeTodo = (id: number): RemoveTodoAction => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const makeCompleted = (id: number): MakeCompletedAction => ({
    type: MAKE_COMPLETED,
    payload: { id },
});

export const makeIncompleted = (id: number): MakeIncompletedAction => ({
    type: MAKE_INCOMPLETED,
    payload: { id },
});

export const filterTodo = (filter: string): FilterTodoAction => ({
    type: FILTERS_TODOS,
    payload: { filter },
});

export const markAllCompleted = (): MarkAllCompletedAction => ({
    type: MARK_ALL_COMLETED,
});

export const updateSearchTerm = (searchTerm: string): UpdateSearchTermAction => ({
    type: UPDATA_SEARCH_TERM,
    payload: { searchTerm },
});