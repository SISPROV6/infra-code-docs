import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IconModel, IconsList, InfraModule, ModalUtilsService } from 'ngx-sp-infra';

import { CodeSnippetComponent } from '../../../../shared/components/code-snippet/code-snippet.component';
import { VersionTagsComponent } from '../../../../shared/components/version-tags/version-tags.component';

@Component({
  selector: 'icone-modal',
  standalone: true,
  imports: [
    CodeSnippetComponent,
    VersionTagsComponent,

    CommonModule,
    FormsModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
  ],
  templateUrl: './icone-modal.component.html',
  styleUrl: './icone-modal.component.scss'
})
export class IconeModalComponent implements OnInit, AfterContentInit, OnDestroy {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public iconName?: string;

  public iconSize?: 'default' | 'medium-small' | 'small' | number = 'default';
  public iconcolor?: 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string = 'blue';
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========

  // #region FORM FIELDS
  // [...]
  // #endregion FORM FIELDS

  // #region FORM BUILDER
  // [...]
  // #endregion FORM BUILDER

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void { }

  ngAfterContentInit(): void { }

  ngOnDestroy(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

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

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
