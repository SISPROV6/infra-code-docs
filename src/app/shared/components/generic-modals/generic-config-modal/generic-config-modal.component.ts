import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
//import { MessageService } from 'ngx-sp-infra';
import { InfraModule } from 'ngx-sp-infra';

@Component({
  selector: 'generic-config-modal',
  standalone: true,
  imports: [
    InfraModule,
    FormsModule,
    TooltipModule
  ],
  template: `
    <div class="modal-content">
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
  </div>
  `,
  styles: ``
})
export class GenericConfigModalComponent implements OnInit, OnDestroy {

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


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
