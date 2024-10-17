import { ADD_TODO, FILTER_TODOS, MAKE_COMPLETED, MAKE_INCOMPLETED, MARK_ALL_COMPLETED, MARK_ALL_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM, UPDATE_TODO } from './actionTypes';

interface Todo {
    id: number;
    text: string;
    description: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
}

const initialState: TodoState = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
};

const todoReducer = (state = initialState, action: any): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        text: action.payload.title,
                        description: action.payload.description,
                        completed: false,
                    }
                ]
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, text: action.payload.updatedText, description: action.payload.updatedDescription }
                        : todo
                ),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };
        case MAKE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, completed: true } : todo
                )
            };
        case MAKE_INCOMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, completed: false } : todo
                )
            };
        case FILTER_TODOS:
            return {
                ...state,
                filter: action.payload.filter,
            };
        case UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
            };
        case MARK_ALL_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => ({ ...todo, completed: true }))
            };
        case MARK_ALL_INCOMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => ({ ...todo, completed: false }))
            };
        default:
            return state;
    }
};

export default todoReducer;
