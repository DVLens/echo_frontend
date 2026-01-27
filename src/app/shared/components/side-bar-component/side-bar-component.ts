import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar-component',
  imports: [FaIconComponent],
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss',
})
export class SideBarComponent {
  barsIcon = faBars;
}
