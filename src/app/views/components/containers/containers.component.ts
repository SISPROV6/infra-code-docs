import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InfraModule } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { InstallationInstructionsComponent } from '../../../shared/components/installation-instructions/installation-instructions.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-containers',
  standalone: true,
  imports: [
    NavbarComponent,
    CodeSnippetComponent,
    CommonModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
    InstallationInstructionsComponent
  ],
  templateUrl: './containers.component.html',
  styleUrl: './containers.component.scss'
})
export class ContainersComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _isCopied: boolean = false;
  // #endregion PRIVATE

  // #region PUBLIC
  public editingMode1: boolean = false;


  public codeSnippets: string[] = [
    `<lib-container [tabs]="[ 'Aba 1', 'Aba 2' ]">
  <div innerContent1>     <!-- DIV para conteúdo 1 -->
    Este conteúdo é um exemplo de demonstração da aba 1
  </div>

  <div innerContent2>     <!-- DIV para conteúdo 2 -->
    Este conteúdo é um exemplo de demonstração da aba 2
  </div>
</lib-container>`,
    `<lib-container containerTitle="Conteúdo de exemplo">
  <div innerContent1>
    Este conteúdo é um exemplo de demonstração
  </div>
</lib-container>`,
    `<lib-container containerTitle="Dados do produto">
  <div innerContent1>
    <form>
      <div class="row">
        <div class="col">
          <label libRequired class="form-label" for="codBarras1">Código de barras</label>
          <input type="text" id="codBarras1" class="form-control" placeholder="000000000000000 0">
        </div>
        <div class="col">
          <label libRequired class="form-label" for="nomeProduto1">Nome do produto</label>
          <input type="text" id="nomeProduto1" class="form-control" placeholder="Cadeira de escritório">
        </div>
      </div>
    </form>
  </div>
</lib-container>`,
    `<lib-container [tabs]="[ 'Dados do produto', 'Dados do cliente', 'Dados de entrega' ]">
  <div innerContent1>
    <form>
      <div class="row">
        <div class="col">
          <label libRequired class="form-label" for="codBarras2">Código de barras</label>
          <input type="text" id="codBarras2" class="form-control" placeholder="000000000000000 0">
        </div>
        <div class="col">
          <label libRequired class="form-label" for="nomeProduto2">Nome do produto</label>
          <input type="text" id="nomeProduto2" class="form-control" placeholder="Cadeira de escritório">
        </div>
      </div>
    </form>
  </div>

  <div innerContent2>
    <form>
      <div class="row">
        <div class="col">
          <label libRequired class="form-label" for="cpfPessoa1">Documento</label>
          <input type="text" id="cpfPessoa1" class="form-control" placeholder="000.000.000-00">
        </div>
        <div class="col">
          <label libRequired class="form-label" for="nomePessoa1">Nome</label>
          <input type="text" id="nomePessoa1" class="form-control" placeholder="João da Silva Gomes">
        </div>
      </div>
    </form>
  </div>

  <div innerContent3>
    <form>
      <div class="row">
        <div class="col">
          <label libRequired class="form-label" for="cepEntrega1">CEP</label>
          <input type="text" id="cepEntrega1" class="form-control" placeholder="00000-000">
        </div>
        <div class="col">
          <label libRequired class="form-label" for="enderecoEntrega1">Endereço</label>
          <input type="text" id="enderecoEntrega1" class="form-control" placeholder="Av. das Árvores, 8654">
        </div>
      </div>
    </form>
  </div>
</lib-container>`,
    `<lib-container [tabs]="editingMode ? [ 'Dados do produto', 'Dados do cliente', 'Dados da entrega' ] : [  ]"
  containerTitle="Dados do produto">
  <div innerContent1>
    Este conteúdo é um exemplo de demonstração do conteúdo da aba <b>Dados do produto</b>
  </div>

  <div innerContent2>
    Este conteúdo é um exemplo de demonstração do conteúdo da aba <b>Dados do cliente</b>
  </div>

  <div innerContent3>
    Este conteúdo é um exemplo de demonstração do conteúdo da aba <b>Dados da entrega</b>
  </div>
</lib-container>`,
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
    public utilsService: UtilsService
  ) { }

  ngOnInit() { }
  // #endregion ==========> INITIALIZATION <==========

}
