import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { FormUtils, InfraModule } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-mask',
  standalone: true,
  imports: [
    NavbarComponent,
    CodeSnippetComponent,
    CommonModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
    NgxPaginationModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  templateUrl: './mask.component.html',
  styleUrl: './mask.component.scss'
})
export class MaskComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _isCopied: boolean = false;
  // #endregion PRIVATE

  // #region PUBLIC
  public documento: string = "81245936798";
  public numero: string = "55984217835";
  public data: string = "07-11-2024";

  public showIcon: boolean = false;

  public codeSnippets: string[] = [
    `<input type="text" class="form-control" [specialCharacters]="[ '[' ,']' , '\\' ]" mask="[00]\[000]" />`,
    `<input type="text" class="form-control" prefix="+55" mask="(00) 0 0000-0000" />`,
    `<input type="text" class="form-control" suffix=" R$" mask="0000" />`,
    `<input type="text" class="form-control" [dropSpecialCharacters]="false" mask="000-000.00" />`,
    `<input type="text" class="form-control" prefix="+55 " mask="(00) 0 0000-0000" [showMaskTyped]="true" />`,
    `<input type="text" class="form-control" [allowNegativeNumbers]="true" mask="separator.2" />`,
    `<input type="text" class="form-control" prefix="+55 " mask="(00) 0 0000-0000" [showMaskTyped]="true" placeHolderCharacter="*" />`,
    `<input type="text" class="form-control" mask="U{2}-A{3}" />`,
    `<input type="text" class="form-control" mask="separator" />`,
    `<input type="text" class="form-control" mask="separator" thousandSeparator="." />`,
    `<input type="text" class="form-control" mask="separator.2" />`,
    `<input type="text" class="form-control" mask="separator.0" />`,
    `<input type="text" class="form-control" mask="separator.2" [leadZero]="true" />`,
    `<input type="text" class="form-control" mask="separator.2" separatorLimit="1000" />`,
    `<input type="text" class="form-control" mask="Hh:m0:s0" />`,
    `<input type="text" class="form-control" mask="d0/M0/0000" />`,
    `<input type="text" class="form-control" mask="Hh:m0:s0" [leadZeroDateTime]="true" />`,
    `<input type="text" class="form-control" mask="d0/M0/0000" [leadZeroDateTime]="true" />`,
    `<input type="text" class="form-control" mask="percent" suffix="%" />`,
    `<input type="text" class="form-control" mask="00 00" [validation]="true" [formControl]="maskControl" [class.is-invalid]="FormUtils.isInvalidField(this.maskControl)" />`,
    `<input type="text" class="form-control" mask="XXX/X0/0000" />`,
    `<input type="text" class="form-control" mask="IP" />`,
    `<input type="text" class="form-control" mask="CPF_CNPJ" />`,
    `<input type="text" class="form-control" mask="000.000.000-00||00.000.000/0000-00" />`,
    `<input type="text" class="form-control" mask="(00) 0000-0000||(00) 0 0000-0000" />`,
    `<input type="text" class="form-control" mask="00||SS" />`,

    `// .component.ts\npublic documento: string = "81245936798";\n\n// .component.html\n<p>Resultado: {{ documento | mask: 'CPF_CNPJ' }} </p>`,
    `// .component.ts\npublic numero: string = "55984217835";\n\n// .component.html\n<p>Resultado: {{ numero | mask: '(00) 0 0000-0000' }} </p>`,
    `// .component.ts\npublic data: string = "07-11-2024";\n\n// .component.html\n<p>Resultado: {{ data | mask: 'd0/M0/0000' }} </p>`,
  ];


  public get isCopied(): boolean { return this._isCopied; }
  public set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 3000) }
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORMS <==========

  // #region FORM FIELDS
  public get FormUtils(): typeof FormUtils { return FormUtils; }
  public maskControl: FormControl = new FormControl<string>("");
  // #endregion FORM FIELDS

  // #endregion ==========> FORMS <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    public utilsService: UtilsService,
  ) { }

  ngOnInit(): void {
    
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  public maskFilled(): void {
    this.showIcon = !this.showIcon;

    console.log("maskFilled");
    
  }
  // #endregion ==========> UTILS <==========

}
