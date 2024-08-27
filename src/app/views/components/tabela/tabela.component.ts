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
    NgxMaskPipe
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
  public recordsList?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo

  public page: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente
	public itemsPerPage: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente

  public codeSnippets: string[] = [
    "// Em uma estrutura de uma tela de Usuários, por exemplo\n// No arquivo usuarios.module.ts:\n@NgModule( {\n   declarations: [\n      // ...outros componentes\n      PainelUsuariosComponent,\n      FormularioUsuarioComponent\n   ],\n   imports: [\n      // ...outros imports\n      ProjectModule,\n      UsuariosRoutingModule\n   ],\n   exports: [\n         // ...\n   ]\n})\nexport class UsuariosModule { }",
    "<lib-table innerContent [list]='recordsList' [counts]='[ 5, 10, 20 ]'\n   [headers]='[\n      { name: 'Nome', col: 2 },\n      { name: 'Descrição', col: 3 },\n      { name: 'Valor', col: 1, customClasses: 'text-end' },\n      { name: 'Datas', col: 4 },\n      { name: 'Ações', col: 2, customClasses: 'text-end' }\n   ]'\n   (itemsPerPageChange)='itemsPerPage = $event'\n   (pageChange)='page = $even\n\n   @for (item of recordsList! | paginate: { itemsPerPage: itemsPerPage, currentPage: page }; track item) {\n      <tr innerRows class='align-middle'>\n         <td> <a class='text-primary text-decoration-none fw-bold' tooltip='Editar/Visualizar'>{{ item.nome }}</a> </td>\n         <td>{{ item.descricao }}</td>\n         <td class='text-end'>{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n         <td>\n            <p class='my-0'><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n            <p class='my-0'><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == '01/01/1900' ? 'Nenhuma alteração recente' : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n         </td>\n         <td>\n            <div class='d-flex flex-row align-items-center justify-content-end'>\n               <app-svg-storage svgName='editar' svgColor='blue' tooltip='Visualizar/Editar' />\n               <div class='form-check form-switch ms-2'> <input class='form-check-input' type='checkbox' role='switch' [checked]='item.isAtivo'> </div>\n            </div>\n         </td>\n      </tr>\n   }\n   @empty {\n      <tr innerRows> <td colspan='12' class='align-middle'><span class='fw-light fst-italic text-center'> Consulta não retornou registros... </span></td> </tr>\n   }\n</lib-table>",
    "public recordsList?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo\n\npublic page: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente\npublic itemsPerPage: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente",
    "<lib-table innerContent [list]='recordsList'\n   [counts]='[ 5, 10, 20 ]' placement='start'\n   [headers]='[\n      { name: 'Nome', col: 2 },\n      { name: 'Descrição', col: 3 },\n      { name: 'Valor', col: 1, customClasses: 'text-end' },\n      { name: 'Datas', col: 4 },\n      { name: 'Ações', col: 2, customClasses: 'text-end' }\n   ]'\n   (itemsPerPageChange)='itemsPerPage = $event'\n   (pageChange)='page = $event'>\n\n   @for (item of recordsList! | paginate: { itemsPerPage: itemsPerPage, currentPage: page }; track item) {\n      <tr innerRows class='align-middle'>\n         <td> <a class='text-primary text-decoration-none fw-bold' tooltip='Editar/Visualizar'>{{ item.nome }}</a> </td>\n         <td>{{ item.descricao }}</td>\n         <td class='text-end'>{{ item.valorTotal | mask: 'separator': {  thousandSeparator: '.', suffix: ' R$' } }}</td>\n         <td>\n            <p class='my-0'><b>Criado em: </b> {{ item.dataCriacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n            <p class='my-0'><b>Última alteração em: </b> {{ (item.dataUltimaModificacao | date: 'dd/MM/yyyy') == '01/01/1900' ? 'Nenhuma alteração recente' : item.dataUltimaModificacao | date: 'dd/MM/yyyy, HH:mm:ss' }}</p>\n         </td>\n         <td>\n            <div class='d-flex flex-row align-items-center justify-content-end'>\n               <app-svg-storage svgName='editar' svgColor='blue' tooltip='Visualizar/Editar' />\n               <div class='form-check form-switch ms-2'> <input class='form-check-input' type='checkbox' role='switch' [checked]='item.isAtivo'> </div>\n            </div>\n         </td>\n      </tr>\n   }\n   @empty {\n      <tr innerRows> <td colspan='12' class='align-middle'><span class='fw-light fst-italic text-center'> Consulta não retornou registros... </span></td> </tr>\n   }\n</lib-table>",
    "public recordsList?: RecordsListModel[];  // Lista a ser usada, pode ser de qualquer tipo\n\npublic page: number = 1;  // Propriedade necessária para explicitar qual página está selecionada atualmente\npublic itemsPerPage: number = 5;  // Propriedade necessária para renderizar apenas determinada quantidade por página inicialmente",
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
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.initializeList();
    }, 5000);
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  public initializeList(): void {
    this.recordsList = [
      {
        id: "e6231796-30f5-43db-91c3-e0343a4c73e9",
        nome: "Relatório Financeiro",
        descricao: "Relatório de despesas do mês",
        dataCriacao: new Date(2024, 7, 1),
        usuarioCriador: "joao.silva",
        statusRegistro: "pendente",
        dataUltimaModificacao: new Date(2024, 7, 2),
        quantidadeItens: 5,
        valorTotal: 1500,
        categoria: "Financeiro",
        isAtivo: true,
      },
      {
        id: "3db4607c-63d3-40a9-8e3b-a5edfbf3735b",
        nome: "Cadastro de Clientes",
        descricao: "Cadastro de novos clientes",
        dataCriacao: new Date(2024, 7, 10),
        usuarioCriador: "maria.souza",
        statusRegistro: "ativo",
        dataUltimaModificacao: new Date(2024, 7, 15),
        quantidadeItens: 25,
        valorTotal: 0,
        categoria: "CRM",
        isAtivo: true,
      },
      {
        id: "c4d3fb01-ed22-41ca-a4e8-dbc3e3076e81",
        nome: "Pedido de Compra",
        descricao: "Pedido de compra de materiais",
        dataCriacao: new Date(2024, 7, 12),
        usuarioCriador: "carlos.santos",
        statusRegistro: "finalizado",
        dataUltimaModificacao: new Date(2024, 7, 20),
        quantidadeItens: 10,
        valorTotal: 3200,
        categoria: "Compras",
        isAtivo: false,
      },
      {
        id: "0c77286f-f8f4-4ec1-93b9-4491f0139c5c",
        nome: "Auditoria Interna",
        descricao: "Auditoria dos processos internos",
        dataCriacao: new Date(2024, 7, 5),
        usuarioCriador: "ana.pereira",
        statusRegistro: "em andamento",
        dataUltimaModificacao: new Date(2024, 7, 18),
        quantidadeItens: 8,
        valorTotal: 0,
        categoria: "Qualidade",
        isAtivo: true,
      },
      {
        id: "c83e31b6-f26b-4acf-9c31-86cbefa295f1",
        nome: "Relatório de Vendas",
        descricao: "Análise das vendas trimestrais",
        dataCriacao: new Date(2024, 7, 7),
        usuarioCriador: "paulo.lima",
        statusRegistro: "concluído",
        dataUltimaModificacao: new Date(2024, 7, 21),
        quantidadeItens: 12,
        valorTotal: 5400,
        categoria: "Vendas",
        isAtivo: true,
      },
      {
        id: "752eb2c7-43c0-4651-877c-6be33dd83741",
        nome: "Planejamento Estratégico",
        descricao: "Planejamento anual da empresa",
        dataCriacao: new Date(2024, 7, 15),
        usuarioCriador: "rafaela.martins",
        statusRegistro: "pendente",
        dataUltimaModificacao: new Date(2024, 7, 22),
        quantidadeItens: 3,
        valorTotal: 0,
        categoria: "Estratégia",
        isAtivo: true,
      },
      {
        id: "048c4f5e-029d-4b15-ac2b-d082930dd74f",
        nome: "Inventário",
        descricao: "Contagem de estoque",
        dataCriacao: new Date(2024, 7, 20),
        usuarioCriador: "lucas.almeida",
        statusRegistro: "ativo",
        dataUltimaModificacao: new Date(2024, 7, 23),
        quantidadeItens: 50,
        valorTotal: 0,
        categoria: "Estoque",
        isAtivo: true,
      },
      {
        id: "c255efcd-8ed1-4c4b-8246-70d071ce8a34",
        nome: "Desempenho de Funcionários",
        descricao: "Avaliação de desempenho",
        dataCriacao: new Date(2024, 7, 8),
        usuarioCriador: "jessica.oliveira",
        statusRegistro: "finalizado",
        dataUltimaModificacao: new Date(2024, 7, 19),
        quantidadeItens: 15,
        valorTotal: 0,
        categoria: "RH",
        isAtivo: false,
      },
      {
        id: "faf61f4c-0b08-4b8c-9354-61759cf98d93",
        nome: "Campanha de Marketing",
        descricao: "Campanha de lançamento de produto",
        dataCriacao: new Date(2024, 7, 11),
        usuarioCriador: "fernando.gomes",
        statusRegistro: "em andamento",
        dataUltimaModificacao: new Date(2024, 7, 24),
        quantidadeItens: 6,
        valorTotal: 12000,
        categoria: "Marketing",
        isAtivo: true,
      },
      {
        id: "e168a8fc-0d7e-457a-9059-e138f8069124",
        nome: "Controle de Qualidade",
        descricao: "Verificação de qualidade dos produtos",
        dataCriacao: new Date(2024, 7, 13),
        usuarioCriador: "andre.silva",
        statusRegistro: "concluído",
        dataUltimaModificacao: new Date(2024, 7, 25),
        quantidadeItens: 20,
        valorTotal: 0,
        categoria: "Qualidade",
        isAtivo: true,
      }
    ];
  }

  // #endregion ==========> UTILS <==========

}
