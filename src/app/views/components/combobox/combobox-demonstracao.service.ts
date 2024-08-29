import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { RecordCombobox, RetRecordsCombobox } from 'ngx-sp-infra';

@Injectable({
  providedIn: 'root'
})
export class ComboboxDemonstracaoService {

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
  public getSituacoesCombobox(): Observable<RetRecordsCombobox> {
    const retorno: RetRecordsCombobox = {
      Error: false,
      ErrorMessage: '',
      Records: this.initializeSituacoes()
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }

  public getPessoasCombobox(): Observable<RetRecordsCombobox> {
    const retorno: RetRecordsCombobox = {
      Error: false,
      ErrorMessage: '',
      Records: this.initializePessoas()
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }

  public getEmpresasCombobox(): Observable<RetRecordsCombobox> {
    const retorno: RetRecordsCombobox = {
      Error: false,
      ErrorMessage: '',
      Records: this.initializeEmpresas()
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }
  // #endregion PREPARATION

  // #region GET
  public getEstabelecimentosCombobox(empresaID: string): Observable<RetRecordsCombobox> {
    const retorno: RetRecordsCombobox = {
      Error: false,
      ErrorMessage: '',
      Records: this.initializeEstabelecimentos().filter(estab => estab.AdditionalStringProperty1 === empresaID)
    };

    // * Operador 'of()' cria um Observable do tipo entre parênteses,
    // * nesta situação está sendo usada para simular uma chamada http
    return of(retorno);
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  private initializeSituacoes(): RecordCombobox[] {
    return [
      { ID: 'ELABORACAO', LABEL: 'Elaboração' },
      { ID: 'WORKFLOW', LABEL: 'Workflow' },
      { ID: 'ASSINATURA', LABEL: 'Assinatura' },
      { ID: 'ENCERRADO', LABEL: 'Encerrado' },
      { ID: 'CANCELADO', LABEL: 'Cancelado' },
      { ID: 'VENCIDO', LABEL: 'Vencido' }
    ];
  }

  private initializePessoas(): RecordCombobox[] {
    return [
      { ID: 'ccf27a4a-eaf1-48d2-ba89-840e7d953e91', LABEL: 'Rodrigo Souza', AdditionalStringProperty1: '678.109.234-55' },
      { ID: 'afcc6cb9-32a3-4d34-96b7-0e74acad7663', LABEL: 'Gabriela Cardoso', AdditionalStringProperty1: '567.098.123-44' },
      { ID: '77bcd182-785e-41bd-a127-b572cd12b3b9', LABEL: 'Maria Oliveira', AdditionalStringProperty1: '234.567.890-11' },
      { ID: '5365b7b1-5613-44a5-bff6-ff6bb6376ca2', LABEL: 'Pedro Almeida', AdditionalStringProperty1: '567.890.123-44' },
      { ID: '30be2135-dbfd-4b16-8920-56075d802ed5', LABEL: 'João Silva', AdditionalStringProperty1: '123.456.789-00' },
      { ID: '88071812-cbbc-4cf3-baed-4ff9147fd2fb', LABEL: 'Lucas Gomes', AdditionalStringProperty1: '678.901.234-55' },
      { ID: '4360ca4d-0911-44f0-829b-153f5b2ac19a', LABEL: 'Fernanda Costa', AdditionalStringProperty1: '789.012.345-66' },
      { ID: '12b15cd2-5105-47a5-8d36-5ea944ddc53e', LABEL: 'Ana Pereira', AdditionalStringProperty1: '456.789.012-33' },
      { ID: '85f2269f-b823-4518-ba75-e44cbb1c5b17', LABEL: 'Rafael Martins', AdditionalStringProperty1: '890.123.456-77' },
      { ID: '8f89e631-4195-47f9-9026-c9dfb0922f5f', LABEL: 'Juliana Lima', AdditionalStringProperty1: '901.234.567-88' },
      { ID: '68f708de-d505-4fee-a99e-43f774526635', LABEL: 'Felipe Araujo', AdditionalStringProperty1: '012.345.678-99' },
      { ID: '41434a7d-2172-44ba-b25d-3e626f6beb35', LABEL: 'Patrícia Mendes', AdditionalStringProperty1: '123.654.789-00' },
      { ID: 'b8c75886-a599-4eb2-8b62-baee48c8afc8', LABEL: 'Ricardo Rodrigues', AdditionalStringProperty1: '234.765.890-11' },
      { ID: '5b03bf30-95b1-4f5d-a01d-d6681a0b1f2e', LABEL: 'Bruna Santos', AdditionalStringProperty1: '345.876.901-22' },
      { ID: 'c299d24e-1df8-4a7f-bacc-546da13191e0', LABEL: 'Carlos Souza', AdditionalStringProperty1: '345.678.901-22' },
      { ID: '42818b97-37d2-4d2b-b594-2846577b8f43', LABEL: 'Thiago Nunes', AdditionalStringProperty1: '456.987.012-33' },
      { ID: '0a6a422a-2fb9-47cd-9c4b-3e0a7066c2d7', LABEL: 'Larissa Ribeiro', AdditionalStringProperty1: '789.210.345-66' },
      { ID: '5f1fb37f-f543-4996-ae38-6332157000a8', LABEL: 'Eduardo Fernandes', AdditionalStringProperty1: '890.321.456-77' },
      { ID: '6f03c252-a520-4bad-a090-6bac61eb4bc8', LABEL: 'Beatriz Faria', AdditionalStringProperty1: '901.432.567-88' },
      { ID: 'd4135a37-4f6f-4724-afe7-01482680bf5b', LABEL: 'Erick Carvalho', AdditionalStringProperty1: '866.121.230-87' },
    ];
  }

  public initializeEmpresas(): RecordCombobox[] {
    return [
      { ID: 'AURORA', LABEL: 'Aurora Lounge Hotéis', AdditionalStringProperty1: '12.345.678/0001-99' },
      { ID: 'VIASET', LABEL: 'ViaSet Transportes', AdditionalStringProperty1: '98.765.432/0001-88' },
      { ID: 'TECHLAB', LABEL: 'TechLab Soluções Digitais', AdditionalStringProperty1: '11.222.333/0001-44' },
      { ID: 'ECOCLEAN', LABEL: 'EcoClean Serviços Ambientais', AdditionalStringProperty1: '55.444.333/0001-77' },
      { ID: 'SUPERFOOD', LABEL: 'SuperFood Alimentos', AdditionalStringProperty1: '22.333.444/0001-55' },
      { ID: 'CONSTRUCT', LABEL: 'Construct Engenharia', AdditionalStringProperty1: '66.555.777/0001-66' },
      { ID: 'HEALTHCARE', LABEL: 'HealthCare Equipamentos Médicos', AdditionalStringProperty1: '33.111.555/0001-88' },
      { ID: 'FINANCEIRA', LABEL: 'Financeira ABC', AdditionalStringProperty1: '44.666.222/0001-99' },
      { ID: 'ENERGY', LABEL: 'Energy Brasil Energia', AdditionalStringProperty1: '77.888.999/0001-00' },
      { ID: 'CLEANWATER', LABEL: 'CleanWater Tratamento de Água', AdditionalStringProperty1: '88.999.777/0001-11' },
      { ID: 'AGRISOL', LABEL: 'AgriSol Fertilizantes', AdditionalStringProperty1: '99.111.888/0001-22' },
      { ID: 'URBANIZE', LABEL: 'Urbanize Incorporações', AdditionalStringProperty1: '00.222.999/0001-33' },
      { ID: 'ELETROBR', LABEL: 'EletroBR Materiais Elétricos', AdditionalStringProperty1: '55.111.666/0001-44' },
      { ID: 'BIOPHARMA', LABEL: 'BioPharma Indústria Farmacêutica', AdditionalStringProperty1: '66.444.111/0001-55' },
      { ID: 'TECNOLOG', LABEL: 'Tecnolog Inovações', AdditionalStringProperty1: '77.555.333/0001-66' },
      { ID: 'LOGIBRAS', LABEL: 'Logibras Logística', AdditionalStringProperty1: '88.666.444/0001-77' },
      { ID: 'GOURMET', LABEL: 'Gourmet Delícias', AdditionalStringProperty1: '99.777.555/0001-88' },
      { ID: 'AUTOMOTIV', LABEL: 'Automotiv Peças', AdditionalStringProperty1: '11.888.666/0001-99' },
      { ID: 'VITAVET', LABEL: 'VitaVet Produtos Veterinários', AdditionalStringProperty1: '22.999.777/0001-00' },
      { ID: 'CYBERTECH', LABEL: 'CyberTech Segurança Digital', AdditionalStringProperty1: '33.111.888/0001-11' },
    ];
  }

  public initializeEstabelecimentos(): RecordCombobox[] {
    return [
      // Estabelecimentos da Aurora Lounge Hotéis
      { ID: 'AUR-CTR01', LABEL: 'Agência 01 Aurora, Centro', AdditionalStringProperty1: 'AURORA' },
      { ID: 'AUR-NOR02', LABEL: 'Agência 02 Aurora, Norte', AdditionalStringProperty1: 'AURORA' },
      { ID: 'AUR-NOR05', LABEL: 'Agência 02 Aurora, Norte', AdditionalStringProperty1: 'AURORA' },
      { ID: 'AUR-SUL03', LABEL: 'Agência 03 Aurora, Sul', AdditionalStringProperty1: 'AURORA' },
      { ID: 'AUR-LST04', LABEL: 'Agência 04 Aurora, Leste', AdditionalStringProperty1: 'AURORA' },
      
      // Estabelecimentos da ViaSet Transportes
      { ID: 'VIA-CTR01', LABEL: 'Terminal ViaSet, Centro', AdditionalStringProperty1: 'VIASET' },
      { ID: 'VIA-NOR03', LABEL: 'Terminal ViaSet, Norte', AdditionalStringProperty1: 'VIASET' },
      { ID: 'VIA-LST04', LABEL: 'Terminal ViaSet, Leste', AdditionalStringProperty1: 'VIASET' },

      // Estabelecimentos da TechLab Soluções Digitais
      { ID: 'TCH-HQ01', LABEL: 'TechLab HQ', AdditionalStringProperty1: 'TECHLAB' },
      { ID: 'TCH-NOR03', LABEL: 'TechLab Norte', AdditionalStringProperty1: 'TECHLAB' },
      { ID: 'TCH-CTR02', LABEL: 'TechLab Centro', AdditionalStringProperty1: 'TECHLAB' },
      { ID: 'TCH-LST04', LABEL: 'TechLab Leste', AdditionalStringProperty1: 'TECHLAB' },

      // Estabelecimentos da EcoClean Serviços Ambientais
      { ID: 'ECO-HQ01', LABEL: 'EcoClean Matriz', AdditionalStringProperty1: 'ECOCLEAN' },
      { ID: 'ECO-CTR02', LABEL: 'EcoClean Filial Centro', AdditionalStringProperty1: 'ECOCLEAN' },
      { ID: 'ECO-NOR03', LABEL: 'EcoClean Filial Norte', AdditionalStringProperty1: 'ECOCLEAN' },
      { ID: 'ECO-LST04', LABEL: 'EcoClean Filial Leste', AdditionalStringProperty1: 'ECOCLEAN' },

      // Estabelecimentos da SuperFood Alimentos
      { ID: 'SUP-SUL03', LABEL: 'SuperFood Sul', AdditionalStringProperty1: 'SUPERFOOD' },
      { ID: 'SUP-NOR04', LABEL: 'SuperFood Norte', AdditionalStringProperty1: 'SUPERFOOD' },

      // Estabelecimentos da Construct Engenharia
      { ID: 'CST-HQ01', LABEL: 'Construct Matriz', AdditionalStringProperty1: 'CONSTRUCT' },
      { ID: 'CST-NOR02', LABEL: 'Construct Norte', AdditionalStringProperty1: 'CONSTRUCT' },
      { ID: 'CST-SUL03', LABEL: 'Construct Sul', AdditionalStringProperty1: 'CONSTRUCT' },
      { ID: 'CST-LST04', LABEL: 'Construct Leste', AdditionalStringProperty1: 'CONSTRUCT' },

      // Estabelecimentos da Financeira ABC
      { ID: 'FIN-CTR01', LABEL: 'Financeira ABC Centro', AdditionalStringProperty1: 'FINANCEIRA' },
      { ID: 'FIN-SUL02', LABEL: 'Financeira ABC Sul', AdditionalStringProperty1: 'FINANCEIRA' },
      { ID: 'FIN-NOR03', LABEL: 'Financeira ABC Norte', AdditionalStringProperty1: 'FINANCEIRA' },
      { ID: 'FIN-LST04', LABEL: 'Financeira ABC Leste', AdditionalStringProperty1: 'FINANCEIRA' },
      { ID: 'FIN-LST07', LABEL: 'Financeira ABC Leste', AdditionalStringProperty1: 'FINANCEIRA' },

      // Estabelecimentos da EletroBR Materiais Elétricos
      { ID: 'ELT-NOR04', LABEL: 'EletroBR Filial Norte', AdditionalStringProperty1: 'ELETROBR' },

      // Estabelecimentos da BioPharma Indústria Farmacêutica
      { ID: 'BIO-HQ01', LABEL: 'BioPharma Matriz', AdditionalStringProperty1: 'BIOPHARMA' },
      { ID: 'BIO-LST02', LABEL: 'BioPharma Filial Leste', AdditionalStringProperty1: 'BIOPHARMA' },
      { ID: 'BIO-NOR03', LABEL: 'BioPharma Filial Norte', AdditionalStringProperty1: 'BIOPHARMA' },
      { ID: 'BIO-SUL04', LABEL: 'BioPharma Filial Sul', AdditionalStringProperty1: 'BIOPHARMA' },

      // Estabelecimentos da Logibras Logística
      { ID: 'LOG-CTR01', LABEL: 'Logibras Filial Centro', AdditionalStringProperty1: 'LOGIBRAS' },
      { ID: 'LOG-NOR02', LABEL: 'Logibras Filial Norte', AdditionalStringProperty1: 'LOGIBRAS' },
      { ID: 'LOG-SUL03', LABEL: 'Logibras Filial Sul', AdditionalStringProperty1: 'LOGIBRAS' },
      { ID: 'LOG-LST04', LABEL: 'Logibras Filial Leste', AdditionalStringProperty1: 'LOGIBRAS' }
    ];
  }
  // #endregion ==========> UTILS <==========

}
