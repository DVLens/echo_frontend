import { Component, inject, input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive, Router, Route } from "@angular/router";

export interface RouteElement extends Route{
  title: string
  sub_path?: RouteElement[]
}

@Component({
  selector: 'app-side-bar-component',
  imports: [FaIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss',
})
export class SideBarComponent {
  protected routerService = inject(Router);

  public routes = input<RouteElement[]>();

  protected barsIcon = faBars;
  protected show: boolean = true;  

  protected toggleBar(){
    this.show = !this.show;
  }
    
}
