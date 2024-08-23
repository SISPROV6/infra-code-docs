import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public components: { nome: string, rota: string, descricao: string, implementacao: 0 | 1 | 2 }[] = [
    { nome: "Header", rota: "header", descricao: "Header componentizado na biblioteca interna", implementacao: 2 },
    { nome: "Tabela", rota: "table", descricao: "Tabela componentizada na biblioteca interna", implementacao: 1 },
    { nome: "Ícones", rota: "icones", descricao: "Ícones da biblioteca interna", implementacao: 1 },
    { nome: "Contâiners e Abas", rota: "container-e-abas", descricao: "Container com abas componentizado na biblioteca interna", implementacao: 0 },
    { nome: "Cards", rota: "cards", descricao: "Card componentizado na biblioteca interna", implementacao: 0 },
    { nome: "Modais", rota: "modals", descricao: "Padrões para exibição de modais nas telas", implementacao: 0 },
    { nome: "Paginação", rota: "pagination", descricao: "Paginação componentizada na biblioteca interna", implementacao: 0 },
    { nome: "Ordenação", rota: "ordenation", descricao: "Ordenação componentizada na biblioteca interna", implementacao: 0 },
    { nome: "Validadores", rota: "validators", descricao: "Rotinas de validação na biblioteca interna", implementacao: 0 },
    { nome: "Máscara", rota: "mask", descricao: "Máscaras para inputs/texto puro", implementacao: 0 },
    { nome: "Input de arquivo", rota: "input-arquivo", descricao: "Input específico para seleção de arquivo(s)", implementacao: 0 },
    { nome: "Selects e Combobox", rota: "select-e-combobox", descricao: "Combobox componentizado na biblioteca interna", implementacao: 0 },
  ];
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
  // [...]
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICES <==========

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

  // #endregion ==========> SERVICES <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
