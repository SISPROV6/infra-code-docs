import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { InstallationInstructionsComponent } from "../../../shared/components/installation-instructions/installation-instructions.component";
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-combobox',
  standalone: true,
  imports: [
    NavbarComponent,
    CodeSnippetComponent,
    InstallationInstructionsComponent,

    CommonModule,
    InfraModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
    NgxPaginationModule,
    NgxMaskPipe,
],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.scss'
})
export class ComboboxComponent implements OnInit, OnDestroy {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _subscriptions: Subscription = new Subscription();
  private _isCopied: boolean = false;
  // #endregion PRIVATE

  // #region PUBLIC
  public situacoesList?: RecordCombobox[];  // Lista a ser usada, deve ser do tipo 'RecordCombobox' (este model está na 'ngx-sp-infra', não deve ser usada do projeto)

  public pessoasList?: RecordCombobox[];  // Lista a ser usada, deve ser do tipo 'RecordCombobox' (este model está na 'ngx-sp-infra', não deve ser usada do projeto)
  public empresasList?: RecordCombobox[];  // Lista a ser usada, deve ser do tipo 'RecordCombobox' (este model está na 'ngx-sp-infra', não deve ser usada do projeto)
  public estabelecimentosList: RecordCombobox[] = [];  // Lista a ser usada, deve ser do tipo 'RecordCombobox' (este model está na 'ngx-sp-infra', não deve ser usada do projeto)

