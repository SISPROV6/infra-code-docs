import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { InfraModule } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-icones',
  standalone: true,
  imports: [
    NavbarComponent,
    CodeSnippetComponent,

    CommonModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
  ],
  templateUrl: './icones.component.html',
  styleUrl: './icones.component.scss'
})
export class IconesComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public codeSnippets: string[] = [
    "// Em uma estrutura de uma tela de Usuários, por exemplo\n// No arquivo usuarios.module.ts:\n@NgModule( {\n   declarations: [\n      // ...outros componentes\n      PainelUsuariosComponent,\n      FormularioUsuarioComponent\n   ],\n   imports: [\n      // ...outros imports\n      ProjectModule,\n      UsuariosRoutingModule\n   ],\n   exports: [\n         // ...\n   ]\n})\nexport class UsuariosModule { }",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========

  // #region FORM FIELDS
  // [...]
  // #endregion FORM FIELDS

  // #region FORM BUILDER
  // [...]
  // #endregion FORM BUILDER

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _router: Router,
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

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

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
