import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';

import { InfraModule } from 'ngx-sp-infra';

import menuConfig from "./shared/models/main-sidemenu.json";

import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    InfraModule,

    SideMenuComponent,
    NavbarComponent,

    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public currentPage?: string;

  public theme: 'dark' | 'light' = 'light';
  public menu = menuConfig;

  public currentRoute: string = "";
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========

  // #region FORM BUILDER
  // [...]
  // #endregion FORM BUILDER

  // #region FORM FIELDS
  // [...]
  // #endregion FORM FIELDS

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor( private _router: Router ) {}

  ngOnInit(): void {
    // Inscreva-se no evento NavigationEnd para receber notificações quando a rota mudar.
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe( () => {
      this.currentRoute = this._router.url;
    });

    
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICES <==========

  // #region PREPARATION
  // [...]
  // #endregion PREPARATION

  // #region GET
  // [...]
  // #endregion GET

  // #region POST
  // [...]
  // #endregion POST

  // #region DELETE
  // [...]
  // #endregion DELETE

  // #endregion ==========> SERVICES <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
