import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { InfraModule } from 'ngx-sp-infra';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-tabela',
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
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})
export class TabelaComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _isCopied: boolean = false;
  // #endregion PRIVATE

  // #region PUBLIC
  public showSpinner1: boolean = false;
  public showSpinner2: boolean = false;

  public showForm: boolean = false;
  public editingMode: boolean = false;

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


  public get isCopied(): boolean { return this._isCopied; }
  public set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 3000) }
  }
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
  constructor(
    private _router: Router,
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.initializeScreen();
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  public create(spinnerID: number = 1): void {
    if (spinnerID == 1) {
      this.showSpinner1 = true;
      setTimeout(() => { this.showSpinner1 = false }, 3000);
    }
    else {
      this.showSpinner2 = true;
      setTimeout(() => { this.showSpinner2 = false }, 3000);
    }
  }

  public update(spinnerID: number = 1): void {
    if (spinnerID == 1) {
      this.showSpinner1 = true;
      setTimeout(() => { this.showSpinner1 = false }, 3000);
    }
    else {
      this.showSpinner2 = true;
      setTimeout(() => { this.showSpinner2 = false }, 3000);
    }
  }


  private initializeScreen(): void {
    if (this._router.url.includes("/editar/")) {
      this.editingMode = true;
      // ...restante da lógica de inicialização em modo de Edição
    }
    else {
      this.editingMode = true;
      // ...restante da lógica de inicialização em modo de Criação
    }
  }
  // #endregion ==========> UTILS <==========

}
