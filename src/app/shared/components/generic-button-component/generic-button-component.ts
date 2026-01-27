import { Component, input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface ButtonDef<T>{
  class: string,
  text: string,
  icon?: IconDefinition
}

@Component({
  selector: 'app-generic-button-component',
  imports: [FontAwesomeModule],
  templateUrl: './generic-button-component.html',
  styleUrl: './generic-button-component.scss',
})
export class GenericButtonComponent {  
  icon = input<IconDefinition>();
  type = input<string>();
  content = input<string>(); 
}
