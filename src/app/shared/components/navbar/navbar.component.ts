import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfraModule } from 'ngx-sp-infra';

import packageJson from "../../../../../package.json";

import { SideMenuComponent } from '../side-menu/side-menu.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    InfraModule,
    RouterModule,
    TooltipModule,
    SideMenuComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() currentPage?: string;

  public version = packageJson.version;
  public theme: 'dark' | 'light' = 'light';
}
