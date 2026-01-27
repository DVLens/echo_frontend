import { Component } from '@angular/core';
import { GeneralTable } from "../shared/components/general-table/general-table";
import { COLUMN_DEFINITIONS } from '../shared/components/general-table.example.definition';
import { IUser } from '../shared/components/general-table/general-table.interface';
import { GenericButtonComponent } from "../shared/components/generic-button-component/generic-button-component";


@Component({
  selector: 'app-test-page',
  imports: [GeneralTable, GenericButtonComponent],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {
  columns = COLUMN_DEFINITIONS;
  tableData:IUser[]=[
    {name:'Kafka', email: 'chinkunguya@gmail.com', role: 'papu', status: 'active'},
    {name:'Temu', email: 'chinkunguya@gmail.com', role: 'papu', status: 'active'}
  ];
  content = "test";
}
