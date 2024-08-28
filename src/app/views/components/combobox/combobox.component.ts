import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils, InfraModule, RecordCombobox } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskPipe } from 'ngx-mask';
import { ComboboxDemonstracaoService } from './combobox-demonstracao.service';

@Component({
  selector: 'app-combobox',
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
    NgxMaskPipe
  ],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.scss'
})
export class ComboboxComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _isCopied: boolean = false;
  // #endregion PRIVATE

  // #region PUBLIC
  public pessoasList?: RecordCombobox[];  // Lista a ser usada, deve ser do tipo 'RecordCombobox' (este model está na 'ngx-sp-infra', não deve ser usada do projeto)
  public empresasList?: RecordCombobox[];  // Lista a ser usada, deve ser do tipo 'RecordCombobox' (este model está na 'ngx-sp-infra', não deve ser usada do projeto)
  public estabelecimentosList: RecordCombobox[] = [];  // Lista a ser usada, deve ser do tipo 'RecordCombobox' (este model está na 'ngx-sp-infra', não deve ser usada do projeto)

  public codeSnippets: string[] = [
    "// Em uma estrutura de uma tela de Usuários, por exemplo\n// No arquivo usuarios.module.ts:\n@NgModule( {\n   declarations: [\n      // ...outros componentes\n      PainelUsuariosComponent,\n      FormularioUsuarioComponent\n   ],\n   imports: [\n      // ...outros imports\n      ProjectModule,\n      UsuariosRoutingModule\n   ],\n   exports: [\n         // ...\n   ]\n})\nexport class UsuariosModule { }",
    "<label for='tipoPessoa1' class='form-label'>Tipo de pessoa</label>\n                              <select id='tipoPessoa1' class='form-select' formControlName='TIPOPESSOAID'>\n                                 <option [value]='null' disabled selected>Selecione um tipo de pessoa</option>\n                                 <option value='FIS'>Física</option>\n                                 <option value='JUR'>Jurídica</option>\n                              </select>",
    "public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formSelect1: FormGroup = new FormGroup({\n    // ...outros controls\n    TIPOPESSOAID: new FormControl<string | null>(null),\n  });",
    "<lib-combobox labelText='Pessoa' [control]='formCadastro.controls['CRPPESSOAID']' [list]='pessoasList' />",
    "public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formExemplo1: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPPESSOAID: new FormControl<string | null>(null)\n  });",
    "<lib-combobox labelText='Pessoa'\n                                 [libRequired]='true'\n                                 [list]='pessoasList'\n                                 [control]='formExemplo2.controls['CRPPESSOAID']' />",
    "public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formExemplo2: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])\n  });",
    "<lib-combobox labelText='Pessoa'\n                                 [libRequired]='true'\n                                 [list]='pessoasList'\n                                 [control]='formExemplo2.controls['CRPPESSOAID']' />",
    "public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formExemplo3: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPPESSOAID: new FormControl<string | null>('b8c75886-a599-4eb2-8b62-baee48c8afc8', [Validators.required])\n  });",
    "<form [formGroup]='formExemplo5'>\n                           <div class='row'>\n                              <div class='col-6'>\n                                 <lib-combobox labelText='Empresa'\n                                    [libRequired]='true'\n                                    [list]='empresasList'\n                                    [control]='formExemplo5.controls['CRPEMPRESAID']' />\n                              </div>\n\n                              <div class='col-6'>\n                                 <lib-combobox labelText='Estabelecimento'\n                                    [list]='estabelecimentosList'\n                                    [control]='formExemplo5.controls['CRPESTABELECIMENTOID']' />\n                              </div>\n                           </div>\n                        </form>",
    "public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formExemplo5: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPEMPRESAID: new FormControl<string | null>(null, [Validators.required]),\n    CRPESTABELECIMENTOID: new FormControl<string | null>(null)\n  });",
    "",
  ];

  public get isCopied(): boolean { return this._isCopied; }
  public set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 5000) }
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========
  
  // #region FORM BUILDER
  public get FormUtils(): typeof FormUtils { return FormUtils; }

  public formSelect1: FormGroup = new FormGroup({
    // ...outros controls
    TIPOPESSOAID: new FormControl<string | null>(null),
  });
  public formSelect2: FormGroup = new FormGroup({
    // ...outros controls
    TIPOPESSOAID: new FormControl<string | null>(null),
  });
  public formSelect3: FormGroup = new FormGroup({
    // ...outros controls
    TIPOPESSOAID: new FormControl<string | null>(null),
  });
  public formSelect4: FormGroup = new FormGroup({
    // ...outros controls
    TIPOPESSOAID: new FormControl<string | null>(null),
  });

  public formCombobox1: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null),
  });
  public formCombobox2: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])
  });
  public formCombobox3: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>('b8c75886-a599-4eb2-8b62-baee48c8afc8', [Validators.required])
  });
  public formCombobox4: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])
  });
  public formCombobox5: FormGroup = new FormGroup({
    // ...outros controls
    CRPEMPRESAID: new FormControl<string | null>(null, [Validators.required]),
    CRPESTABELECIMENTOID: new FormControl<string | null>(null)
  });
  // #endregion FORM BUILDER

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _comboboxDemo: ComboboxDemonstracaoService,
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.getPessoasCombobox();
    this.getEmpresasCombobox();
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  private getPessoasCombobox(): void {
    this._comboboxDemo.getPessoasCombobox().subscribe({
      next: response => { this.pessoasList = response.Records }
    });
  }

  private getEmpresasCombobox(): void {
    this._comboboxDemo.getEmpresasCombobox().subscribe({
      next: response => { this.empresasList = response.Records }
    });
  }
  // #endregion PREPARATION

  // #region GET
  public getEstabelecimentosCombobox(): void {
    this._comboboxDemo.getEstabelecimentosCombobox(this.formCombobox5.controls['CRPEMPRESAID'].value).subscribe({
      next: response => {
        console.log(this.formCombobox5.controls);
        console.log(response.Records);
        
        this.formCombobox5.controls['CRPESTABELECIMENTOID'].setValue(null);
        this.estabelecimentosList = response.Records;

        console.log(this.formCombobox5.controls);
      }
    });
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
