import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfraModule } from 'ngx-sp-infra';

import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    InfraModule,
    RouterModule,
    SideMenuComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() currentPage?: string;
}
