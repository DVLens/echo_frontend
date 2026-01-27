import { Component, input } from '@angular/core';
import { IColumnDef } from './general-table.interface';

@Component({
  selector: 'app-general-table',
  imports: [],
  templateUrl: './general-table.html',
  styleUrl: './general-table.scss',
})
export class GeneralTable<T> {
  columns = input<IColumnDef<T>[]>([]);
  tableData = input<T[]>([]);  
}
