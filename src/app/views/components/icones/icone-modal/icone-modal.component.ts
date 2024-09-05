import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IconModel, InfraModule } from 'ngx-sp-infra';

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
  public iconData!: IconModel;

  public customIconSize?: 'default' | 'medium-small' | 'small' | number;
  public customIconColor?: 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string;

  public iconCode: string = `<lib-icon iconName="nome" />`;
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

  ngAfterContentInit(): void {
    const iconSizeFormatted = this.customIconSize 
      ? this.customIconSize == "default" || this.customIconSize == "medium-small" || this.customIconSize == "small"
        ? `iconSize="${this.customIconSize}"`
        : `[iconSize]="${this.customIconSize}"`
      : "";

    const iconThemeFormatted = this.customIconColor 
      ? `iconColor="${this.customIconColor}"`
      : "";

    this.iconCode = `<lib-icon iconName="${this.iconData.nome}" ${iconSizeFormatted} ${iconThemeFormatted} />`;
  }

  ngOnDestroy(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  public updateIconAppearance(): void {
    switch (this.customIconSize) {
      case 18: this.customIconSize = "small"; break;
      case 20: this.customIconSize = "medium-small"; break;
      case 24: this.customIconSize = "default"; break;
      default: this.customIconSize = this.customIconSize; break;
    }

    const iconSizeFormatted = this.customIconSize 
      ? this.customIconSize == "default" || this.customIconSize == "medium-small" || this.customIconSize == "small"
        ? `iconSize="${this.customIconSize}"`
        : `[iconSize]="${this.customIconSize}"`
      : "";

    const iconThemeFormatted = this.customIconColor 
      ? `iconColor="${this.customIconColor}"`
      : "";

    this.iconCode = `<lib-icon iconName="${this.iconData.nome}" ${iconSizeFormatted} ${iconThemeFormatted} />`;
  }
  // #endregion ==========> UTILS <==========

}
