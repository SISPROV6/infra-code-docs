import { Component, Input } from '@angular/core';

@Component({
  selector: 'generic-form-modal',
  standalone: true,
  imports: [],
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ recordName ? "Editando registro: " + recordName : "Novo registro" }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Este modal simula um formulário de criação/edição...
        Observe o título!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Salvar</button>
      </div>
    </div>
  `,
  styles: `
    @import "../../../styles/global.scss";
  `
})
export class GenericFormModalComponent {

  // #region ==========> PROPERTIES <==========

  // #region PUBLIC
  @Input() public recordName?: string;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit() { }
  // #endregion ==========> INITIALIZATION <==========

}
