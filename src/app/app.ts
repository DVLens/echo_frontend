import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar-component/side-bar-component';
import { GenericButtonComponent } from './shared/components/generic-button-component/generic-button-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, GenericButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('echo-frontend');
  routes = ["test", "maneadero"];
}
