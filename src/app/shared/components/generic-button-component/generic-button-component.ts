import { Component, input } from '@angular/core';

export interface ButtonDef<T>{
  text: string
}

@Component({
  selector: 'app-generic-button-component',
  imports: [],
  templateUrl: './generic-button-component.html',
  styleUrl: './generic-button-component.scss',
})
export class GenericButtonComponent {
  content = input<string>(); 
}