  public codeSnippets: string[] = [
    ``,
    `<label for="tipoPessoa1" class="form-label">Tipo de pessoa</label>\n                              <select id="tipoPessoa1" class="form-select" formControlName="TIPOPESSOAID">\n                                 <option [value]="null" disabled selected>Selecione um tipo de pessoa</option>\n                                 <option value="FIS">Física</option>\n                                 <option value="JUR">Jurídica</option>\n                              </select>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formSelect1: FormGroup = new FormGroup({\n    // ...outros controls\n    TIPOPESSOAID: new FormControl<string | null>(null),\n  });`,
    `<form [formGroup]="formSelect2">\n                        <div class="row">\n                           <div class="col-6">\n                              <label libRequired for="situacaoContrato1" class="form-label">Situação</label>\n                              <select id="situacaoContrato1" class="form-select" formControlName="SITUACAOCONTRATOID">\n                                 <option [value]="null" disabled selected> Selecione uma situação </option>\n                                 <option *ngFor="let situacao of situacoesList" [value]="situacao.ID"> {{ situacao.LABEL }} </option>\n                              </select>\n                           </div>\n                        </div>\n                     </form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formSelect2: FormGroup = new FormGroup({\n    // ...outros controls\n    SITUACAOCONTRATOID: new FormControl<string | null>(null, [Validators.required]),\n  });`,
    `<form [formGroup]="formCombobox1">\n                        <div class="row">\n                           <div class="col-6">\n                              <lib-combobox labelText="Pessoa" [list]="pessoasList" [control]="formCombobox1.controls['CRPPESSOAID']" />\n                           </div>\n                        </div>\n                     </form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formCombobox1: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPPESSOAID: new FormControl<string | null>(null),\n  });`,
    `<form [formGroup]="formCombobox2">\n                        <div class="row">\n                           <div class="col-6">\n                              <lib-combobox labelText="Pessoa"\n                                 [libRequired]="true"\n                                 [list]="pessoasList"\n                                 [control]="formCombobox2.controls['CRPPESSOAID']" />\n                           </div>\n                        </div>\n                     </form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formCombobox2: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])\n  });`,
    `<form [formGroup]="formCombobox3">\n                        <div class="row">\n                           <div class="col-6">\n                              <lib-combobox labelText="Pessoa"\n                                 [libRequired]="true"\n                                 [list]="pessoasList"\n                                 [control]="formCombobox3.controls['CRPPESSOAID']" />\n                           </div>\n                        </div>\n                     </form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formCombobox3: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPPESSOAID: new FormControl<string | null>("valor do ID", [Validators.required])\n  });`,
    `<div innerContent>\n                        <p class="mb-0">Definir valor do combo para:</p>\n                        <div class="btn-group mb-3" role="group" aria-label="Grupo de botões para definição de valor do combobox abaixo">\n                           <input type="radio" name="nomePessoa" class="btn-check" id="mariaOliveira" (change)="formCombobox4.controls['CRPPESSOAID'].setValue('77bcd182-785e-41bd-a127-b572cd12b3b9')">\n                           <label class="btn btn-sm btn-outline-primary" for="mariaOliveira">Maria Oliveira</label>\n\n                           <input type="radio" name="nomePessoa" class="btn-check" id="eduardoFernandes" (change)="formCombobox4.controls['CRPPESSOAID'].setValue('5f1fb37f-f543-4996-ae38-6332157000a8')">\n                           <label class="btn btn-sm btn-outline-primary" for="eduardoFernandes">Eduardo Fernandes</label>\n\n                           <input type="radio" name="nomePessoa" class="btn-check" id="julianaLima" (change)="formCombobox4.controls['CRPPESSOAID'].setValue('8f89e631-4195-47f9-9026-c9dfb0922f5f')">\n                           <label class="btn btn-sm btn-outline-primary" for="julianaLima">Juliana Lima</label>\n                           \n                           <input type="radio" name="nomePessoa" class="btn-check" id="beatrizFaria" (change)="formCombobox4.controls['CRPPESSOAID'].setValue('6f03c252-a520-4bad-a090-6bac61eb4bc8')">\n                           <label class="btn btn-sm btn-outline-primary" for="beatrizFaria">Beatriz Faria</label>\n\n                           <input type="radio" name="nomePessoa" class="btn-check" id="patriciaMendes" (change)="formCombobox4.controls['CRPPESSOAID'].setValue('41434a7d-2172-44ba-b25d-3e626f6beb35')">\n                           <label class="btn btn-sm btn-outline-primary" for="patriciaMendes">Patrícia Mendes</label>\n\n                           <input type="radio" name="nomePessoa" class="btn-check" id="joaoSilva" (change)="formCombobox4.controls['CRPPESSOAID'].setValue('30be2135-dbfd-4b16-8920-56075d802ed5')">\n                           <label class="btn btn-sm btn-outline-primary" for="joaoSilva">João Silva</label>\n\n                           <input type="radio" name="nomePessoa" class="btn-check" id="erickCarvalho" (change)="formCombobox4.controls['CRPPESSOAID'].setValue('d4135a37-4f6f-4724-afe7-01482680bf5b')">\n                           <label class="btn btn-sm btn-outline-primary" for="erickCarvalho">Erick Carvalho</label>\n\n                           <input type="radio" name="nomePessoa" class="btn-check" id="limparRadio" (change)="formCombobox4.controls['CRPPESSOAID'].setValue(null)">\n                           <label class="btn btn-sm btn-outline-primary" for="limparRadio">LIMPAR</label>\n                        </div>\n   \n                        <form [formGroup]="formCombobox4">\n                           <div class="row">\n                              <div class="col-6">\n                                 <lib-combobox labelText="Pessoa"\n                                    [libRequired]="true"\n                                    [list]="pessoasList"\n                                    [control]="formCombobox4.controls['CRPPESSOAID']" />\n                              </div>\n                           </div>\n                        </form>\n                     </div>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formCombobox4: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])\n  });`,
    `<div innerContent>\n                        <form [formGroup]="formCombobox5">\n                           <div class="row">\n                              <div class="col-6">\n                                 <lib-combobox labelText="Empresa"\n                                    [libRequired]="true"\n                                    [list]="empresasList"\n                                    [control]="formCombobox5.controls['CRPEMPRESAID']" />\n                              </div>\n\n                              <div class="col-6">\n                                 <lib-combobox labelText="Estabelecimento"\n                                    [list]="estabelecimentosList"\n                                    [control]="formCombobox5.controls['CRPESTABELECIMENTOID']" />\n                              </div>\n                           </div>\n                        </form>\n                     </div>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\n  public formCombobox5: FormGroup = new FormGroup({\n    // ...outros controls\n    CRPEMPRESAID: new FormControl<string | null>(null, [Validators.required]),\n    CRPESTABELECIMENTOID: new FormControl<string | null>(null)\n  });`,
  ];

