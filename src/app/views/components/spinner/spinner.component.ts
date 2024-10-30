import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { InfraModule } from 'ngx-sp-infra';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { VersionTagsComponent } from '../../../shared/components/version-tags/version-tags.component';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    CodeSnippetComponent,
    NavbarComponent,
    VersionTagsComponent,
    
    CommonModule,
    InfraModule,
    RouterModule,
    TooltipModule,
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit, OnDestroy {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _isCopied: boolean = false;
  // #endregion PRIVATE

  // #region PROTECTED
  protected get isCopied(): boolean { return this._isCopied; }
  protected set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 3000) }
  }
  // #endregion PROTECTED

  // #region PUBLIC
  public codeSnippets: string[] = [
    `<lib-spinner />`,
    `<lib-spinner />
<lib-spinner theme="primary" />
<lib-spinner theme="secondary" />
<lib-spinner theme="success" />
<lib-spinner theme="danger" />
<lib-spinner theme="warning" />`,
    `<lib-spinner type="grow" />`,
    `<lib-spinner type="grow" />
<lib-spinner type="grow" theme="primary" />
<lib-spinner type="grow" theme="secondary" />
<lib-spinner type="grow" theme="success" />
<lib-spinner type="grow" theme="danger" />
<lib-spinner type="grow" theme="warning" />`,
    `protected spinners: Map<string, boolean> = new Map<string, boolean>();
public getLoading(key: string): boolean { return this.spinners.get(key) ?? false; }

// Para definirmos que um elemento estará em loading, usamos o método .set() do Map<> definimos um nome e o valor
this.spinners.set("formSaving", true);

// Podemos usar o método getLoading(key) para ler o valor de um determinado valor do Map, informando a chave
this.spinners.get("formSaving");

// Para remover o status de um botão de carregamento, podemos usar o método Map.set()...
this.spinners.set("formSaving", false);

// ...ou até mesmo Map.delete()
this.spinners.delete("formSaving");`,
    `<div class="row">
    <div class="col">
        <button [libLoading]="getLoading('btnSaving1')" loadingText="Salvando..." class="btn btn-primary"
          (click)="setLoadingTemporary('btnSaving1')" tooltip="Clique para exibir o loading">
            <lib-icon iconName="disquete" />
            Salvar
        </button>
    </div>
    <div class="col">
        <div class="input-group">
            <button [libLoading]="getLoading('btnLoading1')" loadingType="grow" class="btn btn-outline-primary"
              (click)="setLoadingTemporary('btnLoading1')" tooltip="Clique para exibir o loading">
                <lib-icon iconName="lupa" />
            </button>
            <input type="text" class="form-control" placeholder="Usuário" aria-label="Usuario">
        </div>
    </div>
    <div class="col">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Buscar CEP..." aria-label="CEP">
            <button [libLoading]="getLoading('btnLoadingCEP1')" class="btn btn-outline-primary"
              (click)="setLoadingTemporary('btnLoadingCEP1')" tooltip="Clique para exibir o loading">
                <lib-icon iconName="lupa" />
            </button>
        </div>
    </div>
</div>`,
    `protected spinners: Map<string, boolean> = new Map<string, boolean>();
public getLoading(key: string): boolean { return this.spinners.get(key) ?? false; }

// Este método serve apenas para exemplo
public setLoadingTemporary(key: string): void {
    this.spinners.set(key, true);
    
    setTimeout(() => {
        this.spinners.set(key, false);
    }, 5000);
}`
  ];


  protected spinners: Map<string, boolean> = new Map<string, boolean>();
  public getLoading(key: string): boolean { return this.spinners.get(key) ?? false; }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.spinners.set("spinner1", true);
  }

  ngOnDestroy(): void { }
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
  public setLoadingTemporary(key: string): void {
    this.spinners.set(key, true);
    
    setTimeout(() => {
      this.spinners.set(key, false);
    }, 5000);
  }
  // #endregion ==========> UTILS <==========

}
