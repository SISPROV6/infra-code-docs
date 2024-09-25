import { Injectable } from '@angular/core';
import { RetRecordsListModel } from './models/ret-lista.model';
import { Observable, of } from 'rxjs';
import { RecordsListModel } from './models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class TabelaDemonstracaoService {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  // [...]
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  // [...]
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  public getListaTable(): Observable<RetRecordsListModel> {
    const retorno: RetRecordsListModel = {
      Error: false,
      ErrorMessage: '',
      RecordsList: this.initializeListaTable()
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }

  public getListaTableLarge(): Observable<RetRecordsListModel> {
    const retorno: RetRecordsListModel = {
      Error: false,
      ErrorMessage: '',
      RecordsList: this.initializeListaTableLarge()
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }

  public getListaTableEmpty(): Observable<RetRecordsListModel> {
    const retorno: RetRecordsListModel = {
      Error: false,
      ErrorMessage: '',
      RecordsList: this.initializeListaTableEmpty()
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }
  // #endregion PREPARATION

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  private initializeListaTableEmpty(): RecordsListModel[] {
    return [];
  }

  private initializeListaTable(): RecordsListModel[] {
    return [
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
      }
    ];
  }

  private initializeListaTableLarge(): RecordsListModel[] {
    return [
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
      },
    ];
  }
  // #endregion ==========> UTILS <==========

}
