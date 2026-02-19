import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteElement, SideBarComponent } from './shared/components/side-bar-component/side-bar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('echo-frontend');
  protected routes: RouteElement[] = 
  [
    {
      title: 'test-1',
      path:'/test-components',
      sub_path: [
        {
          title: 'sub_test',
          path: '/sub-test',
        }
      ]
    },
    {
      title: 'test-2',
      path:'test-components',      
    }  
];
}
