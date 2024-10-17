
export interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
}


export interface TodoAction {
    type: string;
    payload?: {
        id?: number;
        title?: string;
        description?: string;
        searchTerm?: string;
    };
}


export interface TodoItemProps {
    todo: Todo;
}