  public get isCopied(): boolean { return this._isCopied; }
  public set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 5000) }
  }


  public disabledInputs: Map<string, boolean> = new Map<string, boolean>().set("formCombobox4", false);
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
    SITUACAOCONTRATOID: new FormControl<string | null>(null, [Validators.required]),
  });
  public formSelect3: FormGroup = new FormGroup({
    // ...outros controls
    SITUACAOCONTRATOID: new FormControl<string | null>(null, [Validators.required]),
  });
  public formSelect4: FormGroup = new FormGroup({
    // ...outros controls
    SITUACAOCONTRATOID: new FormControl<string[] | null>(null, [Validators.required]),
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
    PESSOAPARTEID: new FormControl<string | null>(null, [Validators.required]),
    PESSOACONTRAPARTEID: new FormControl<string | null>(null, [Validators.required])
  });
  public formCombobox5: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null)
  });
  public formCombobox6: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null)
  });
  public formCombobox7: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null)
  });
  public formCombobox8: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null)
  });
  public formCombobox9: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null)
  });
  public formCombobox10: FormGroup = new FormGroup({
    // ...outros controls
    CRPEMPRESAID: new FormControl<string | null>(null, [Validators.required]),
    CRPESTABELECIMENTOID: new FormControl<string | null>(null)
  });
  // #endregion FORM BUILDER

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _comboboxDemo: ComboboxDemonstracaoService,
    public utilsService: UtilsService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getSituacoesCombobox();
    this.getPessoasCombobox();
    this.getEmpresasCombobox();


    this.subscribeToValueChanges4();

    // this._subscriptions = this.formSelect2.controls["SITUACAOCONTRATOID"].valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  private getSituacoesCombobox(): void {
    this._subscriptions.add(
      this._comboboxDemo.getSituacoesCombobox().subscribe({
        next: response => { this.situacoesList = response.Records }
      })
    );
  }

  private getPessoasCombobox(): void {
    this._subscriptions.add(
      this._comboboxDemo.getPessoasCombobox().subscribe({
        next: response => { this.pessoasList = response.Records }
      })
    );
  }

  private getEmpresasCombobox(): void {
    this._subscriptions.add(
      this._comboboxDemo.getEmpresasCombobox().subscribe({
        next: response => { this.empresasList = response.Records }
      })
    );
  }
  // #endregion PREPARATION

  // #region GET
  public getEstabelecimentosCombobox(): void {
    this._subscriptions.add(
      this._comboboxDemo.getEstabelecimentosCombobox(this.formCombobox5.controls['CRPEMPRESAID'].value).subscribe({
        next: response => {
          this.formCombobox5.controls['CRPESTABELECIMENTOID'].setValue(null);
          this.estabelecimentosList = response.Records;
        }
      })
    );
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  public validate(): void {
    this.formCombobox9.controls["CRPPESSOAID"].setValue(null);
    this.formCombobox9.controls["CRPPESSOAID"].disable();
  }

  public onChangesInnerValue(value: string | number | null): void {
    console.log(value);

    if (value == null) {
      //this.disabledInputs.set('formCombobox4', true);
    }
  }

  private subscribeToValueChanges4(): void {
    this._subscriptions.add(
      this.formCombobox4.controls["PESSOACONTRAPARTEID"].valueChanges.subscribe(value => {
        this.toastr.success(value, "Novo valor selecionado (valueChanges):");
      })
    );
  }
  // #endregion ==========> UTILS <==========

}
