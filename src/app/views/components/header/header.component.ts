import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils, InfraModule } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UtilsService } from '../../../shared/services/utils.service';

import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { InstallationInstructionsComponent } from "../../../shared/components/installation-instructions/installation-instructions.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    InfraModule,
    ReactiveFormsModule,
    TooltipModule,
    CodeSnippetComponent,
    InstallationInstructionsComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

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
    ``,
    `<lib-header [breadcrumbList]="[ 'Painel de Pessoas' ]" pageTitle="Painel de Pessoas" />`,
    `<lib-header [breadcrumbList]="[ 'Painel de Pessoas' ]" pageTitle="Painel de Pessoas">\n   <button customButton1 class='btn btn-outline-primary'> <lib-icon iconName='download' /> Importar </button>\n   <button customButton2 class='ms-3 btn btn-outline-primary'> <lib-icon iconName='upload' /> Exportar </button>\n   <button customButton3 class='ms-3 btn btn-outline-success'> <lib-icon iconName='prancheta' /> Gerar notas </button>\n   <button customButton4 class='ms-3 btn btn-outline-success'> <lib-icon iconName='aviao-papel' /> Assinar documentos </button>\n   <button customButton5 class='ms-3 btn btn-primary'> <lib-icon iconName='mais' /> Adicionar </button>\n</lib-header>`,
    `<lib-header [breadcrumbList]="[ 'Painel de Pessoas', 'Formulário', 'Novo' ]" pageTitle="Nova pessoa" mode="add" />`,
    `<lib-header [breadcrumbList]="[ 'Painel de Pessoas', 'Formulário', 'Editar' ]" pageTitle="Editar configuração" mode="edit" [hideButtons]="[ 'Cancelar' ]" />`,
    `<lib-header [breadcrumbList]="[ 'Painel de Pessoas', 'Formulário', 'Editar' ]" pageTitle="Editar configuração" mode="edit" [formGroup]="formCriacao1"/>\n<lib-container containerTitle="Exemplo de container">\n   <form innerContent1 [formGroup]="formCriacao1">\n      <div class="row">\n         <div class="col-6">\n            <label libRequired for="inputCriacao1Req" class="form-label">Nome</label>\n            <input type="text" id="inputCriacao1Req" class="form-control" formControlName="inputCriacao1Req" placeholder="João Roberto Freitas"\n               [class.is-invalid]="!formCriacao1.get('inputCriacao1Req')!.valid">\n         </div>\n      </div>\n   </form>\n</lib-container>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\npublic formCriacao1: FormGroup = new FormGroup({\n   inputCriacao1Req: new FormControl<string>('', [Validators.required])\n});`,
    `<lib-header [breadcrumbList]="[ 'Painel de Pessoas', 'Formulário', 'Novo' ]" pageTitle="Nova configuração" mode="add" [showSpinner]="showSpinner1" (onCreate)="create()" />\n<lib-container containerTitle="Exemplo de container">\n   <form innerContent1 [formGroup]="formCriacao2">\n      <div class="row">\n         <div class="col-6">\n            <label for="inputCriacao2" class="form-label">Nome</label>\n            <input type="text" id="inputCriacao2" class="form-control" formControlName="inputCriacao2" placeholder="João Roberto Freitas">\n         </div>\n      </div>\n   </form>\n</lib-container>`,
    `public showSpinner1: boolean = false;\n\npublic create(): void {\n   this.showSpinner1 = true;\n   \n   this._servico.create().subscribe({\n      next: () => {\n         this.showSpinner1 = false;\n         // ...restante da lógica de sucesso\n      },\n      error: error => {\n         this.showSpinner1 = false;\n         // ...lógica de erro\n      }\n   });\n}`,
    `<lib-header [breadcrumbList]="[ 'Painel de Pessoas', 'Formulário', editingMode ? 'Editar' : 'Novo' ]"\n  [pageTitle]="editingMode ? 'Editar configuração' : 'Nova configuração'"\n  [formGroup]="formCriacaoEdicao3" [mode]="editingMode ? 'edit' : 'add'" [showSpinner]="showSpinner2"\n  (onReturn)="showForm = false" (onCreate)="create()" (onUpdate)="update()" />`,
    `public editingMode: boolean = false;\n\nconstructor(\n   private _router: Router,\n   // ...outros injects\n) { }\n\nngOnInit(): void { this.initializeScreen() }\n\nprivate initializeScreen(): void {\n   if (this._router.url.includes('/editar/')) {\n      this.editingMode = true;\n      // ...restante da lógica de inicialização em modo de Edição\n   }\n   else {\n      this.editingMode = true;\n      // ...restante da lógica de inicialização em modo de Criação\n   }\n}`,
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
  
  /** Propriedade necessário para que a classe estática FormUtils possa ser utilizada no HTML */
	public get FormUtils(): typeof FormUtils { return FormUtils; }

  public formCriacao1: FormGroup = new FormGroup({
    inputCriacao1Req: new FormControl<string>("", [Validators.required])
  });

  public formCriacao2: FormGroup = new FormGroup({
    inputCriacao2: new FormControl<string>("")
  });

  public formCriacaoEdicao3: FormGroup = new FormGroup({
    inputCriacaoEdicao3: new FormControl<string>(""),
    inputCriacaoEdicao3Req: new FormControl<string>("", [Validators.required])
  });
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
