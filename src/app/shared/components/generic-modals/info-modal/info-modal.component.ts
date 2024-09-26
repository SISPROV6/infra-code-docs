import { Component } from '@angular/core';

@Component({
  selector: 'generic-info-modal',
  standalone: true,
  imports: [],
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Informativo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Este modal serve para informar algo para o usuário!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Não estou ciente!</button>
        <button type="button" class="btn btn-primary">Estou ciente!</button>
      </div>
    </div>
  `,
  styles: `
    @import "../../../styles/global.scss";
  `
})
export class InfoModalComponent {

}
