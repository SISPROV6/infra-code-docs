import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InfraModule } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';

import { RecordsListModel } from './models/lista.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskPipe } from 'ngx-mask';
import { InstallationInstructionsComponent } from "../../../shared/components/installation-instructions/installation-instructions.component";
import { TabelaDemonstracaoService } from './tabela-demonstracao.service';

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
    NgxPaginationModule,
    NgxMaskPipe,
    InstallationInstructionsComponent
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
  public recordsList1?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo
  public recordsList2?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo
  public recordsList3?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo
  public recordsList4?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo
  public recordsList5?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo

  public page1: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente
	public itemsPerPage1: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente

  public page2: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente
	public itemsPerPage2: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente

  public page3: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente
	public itemsPerPage3: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente

  public page4: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente
	public itemsPerPage4: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente

  public page5: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente
	public itemsPerPage5: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente


  public codeSnippets: string[] = [
    `<lib-table [list]="recordsList"\n  [counts]="[ 5, 10, 15 ]"\n  [headers]="[\n    { name: 'Nome', col: 2 },\n    { name: 'Descrição', col: 3 },\n    { name: 'Valor', col: 1, customClasses: 'text-end' },\n    { name: 'Datas', col: 4 },\n    { name: '', col: 2, customClasses: 'text-end' }\n  ]"\n  (itemsPerPageChange)="itemsPerPage = $event"\n  (pageChange)="page = $event">\n\n  @for (item of recordsList! | paginate: { itemsPerPage: itemsPerPage, currentPage: page }; track item) {\n    <tr innerRows class="align-middle">\n      <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar">{{ item.nome }}</a> </td>\n      <td>{{ item.descricao }}</td>\n      <td class="text-end">{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n      <td>\n        <p class="my-0"><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n        <p class="my-0"><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == "01/01/1900" ? "Nenhuma alteração recente" : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n      </td>\n      <td>\n        <div class="d-flex flex-row align-items-center justify-content-end">\n          <lib-icon iconName="editar" iconColor="blue" tooltip="Visualizar/Editar" />\n          <div class="form-check form-switch ms-2"> <input class="form-check-input" type="checkbox" role="switch" [checked]="item.isAtivo"> </div>\n        </div>\n      </td>\n    </tr>\n  }\n</lib-table>`,
    `public recordsList?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo\n\npublic page: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente\npublic itemsPerPage: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente`,
    `<div class="row">\n  <div class="col">\n    <lib-table [list]="recordsList1" [counts]="[ 5, 10, 15 ]"\n      paginationID="libTablePagination1"\n      [headers]="[\n        { name: 'Nome', col: 4 },\n        { name: 'Descrição', col: 4 },\n        { name: 'Valor', col: 4, customClasses: 'text-end' }\n      ]"\n      (itemsPerPageChange)="itemsPerPage2 = $event"\n      (pageChange)="page2 = $event">\n\n      @for (item of recordsList1! | paginate: { id: 'libTablePagination1', itemsPerPage: itemsPerPage2, currentPage: page2 }; track item) {\n        <tr innerRows class="align-middle">\n          <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar">{{ item.nome }}</a> </td>\n          <td>{{ item.descricao }}</td>\n          <td class="text-end">{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n        </tr>\n      }\n    </lib-table>\n  </div>\n\n  <div class="col">\n    <lib-table [list]="recordsList5" [counts]="[ 5, 10, 15 ]"\n      paginationID="libTablePagination2"\n      [headers]="[\n        { name: 'Nome', col: 4 },\n        { name: 'Descrição', col: 4 },\n        { name: 'Valor', col: 4, customClasses: 'text-end' }\n      ]"\n      (itemsPerPageChange)="itemsPerPage3 = $event"\n      (pageChange)="page3 = $event">\n\n      @for (item of recordsList5! | paginate: { id: 'libTablePagination2', itemsPerPage: itemsPerPage3, currentPage: page3 }; track item) {\n        <tr innerRows class="align-middle">\n          <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar">{{ item.nome }}</a> </td>\n          <td>{{ item.descricao }}</td>\n          <td class="text-end">{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n        </tr>\n      }\n    </lib-table>\n  </div>\n</div>`,
    `public recordsList1?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo\npublic recordsList5?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo\n\npublic page2: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente\npublic itemsPerPage2: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente\n\npublic page3: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente\npublic itemsPerPage3: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente`,
    `<lib-table [list]="recordsList" [counts]="[ 5, 10, 20 ]"\n  [headers]="[\n    { name: 'Nome', col: 2 },\n    { name: 'Descrição', col: 3 },\n    { name: 'Valor', col: 1, customClasses: 'text-end' },\n    { name: 'Datas', col: 4 },\n    { name: '', col: 2, customClasses: 'text-end' }\n  ]"\n  (itemsPerPageChange)="itemsPerPage = $event"\n  (pageChange)="page = $event"\n  emptyListMessage="Nenhum registro encontrado com a pesquisa atual...">\n\n  @for (item of recordsList1! | paginate: { itemsPerPage: itemsPerPage, currentPage: page }; track item) {\n    <tr innerRows class="align-middle">\n      <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar">{{ item.nome }}</a> </td>\n      <td>{{ item.descricao }}</td>\n      <td class="text-end">{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n      <td>\n        <p class="my-0"><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n        <p class="my-0"><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == "01/01/1900" ? "Nenhuma alteração recente" : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n      </td>\n      <td>\n        <div class="d-flex flex-row align-items-center justify-content-end">\n          <lib-icon iconName="editar" iconColor="blue" tooltip="Visualizar/Editar" />\n          <div class="form-check form-switch ms-2"> <input class="form-check-input" type="checkbox" role="switch" [checked]="item.isAtivo"> </div>\n        </div>\n      </td>\n    </tr>\n  }\n</lib-table>`,
    `public recordsList?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo\n\npublic page: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente\npublic itemsPerPage: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente`,
    `<lib-table [list]="recordsList3"\n  [counts]="[ 5, 10, 20 ]" placement="start"\n  [headers]="[\n    { name: 'Nome', col: 2 },\n    { name: 'Descrição', col: 3 },\n    { name: 'Valor', col: 1, customClasses: 'text-end' },\n    { name: 'Datas', col: 4 },\n    { name: '', col: 2, customClasses: 'text-end' }\n  ]"\n  (itemsPerPageChange)="itemsPerPage5 = $event"\n  (pageChange)="page5 = $event">\n\n  @for (item of recordsList3! | paginate: { itemsPerPage: itemsPerPage5, currentPage: page5 }; track item) {\n    <tr innerRows class="align-middle">\n      <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar">{{ item.nome }}</a> </td>\n      <td>{{ item.descricao }}</td>\n      <td class="text-end">{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n      <td>\n        <p class="my-0"><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n        <p class="my-0"><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == "01/01/1900" ? "Nenhuma alteração recente" : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n      </td>\n      <td>\n        <div class="d-flex flex-row align-items-center justify-content-end">\n          <lib-icon iconName="editar" iconColor="blue" tooltip="Visualizar/Editar" />\n          <div class="form-check form-switch ms-2"> <input class="form-check-input" type="checkbox" role="switch" [checked]="item.isAtivo"> </div>\n        </div>\n      </td>\n    </tr>\n  }\n</lib-table>`,
    `public recordsList?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo\n\npublic page: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente\npublic itemsPerPage: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente`,
    `<lib-table [list]="recordsList" [usePagination]="false"\n  [headers]="[\n    { name: 'Nome', col: 2 },\n    { name: 'Descrição', col: 3 },\n    { name: 'Valor', col: 1, customClasses: 'text-end' },\n    { name: 'Datas', col: 4 },\n    { name: '', col: 2, customClasses: 'text-end' }\n  ]">\n\n  @for (item of recordsList; track item) {\n    <tr innerRows class="align-middle">\n      <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar">{{ item.nome }}</a> </td>\n      <td>{{ item.descricao }}</td>\n      <td class="text-end">{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n      <td>\n        <p class="my-0"><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n        <p class="my-0"><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == "01/01/1900" ? "Nenhuma alteração recente" : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n      </td>\n      <td>\n        <div class="d-flex flex-row align-items-center justify-content-end">\n          <lib-icon iconName="editar" iconColor="blue" tooltip="Visualizar/Editar" />\n          <div class="form-check form-switch ms-2"> <input class="form-check-input" type="checkbox" role="switch" [checked]="item.isAtivo"> </div>\n        </div>\n      </td>\n    </tr>\n  }\n</lib-table>`,
    `<lib-table [list]="recordsList"\n  [usePagination]="false"\n  [showCounter]="false"\n  [headers]="[\n    { name: 'Nome', col: 2 },\n    { name: 'Descrição', col: 3 },\n    { name: 'Valor', col: 1, customClasses: 'text-end' },\n    { name: 'Datas', col: 4 },\n    { name: '', col: 2, customClasses: 'text-end' }\n  ]">\n\n  @for (item of recordsList; track item) {\n    <tr innerRows class="align-middle">\n      <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar">{{ item.nome }}</a> </td>\n      <td>{{ item.descricao }}</td>\n      <td class="text-end">{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n      <td>\n        <p class="my-0"><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n        <p class="my-0"><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == "01/01/1900" ? "Nenhuma alteração recente" : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n      </td>\n      <td>\n        <div class="d-flex flex-row align-items-center justify-content-end">\n          <lib-icon iconName="editar" iconColor="blue" tooltip="Visualizar/Editar" />\n          <div class="form-check form-switch ms-2"> <input class="form-check-input" type="checkbox" role="switch" [checked]="item.isAtivo"> </div>\n        </div>\n      </td>\n    </tr>\n  }\n</lib-table>`,

    `<lib-table [list]="recordsList1" [counts]="[ 5, 10, 15 ]"\n  [usePagination]="false" [showCounter]="false"\n  [headers]="[\n    { name: 'Nome', col: 2, orderColumn: 'nome' },     \n    { name: 'Descrição', col: 3, orderColumn: 'descricao' },\n    { name: 'Valor', col: 1, customClasses: 'text-end' },\n    { name: 'Datas', col: 4 },\n    { name: '', col: 2, customClasses: 'text-end' }\n  ]" >\n\n  @for (item of recordsList1!; track item) {\n    <!-- CONTEÚDO DA ROW -->\n  }\n</lib-table>`,
    `<lib-table [list]="recordsList1" [counts]="[ 5, 10, 15 ]"\n  [usePagination]="false" [showCounter]="false"\n  [headers]="[\n    { name: 'Nome', col: 2, orderColumn: 'nome' },     \n    { name: 'Descrição', col: 3, orderColumn: 'descricao' },\n    { name: 'Valor', col: 1, customClasses: 'text-end' },\n    { name: 'Datas', col: 4 },\n    { name: '', col: 2, customClasses: 'text-end' }\n  ]" >\n\n  @for (item of recordsList1!; track item) {\n    <tr innerRows class="align-middle">\n      <td class="text-primary fw-bold">\n        <a tooltip="Visualizar/Editar"> {{ item.nome }} </a>\n      </td>\n      <td>{{ item.descricao }}</td>\n      <td class="text-end"> {{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }} </td>\n      <td>\n        <p class="my-0"><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n        <p class="my-0"><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == "01/01/1900" ? "Nenhuma alteração recente" : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n      </td>\n      <td class="text-end">\n        <lib-icon iconName="editar" iconColor="blue" tooltip="Visualizar/Editar" />\n      </td>\n    </tr>\n  }\n</lib-table>`,
  ];


  public get isCopied(): boolean { return this._isCopied; }
  public set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 3000) }
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    public utilsService: UtilsService,
    private _tableDemo: TabelaDemonstracaoService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getListaTable();
      this.getListaTableLarge();
      this.getListaTableEmpty();
    }, 3000);
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  public getListaTable(): void {
    this._tableDemo.getListaTable().subscribe({
      next: response => {
        this.recordsList1 = response.RecordsList;
        this.recordsList3 = response.RecordsList;
        this.recordsList4 = response.RecordsList;
      }
    });
  }

  public getListaTableLarge(): void {
    this._tableDemo.getListaTableLarge().subscribe({
      next: response => {
        this.recordsList5 = response.RecordsList;
      }
    });
  }

  public getListaTableEmpty(): void {
    this._tableDemo.getListaTableEmpty().subscribe({
      next: response => {
        this.recordsList2 = response.RecordsList;
      }
    });
  }
  // #endregion PREPARATION

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
