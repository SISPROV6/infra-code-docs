import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfraModule } from "ngx-sp-infra";

import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InfraModule,
    RouterModule,
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
  public cards: { nome: string, rota: string, descricao: string }[] = [
    { nome: "Componentes", rota: "componentes", descricao: "descricao" },
    { nome: "Templates", rota: "templates", descricao: "descricao" },
    { nome: "Estrutura", rota: "estrutura", descricao: "descricao" },
    { nome: "Models e Records (classes)", rota: "models", descricao: "descricao" },
  ];
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
