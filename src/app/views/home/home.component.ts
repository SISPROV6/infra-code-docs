import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfraModule } from "ngx-sp-infra";

import packageJson from "../../../../package.json";

import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InfraModule,
    RouterModule,

    CodeSnippetComponent,

    SideMenuComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public installCode: string = `npm install ngx-sp-infra@latest`;
  public currentVersion = packageJson.version;
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
  // [...]
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
