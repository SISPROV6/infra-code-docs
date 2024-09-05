import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { VersionTagsComponent } from '../../../shared/components/version-tags/version-tags.component';
import { CommonModule } from '@angular/common';
import { InfraModule } from 'ngx-sp-infra';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { InstallationInstructionsComponent } from '../../../shared/components/installation-instructions/installation-instructions.component';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    CodeSnippetComponent,
    InstallationInstructionsComponent,
    NavbarComponent,
    VersionTagsComponent,
    
    CommonModule,
    InfraModule,
    RouterModule,
    TooltipModule,
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit, OnDestroy {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public iconName?: string;

  public iconSize?: 'default' | 'medium-small' | 'small' | number = 'default';
  public iconcolor?: 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string = 'currentColor';
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
