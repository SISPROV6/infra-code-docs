import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfraModule } from 'ngx-sp-infra';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    InfraModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  // [...]
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
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
