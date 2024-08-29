import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfraModule } from "ngx-sp-infra";

import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
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
  public cards: { nome: string, rota: string, descricao: string, implementado: boolean }[] = [
    { nome: "Componentes", rota: "componentes", descricao: "Documentação de componentes e widgets dos mais variados tipos reutilizáveis usados por todos projetos Angular", implementado: true },
    { nome: "Estrutura", rota: "estrutura", descricao: "Documentação da estrutura de arquivos, código, regions, etc", implementado: false },
    { nome: "Models e Records (classes)", rota: "models", descricao: "Padronização de nomenclaturas, tipos e usos de classes das camadas como 7Db e 3Rn", implementado: false },
    { nome: "Templates", rota: "templates", descricao: "Documentação de templates de código/telas prontos", implementado: false },
    { nome: "Webservices", rota: "webservices", descricao: "Documentação dos endpoints públicos exportados", implementado: false },
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
