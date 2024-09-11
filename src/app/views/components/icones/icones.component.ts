import { VersionTagsComponent } from './../../../shared/components/version-tags/version-tags.component';
import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IconModel, IconsList, InfraModule, ModalUtilsService } from 'ngx-sp-infra';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';
import { IconFilterPipe } from '../../../shared/pipes/icon-filter.pipe';
import { IconeModalComponent } from './icone-modal/icone-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InstallationInstructionsComponent } from "../../../shared/components/installation-instructions/installation-instructions.component";

@Component({
  selector: 'app-icones',
  standalone: true,
  imports: [
    CodeSnippetComponent,
    IconFilterPipe,
    IconeModalComponent,
    InstallationInstructionsComponent,
    NavbarComponent,
    VersionTagsComponent,

    CommonModule,
    FormsModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
],
  templateUrl: './icones.component.html',
  styleUrl: './icones.component.scss'
})
export class IconesComponent implements OnInit, AfterContentInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public categoriaSelected: string | null = null;
  public pesquisa: string = "";

  public iconsList: IconModel[] = [];
  public categoriasList: string[] = [];
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========

  // #region FORM FIELDS
  // [...]
  // #endregion FORM FIELDS

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _bsModalref: BsModalRef,
    private _bsModalService: BsModalService,

    public modalUtils: ModalUtilsService,
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.iconsList = new IconsList(24).list;
  }

  ngAfterContentInit(): void {
    this.categoriasList = this.iconsList.length > 0
    ? [ ...new Set(this.iconsList.map(icon => icon.categoria )) ].sort()
    : [];
  }
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
  public openModal(icon: IconModel): void {
    this._bsModalref = this._bsModalService.show(IconeModalComponent, {
      initialState: { iconData: icon },
      class: 'modal-dialog-centered modal-xl'
    });
  }
  // #endregion ==========> UTILS <==========

}
