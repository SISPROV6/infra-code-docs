import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IconModel, IconsList, InfraModule, ModalUtilsService } from 'ngx-sp-infra';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';
import { IconFilterPipe } from '../../../shared/pipes/icon-filter.pipe';

@Component({
  selector: 'app-icones',
  standalone: true,
  imports: [
    NavbarComponent,
    CodeSnippetComponent,
    IconFilterPipe,

    CommonModule,
    FormsModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
  ],
  templateUrl: './icones.component.html',
  styleUrl: './icones.component.scss'
})
export class IconesComponent implements OnInit, AfterContentInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public categoriaSelected: string | null = null;
  public pesquisa: string = "";

  public iconsList: IconModel[] = IconsList.list;
  public categoriasList: string[] = [];

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

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    public modalUtils: ModalUtilsService,
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this.categoriasList = this.iconsList.length > 0
    ? [
        ...new Set(this.iconsList.map(icon => icon.categoria ))
      ].sort()
    : [];
  }
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
