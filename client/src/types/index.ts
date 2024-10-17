// types.ts or actionTypes.ts
export interface TodoAction {
    type: string;
    payload?: {
        id?: number;
        title?: string;
        description?: string;
        searchTerm?: string;
    };
}


export interface Todo {
    id: number;
    text: string;
    description: string;
    completed: boolean;
}