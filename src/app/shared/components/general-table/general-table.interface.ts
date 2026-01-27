export interface IColumnDef<T> {
    headerText: string;
    field?: keyof T;
}

export interface IUser {
    name: string;
    email: string;
    role: string;
    status: string;
}