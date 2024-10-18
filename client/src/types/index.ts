
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

export interface Todo {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
