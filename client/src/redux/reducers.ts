// Import action types
import { AddTodoAction, FilterTodoAction, MakeCompletedAction, MakeIncompletedAction, MarkAllCompletedAction, RemoveTodoAction, TodoState, ToggleTodoAction, UpdateSearchTermAction } from "@/types";
import { ADD_TODO, FILTERS_TODOS, MAKE_COMPLETED, MAKE_INCOMPLETED, MARK_ALL_COMLETED, REMOVE_TODO, TOGGLE_TODO, UPDATA_SEARCH_TERM } from "./actionTypes";


type TodoAction = AddTodoAction | ToggleTodoAction | RemoveTodoAction | MakeCompletedAction | MakeIncompletedAction | FilterTodoAction | UpdateSearchTermAction | MarkAllCompletedAction;


const initialState: TodoState = {
    todos: [],
    filter: "ALL",
    searchTerm: "",
};

const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text, completed: false }],
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload.id),
            };

        case MAKE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index !== action.payload.id ? { ...todo, completed: true } : todo
                ),
            };

        case MAKE_INCOMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index !== action.payload.id ? { ...todo, completed: false } : todo
                ),
            };

        case FILTERS_TODOS:
            return {
                ...state,
                filter: action.payload.filter,
            };

        case UPDATA_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
            };

        case MARK_ALL_COMLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => ({ ...todo, completed: true })),
            };

        default:
            return state;
    }
};

export default todoReducer;
