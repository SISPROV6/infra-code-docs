import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InfraModule, ModalUtilsService } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';
import { InfoModalComponent } from "../../../shared/components/generic-modals/info-modal/info-modal.component";
import { GenericFormModalComponent } from "../../../shared/components/generic-modals/generic-form-modal/generic-form-modal.component";

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [
    NavbarComponent,
    CodeSnippetComponent,
    CommonModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
    InfoModalComponent,
    GenericFormModalComponent
],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss'
})
export class ModalsComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _isCopied: boolean = false;
  // #endregion PRIVATE

  // #region PUBLIC
  public editingMode1: boolean = false;

  public recordsList1: { nome: string, descricao: string, isAtivo: boolean }[] = [
    { nome: "registro 2", descricao: "Produto barato 20", isAtivo: true },
    { nome: "Registro 1", descricao: "Produto caro 9", isAtivo: true },
    { nome: "Registro 3", descricao: "Produto barato 1", isAtivo: true },
    { nome: "registro 4", descricao: "Produto caro 6", isAtivo: true }
  ];


  public codeSnippets: string[] = [
    `constructor(\n    public modalUtils: ModalUtilsService,\n  ) { }`,
    `<!-- #region TEMPLATES -->\n<ng-template #modalExclusao1>\n  <app-confirm-modal modalType="Excluir" modalSubject="produto"\n  (_closingModal)="modalUtils.closeModal(1)" />\n</ng-template>\n\n<ng-template #modalInativacao1>\n  <app-confirm-modal modalType="Inativar" modalSubject="produto" (_closingModal)="modalUtils.closeModal(2)" />\n</ng-template>\n\n<ng-template #modalInformativo1>\n  <generic-info-modal />\n</ng-template>\n<!-- #endregion TEMPLATES -->`,
    `<button class="btn btn-outline-danger" (click)="modalUtils.openModal(modalExclusao1, 1)">\n  <lib-icon iconName="lixeira" /> Confirmação de exclusão\n</button>\n<button class="btn btn-outline-primary" (click)="modalUtils.openModal(modalInativacao1, 2)">\n  <lib-icon iconName="fechar" /> Confirmação de inativação\n</button>\n<button class="btn btn-outline-warning" (click)="modalUtils.openModal(modalInformativo1, 3)">\n  <lib-icon iconName="info" /> Informativo\n</button>`,
    `<div class="d-flex flex-row align-items-center justify-content-evenly">\n  <button class="btn btn-outline-danger" (click)="modalUtils.openModal(modalExclusao1, 1)">\n    <lib-icon iconName="lixeira" /> Confirmação de exclusão\n  </button>\n  <button class="btn btn-outline-primary" (click)="modalUtils.openModal(modalInativacao1, 2)">\n    <lib-icon iconName="fechar" /> Confirmação de inativação\n  </button>\n  <button class="btn btn-outline-warning" (click)="modalUtils.openModal(modalInformativo1, 3)">\n    <lib-icon iconName="info" /> Informativo\n  </button>\n</div>\n  \n  \n<!-- #region TEMPLATES -->\n<ng-template #modalExclusao1>\n  <app-confirm-modal modalType="Excluir" modalSubject="produto" (_closingModal)="modalUtils.closeModal(1)" />\n</ng-template>\n\n<ng-template #modalInativacao1>\n  <app-confirm-modal modalType="Inativar" modalSubject="produto" (_closingModal)="modalUtils.closeModal(2)" />\n</ng-template>\n\n<ng-template #modalInformativo1>\n  <generic-info-modal />\n</ng-template>\n<!-- #endregion TEMPLATES -->`,
    `constructor(\n    public modalUtils: ModalUtilsService,\n  ) { }`,

    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
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
    public modalUtils: ModalUtilsService,
    public utilsService: UtilsService
  ) { }

  ngOnInit() { }
  // #endregion ==========> INITIALIZATION <==========

}
