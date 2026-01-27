import { IColumnDef, IUser } from "./general-table/general-table.interface";

export const COLUMN_DEFINITIONS: IColumnDef<IUser>[] = [
    { headerText: 'Name', field: 'name'},
    { headerText: 'Email', field: 'email'},
    { headerText: 'Role', field: 'role'},
]