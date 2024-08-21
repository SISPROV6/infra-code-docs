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
  public components: { nome: string, rota: string, descricao: string }[] = [
    { nome: "Header", rota: "header", descricao: "Header componentizado na biblioteca interna" },
    { nome: "Cards", rota: "cards", descricao: "Card componentizado na biblioteca interna" },
    { nome: "Paginação", rota: "pagination", descricao: "Paginação componentizada na biblioteca interna" },
    { nome: "Ordenação", rota: "ordenation", descricao: "Ordenação componentizada na biblioteca interna" },
    { nome: "Ícones", rota: "icones", descricao: "Ícones da biblioteca interna" },
    { nome: "Validadores", rota: "validators", descricao: "Rotinas de validação na biblioteca interna" },
    { nome: "Contâiners e Abas", rota: "container-e-abas", descricao: "Container com abas componentizado na biblioteca interna" },
    { nome: "Tabela", rota: "table", descricao: "Tabela componentizada na biblioteca interna" },
    { nome: "Máscara", rota: "mask", descricao: "Máscaras para inputs/texto puro" },
    { nome: "Input de arquivo", rota: "input-arquivo", descricao: "Input específico para seleção de arquivo(s)" },
    { nome: "Selects e Combobox", rota: "select-e-combobox", descricao: "Combobox componentizado na biblioteca interna" },
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
