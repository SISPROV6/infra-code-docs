import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InfraModule, MessageService, ModalUtilsService } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { InstallationInstructionsComponent } from '../../../shared/components/installation-instructions/installation-instructions.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';
import { InfoModalComponent } from "../../../shared/components/generic-modals/info-modal/info-modal.component";
import { GenericFormModalComponent } from "../../../shared/components/generic-modals/generic-form-modal/generic-form-modal.component";
import { GenericConfigModalComponent } from '../../../shared/components/generic-modals/generic-config-modal/generic-config-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalDemonstracaoService } from './modal-demonstracao.service';

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
    InstallationInstructionsComponent,
    InfoModalComponent,
    GenericFormModalComponent,
    GenericConfigModalComponent
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
  public recordsList1: { nome: string, descricao: string, isAtivo: boolean }[] = [
    { nome: "registro 2", descricao: "Produto barato 20", isAtivo: true },
    { nome: "Registro 1", descricao: "Produto caro 9", isAtivo: true },
    { nome: "Registro 3", descricao: "Produto barato 1", isAtivo: true },
    { nome: "registro 4", descricao: "Produto caro 6", isAtivo: true }
  ];

  public configModalInitialState: { configID: number, configName: string, configPassword: string, configDomain: string } = {
    configID: 0,
    configDomain: "SISPRO",
    configName: "Administrador",
    configPassword: "__admin"
  };


  public codeSnippets: string[] = [
    `constructor(\n    public modalUtils: ModalUtilsService,\n  ) { }`,
    `<!-- #region TEMPLATES -->\n<ng-template #modalExclusao1>\n  <app-confirm-modal modalType="Excluir" modalSubject="produto"\n  (_closingModal)="modalUtils.closeModal(1)" />\n</ng-template>\n\n<ng-template #modalInativacao1>\n  <app-confirm-modal modalType="Inativar" modalSubject="produto" (_closingModal)="modalUtils.closeModal(2)" />\n</ng-template>\n\n<ng-template #modalInformativo1>\n  <generic-info-modal />\n</ng-template>\n<!-- #endregion TEMPLATES -->`,
    `<button class="btn btn-outline-danger" (click)="modalUtils.openModal(modalExclusao1, 1)">\n  <lib-icon iconName="lixeira" /> Confirmação de exclusão\n</button>\n<button class="btn btn-outline-primary" (click)="modalUtils.openModal(modalInativacao1, 2)">\n  <lib-icon iconName="fechar" /> Confirmação de inativação\n</button>\n<button class="btn btn-outline-warning" (click)="modalUtils.openModal(modalInformativo1, 3)">\n  <lib-icon iconName="info" /> Informativo\n</button>`,
    `<div class="d-flex flex-row align-items-center justify-content-evenly">\n  <button class="btn btn-outline-danger" (click)="modalUtils.openModal(modalExclusao1, 1)">\n    <lib-icon iconName="lixeira" /> Confirmação de exclusão\n  </button>\n  <button class="btn btn-outline-primary" (click)="modalUtils.openModal(modalInativacao1, 2)">\n    <lib-icon iconName="fechar" /> Confirmação de inativação\n  </button>\n  <button class="btn btn-outline-warning" (click)="modalUtils.openModal(modalInformativo1, 3)">\n    <lib-icon iconName="info" /> Informativo\n  </button>\n</div>\n  \n  \n<!-- #region TEMPLATES -->\n<ng-template #modalExclusao1>\n  <app-confirm-modal modalType="Excluir" modalSubject="produto" (_closingModal)="modalUtils.closeModal(1)" />\n</ng-template>\n\n<ng-template #modalInativacao1>\n  <app-confirm-modal modalType="Inativar" modalSubject="produto" (_closingModal)="modalUtils.closeModal(2)" />\n</ng-template>\n\n<ng-template #modalInformativo1>\n  <generic-info-modal />\n</ng-template>\n<!-- #endregion TEMPLATES -->`,
    `constructor(\n    public modalUtils: ModalUtilsService,\n  ) { }`,

    `constructor(\n    public modalUtils: ModalUtilsService,\n  ) { }`,
    `<lib-table [list]="recordsList"
  [usePagination]="false"
  [headers]="[
    { name: 'Nome', col: 4 },
    { name: 'Descrição', col: 7 },
    { name: '', col: 1, customClasses: 'text-end' }
  ]" >

  @for (item of recordsList!; track item) {
    <tr innerRows class="align-middle">
      <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar" (click)="modalUtils.openModal(modalEdicao, 2)">{{ item.nome }}</a> </td>
      <td> {{ item.descricao }} </td>
      <td class="text-primary text-end">
        <lib-icon iconName="editar" class="cursor-pointer" tooltip="Editar" (click)="modalUtils.openModal(modalEdicao, 2)" />
      </td>


      <!-- #region TEMPLATE EDIÇÃO -->
      <ng-template #modalEdicao>
        <generic-form-modal [recordName]="item.nome" />
      </ng-template>
      <!-- #endregion TEMPLATE EDIÇÃO -->
    </tr>
  }
</lib-table>`,
    `<!-- #region TEMPLATES -->
<ng-template #modalCriacao>
  <generic-form-modal />
</ng-template>
<!-- #endregion TEMPLATES -->`,
    `<td class="text-primary text-end">
  <lib-icon iconName="editar" class="cursor-pointer" tooltip="Editar" (click)="modalUtils.openModal(modalEdicao, 2)" />
</td>

<!-- #region TEMPLATE EDIÇÃO -->
<ng-template #modalEdicao>
  <generic-form-modal [recordName]="item.nome" />
</ng-template>
<!-- #endregion TEMPLATE EDIÇÃO -->`,
    `<lib-container>
  <div innerContent1>
    <div class="text-end">
      <button class="btn btn-sm btn-primary" (click)="modalUtils.openModal(modalCriacao, 2)">
        <lib-icon iconName="mais" /> Adicionar
      </button>
    </div>

    <lib-table [list]="recordsList"
      [usePagination]="false"
      [headers]="[
        { name: 'Nome', col: 4 },
        { name: 'Descrição', col: 7 },
        { name: '', col: 1, customClasses: 'text-end' }
      ]" >

      @for (item of recordsList!; track item) {
        <tr innerRows class="align-middle">
          <td> <a class="text-primary text-decoration-none fw-bold" tooltip="Editar/Visualizar" (click)="modalUtils.openModal(modalEdicao, 2)">{{ item.nome }}</a> </td>
          <td> {{ item.descricao }} </td>
          <td class="text-primary text-end">
            <lib-icon iconName="editar" class="cursor-pointer" tooltip="Editar" (click)="modalUtils.openModal(modalEdicao, 2)" />
          </td>


          <!-- #region TEMPLATE EDIÇÃO -->
          <ng-template #modalEdicao>
            <generic-form-modal [recordName]="item.nome" />
          </ng-template>
          <!-- #endregion TEMPLATE EDIÇÃO -->
        </tr>
      }
    </lib-table>
  </div>
</lib-container>


<!-- #region TEMPLATES -->
<ng-template #modalCriacao>
  <generic-form-modal />
</ng-template>
<!-- #endregion TEMPLATES -->`,
    `// Nossa propriedade de lista simples utilizada para este exemplo
public recordsList: { nome: string, descricao: string, isAtivo: boolean }[] = [
  { nome: "registro 2", descricao: "Produto barato 20", isAtivo: true },
  { nome: "Registro 1", descricao: "Produto caro 9", isAtivo: true },
  { nome: "Registro 3", descricao: "Produto barato 1", isAtivo: true },
  { nome: "registro 4", descricao: "Produto caro 6", isAtivo: true }
];

constructor(
  public modalUtils: ModalUtilsService,
) { }`,
    `constructor(
  public modalUtils: ModalUtilsService,
  
  // Caso deseje colocar os métodos de modal no seu componente para ter mais controle importe os abaixo
  private _bsModalService: BsModalService,
  private _bsModalref: BsModalRef
) { }`,
    `// modal.component.ts
@Output() public onButtonClicked: EventEmitter<void> = new EventEmitter<void>();
@Output() public onClose: EventEmitter<void> = new EventEmitter<void>();

public configID: number = 0;

public configName?: string;
public configPassword?: string;
public configDomain: string = "SISPRO";`,
    `// componente.component.ts
public configModalInitialState: { configID: number, configName: string, configPassword: string, configDomain: string } = {
  configID: 0,
  configDomain: "SISPRO",
  configName: "Administrador",
  configPassword: "__admin"
};


// OU na resposta de um webservice, por exemplo...
public getConfig(): void {
  this._modalDemoService.getConfig().subscribe({
    next: response => {

      // Setamos a configuração do modal com base na resposta do método
      this.configModalInitialState = {
        configID: response.ID,
        configDomain: response.DOMAIN,    // Deve exibir no modal o valor "SISPROV6"
        configName: response.NAME,    // Deve exibir no modal o valor "Desenvolvedor"
        configPassword: response.PASSWORD   // Deve exibir no modal o valor "__dev_sispro"
      };

      // Chamamos o método de renderização do mesmo
      this.modalUtils.openInitialStateModal(GenericConfigModalComponent, response.ID, this.configModalInitialState);
      // ...neste exemplo eu estou definindo que o ID do modal será o mesmo ID do registro
    }
  });
}`,
    `<div class="d-flex flex-row align-items-center justify-content-evenly">
  <button class="btn btn-outline-primary" (click)="initializeConfig()">
    <lib-icon iconName="mais" /> Criar nova configuração
  </button>
  <button class="btn btn-outline-success" (click)="getConfig()">
    <lib-icon iconName="olho" /> Visualizar configuração cadastrada
  </button>
</div>`,
    `export class ExemploComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PUBLIC
  public configModalInitialState: { configID: number, configName: string, configPassword: string, configDomain: string } = {
    configID: 0,
    configDomain: "SISPRO",
    configName: "Administrador",
    configPassword: "__admin"
  };
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    public modalUtils: ModalUtilsService,
    
    private _bsModalService: BsModalService,
    private _bsModalref: BsModalRef,

    private _messageService: MessageService,
    private _modalDemoService: ModalDemonstracaoService,
  ) { }

  ngOnInit() { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region GET
  public getConfig(): void {
    this._modalDemoService.getConfig().subscribe({
      next: response => {

        // Setamos a configuração do modal com base na resposta do método
        this.configModalInitialState = {
          configID: response.ID,
          configDomain: response.DOMAIN,    // Deve exibir no modal o valor "SISPROV6"
          configName: response.NAME,    // Deve exibir no modal o valor "Desenvolvedor"
          configPassword: response.PASSWORD   // Deve exibir no modal o valor "__dev_sispro"
        };

        // Chamamos o método de renderização do mesmo
        this.modalUtils.openInitialStateModal(GenericConfigModalComponent, response.ID, this.configModalInitialState);
        // ...neste exemplo eu estou definindo que o ID do modal será o mesmo ID do registro
      }
    });
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========

  public initializeConfig(): void {
    // ...lógica mais complexa que é executada antes da chamada do modal...

    // Neste exemplo não vamos definir o valor das variáveis com o initialState
    this.openInitialStateModal(GenericConfigModalComponent);
  }

  public openInitialStateModal(component: any, id?: any, initialState?: any, classes: string = "modal-dialog-centered"): void {
    this._bsModalref = this._bsModalService.show(component, {
      id: id,
      initialState: initialState,
      class: classes
    });

    // Para tratar emissões de eventos (EventEmitter), segue exemplo:
    this._bsModalref.content.onButtonClicked.subscribe(() => {
      // Lógica será chamada quando o evento 'onButtonClicked' for emitido lá no modal
      this._messageService.showAlertSuccess("Solicitação enviada com sucesso!");
    });

    this._bsModalref.content.onClose.subscribe(() => {
      this._bsModalService.hide(); // Lógica será chamada quando o evento 'onClose' for emitido lá no modal
    });
  }
  // #endregion ==========> UTILS <==========

}`,
    `<div class="modal-content">
  <div class="modal-header">
    <lib-icon iconName="cadeado" class="me-2" />
    <h5 class="modal-title">{{ configID !== 0 ? "Visualizando configuração: " + configName : "Nova configuração" }}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="onClose.emit()"></button>
  </div>

  <div class="modal-body">
    <div class="row mb-3">
      <div class="col-6">
        <label for="domainInput" class="form-label">Domínio</label>
        <input type="text" class="form-control" id="domainInput" [(ngModel)]="configDomain" disabled readonly>
      </div>
    </div>
      
    <div class="row">
      <div class="col">
        <label libRequired for="nameInput" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nameInput" [(ngModel)]="configName">
      </div>
      <div class="col">
        <label libRequired for="passwordInput" class="form-label">Senha</label>
        <input type="password" class="form-control" id="passwordInput" [(ngModel)]="configPassword">
      </div>
    </div>
  </div>

  <div class="modal-footer">
    @if (configID === 0) {
      <button type="button" class="btn btn-primary" (click)="onButtonClicked.emit()">
        <lib-icon iconName="cadeado-outline" /> Solicitar cadastro</button>
    }
    @else {
      <button type="button" class="btn btn-warning opacity-50" tooltip="Não é possível salvar sem a permissão de um Administrador">
        <lib-icon iconName="pare" /> Alterar</button>
    }
  </div>
</div>`,
    `export class GenericConfigModalComponent implements OnInit, OnDestroy {

  // #region ==========> PROPERTIES <==========
  
  // #region PUBLIC
  @Output() public onButtonClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onClose: EventEmitter<void> = new EventEmitter<void>();
  
  public configID: number = 0;
  public configName?: string;
  public configPassword?: string;
  public configDomain: string = "SISPRO";
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
  // #endregion ==========> INITIALIZATION <==========

}`,
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
    public modalUtils: ModalUtilsService,
    
    private _bsModalService: BsModalService,
    private _bsModalref: BsModalRef,

    private _messageService: MessageService,
    private _modalDemoService: ModalDemonstracaoService,
  ) { }

  ngOnInit() { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region GET
  public getConfig(): void {
    this._modalDemoService.getConfig().subscribe({
      next: response => {

        // Setamos a configuração do modal com base na resposta do método
        this.configModalInitialState = {
          configID: response.ID,
          configDomain: response.DOMAIN,    // Deve exibir no modal o valor "SISPROV6"
          configName: response.NAME,    // Deve exibir no modal o valor "Desenvolvedor"
          configPassword: response.PASSWORD   // Deve exibir no modal o valor "__dev_sispro"
        };

        // Chamamos o método de renderização do mesmo
        this.modalUtils.openInitialStateModal(GenericConfigModalComponent, response.ID, this.configModalInitialState);
        // ...neste exemplo eu estou definindo que o ID do modal será o mesmo ID do registro
      }
    });
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========

  public initializeConfig(): void {
    // ...lógica mais complexa que é executada antes da chamada do modal...

    // Neste exemplo não vamos definir o valor das variáveis com o initialState
    this.openInitialStateModal(GenericConfigModalComponent);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public openInitialStateModal(component: any, id?: any, initialState?: any, classes: string = "modal-dialog-centered"): void {
    this._bsModalref = this._bsModalService.show(component, {
      id: id,
      initialState: initialState,
      class: classes
    });

    // Para tratar emissões de eventos (EventEmitter), segue exemplo:
    this._bsModalref.content.onButtonClicked.subscribe(() => {
      // Lógica será chamada quando o evento 'onButtonClicked' for emitido lá no modal
      this._messageService.showAlertSuccess("Solicitação enviada com sucesso!");
    });

    this._bsModalref.content.onClose.subscribe(() => {
      this._bsModalService.hide(); // Lógica será chamada quando o evento 'onClose' for emitido lá no modal
    });
  }
  // #endregion ==========> UTILS <==========

}
