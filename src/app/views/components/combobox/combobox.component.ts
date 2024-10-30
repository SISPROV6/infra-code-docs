import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils, InfraModule, ModalUtilsService, RecordCombobox } from 'ngx-sp-infra';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';
import { UtilsService } from '../../../shared/services/utils.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskPipe } from 'ngx-mask';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ComboboxDemonstracaoService } from './combobox-demonstracao.service';
import { ExampleModalComponent } from '../../../shared/components/example-modal/example-modal.component';

@Component({
  selector: 'app-combobox',
  standalone: true,
  imports: [
    ExampleModalComponent,
    NavbarComponent,
    CodeSnippetComponent,

    CommonModule,
    FormsModule,
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
    `<form [formGroup]="formSelect1">\n  <div class="row">\n      <div class="col-6">\n        <label for="tipoPessoa1" class="form-label">Tipo de pessoa</label>\n        <select id="tipoPessoa1" class="form-select" formControlName="TIPOPESSOAID">\n            <option [value]="null" disabled selected>Selecione um tipo de pessoa</option>\n            <option value="FIS">Física</option>\n            <option value="JUR">Jurídica</option>\n        </select>\n      </div>\n\n      <div class="col-6">\n        <p class="fw-bold">Opção selecionada:</p>\n        <span>{{ formSelect1.controls["TIPOPESSOAID"].value ?? "null" }}</span>\n      </div>\n  </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formSelect1: FormGroup = new FormGroup({\n  // ...outros controls\n  TIPOPESSOAID: new FormControl<string | null>(null),\n});`,
    `<form [formGroup]="formSelect2">\n  <div class="row">\n      <div class="col-6">\n        <label libRequired for="situacaoContrato1" class="form-label">Situação</label>\n        <select id="situacaoContrato1" class="form-select" formControlName="SITUACAOCONTRATOID">\n            <option [value]="null" disabled selected> Selecione uma situação </option>\n            <option *ngFor="let situacao of situacoesList" [value]="situacao.ID"> {{ situacao.LABEL }} </option>\n        </select>\n      </div>\n\n      <div class="col-6">\n        <p class="fw-bold">Opção selecionada:</p>\n        <span>{{ formSelect2.controls["SITUACAOCONTRATOID"].value ?? "null" }}</span>\n      </div>\n  </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formSelect2: FormGroup = new FormGroup({\n  // ...outros controls\n  SITUACAOCONTRATOID: new FormControl<string | null>(null, [Validators.required]),\n});`,
    `<form [formGroup]="formSelect3">\n  <div class="row">\n      <div class="col-6">\n        <label libRequired for="situacaoContrato1" class="form-label">Situação</label>\n        <select id="situacaoContrato1" class="form-select" formControlName="SITUACAOCONTRATOID" multiple>\n            <option [value]="null" disabled selected> Selecione uma situação </option>\n            <option *ngFor="let situacao of situacoesList" [value]="situacao.ID"> {{ situacao.LABEL }} </option>\n        </select>\n      </div>\n\n      <div class="col-6">\n        <p class="fw-bold">Opção selecionada:</p>\n        <span>{{ formSelect3.controls["SITUACAOCONTRATOID"].value ?? "null" }}</span>\n      </div>\n  </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formSelect3: FormGroup = new FormGroup({\n  // ...outros controls\n  SITUACAOCONTRATOID: new FormControl<string[] | null>(null, [Validators.required]),\n});`,
    `<form [formGroup]="formCombobox1">\n  <div class="row">\n      <div class="col-6">\n        <lib-combobox labelText="Pessoa" [list]="pessoasList" [control]="formCombobox1.controls['CRPPESSOAID']" />\n      </div>\n  </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n\npublic formCombobox1: FormGroup = new FormGroup({\n  // ...outros controls\n  CRPPESSOAID: new FormControl<string | null>(null),\n});`,
    `<div class="row">\n   <div class="col-6">\n      <lib-combobox labelText="Pessoa" [list]="pessoasList" [control]="pessoaControl2" />\n   </div>\n</div>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic pessoaControl2: FormControl<string | null> = new FormControl<string | null>(null);`,
    `<form [formGroup]="formCombobox2">\n  <div class="row">\n    <div class="col-6">\n      <lib-combobox labelText="Pessoa"\n        [list]="pessoasList"\n        [control]="formCombobox2.controls['CRPPESSOAID']" />\n    </div>\n  </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formCombobox2: FormGroup = new FormGroup({\n  // ...outros controls\n  CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])\n});`,
    `<form [formGroup]="formCombobox3">\n  <div class="row">\n      <div class="col-6">\n        <lib-combobox labelText="Pessoa"\n            [list]="pessoasList"\n            [control]="formCombobox3.controls['CRPPESSOAID']" />\n      </div>\n  </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formCombobox3: FormGroup = new FormGroup({\n  // ...outros controls\n  CRPPESSOAID: new FormControl<string | null>('b8c75886-a599-4eb2-8b62-baee48c8afc8', [Validators.required])\n});`,
    `<form [formGroup]="formCombobox4">\n  <div class="row">\n      <div class="col-6">\n        <lib-combobox labelText="Parte (onChange)"\n            [list]="pessoasList"\n            [control]="formCombobox4.controls['PESSOAPARTEID']"\n            (onChange)="toastr.success($event ? $event.toString() : 'null', 'Novo valor selecionado (onChange):')" />\n      </div>\n      <div class="col-6">\n        <lib-combobox labelText="Contraparte (valueChanges)"\n            [list]="pessoasList"\n            [control]="formCombobox4.controls['PESSOACONTRAPARTEID']" />\n      </div>\n  </div>\n</form>`,
    `private _subscriptions: Subscription = new Subscription();\n\npublic get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formCombobox4: FormGroup = new FormGroup({\n  // ...outros controls\n  PESSOAPARTEID: new FormControl<string | null>(null, [Validators.required]),\n  PESSOACONTRAPARTEID: new FormControl<string | null>(null, [Validators.required])\n});\n\nngOnInit(): void {\n  this.subscribeToValueChanges4();\n}\n\nprivate subscribeToValueChanges4(): void {\n  this._subscriptions.add(\n    this.formCombobox4.controls["PESSOACONTRAPARTEID"].valueChanges.subscribe(value => {\n      this.toastr.success(value, "Novo valor selecionado (valueChanges):");\n    })\n  );\n}`,
    `<form [formGroup]="formCombobox5">\n  <div class="row mb-3">\n      <div class="col-6">\n        <lib-combobox labelText="Parte ([disabled])"\n            [list]="pessoasList"\n            [control]="formCombobox5.controls['PESSOAPARTEID']"\n            [disabled]="disabledInputs.get('formCombobox5')"\n            />\n      </div>\n      <div class="col-6">\n        <lib-combobox labelText="Contraparte (formControl.disable())"\n            [list]="pessoasList"\n            [control]="formCombobox5.controls['PESSOACONTRAPARTEID']" />\n      </div>\n  </div>\n\n  <div class="row">\n      <div class="col-6 offset-3 d-flex justify-content-evenly">\n        <button class="btn btn-outline-primary" (click)="disableForm5()">disable()</button>\n        <button class="btn btn-outline-primary" (click)="enableForm5()">enable()</button>\n      </div>\n  </div>\n</form>`,
    `public disabledInputs: Map<string, boolean> = new Map<string, boolean>();\n\n\npublic get FormUtils(): typeof FormUtils { return FormUtils; }\n\npublic formCombobox5: FormGroup = new FormGroup({\n  // ...outros controls\n  PESSOAPARTEID: new FormControl<string | null>(null),\n  PESSOACONTRAPARTEID: new FormControl<string | null>(null)\n});\n\n\npublic disableForm5(): void {\n  this.disabledInputs.set("formCombobox5", true);\n  this.formCombobox5.controls["PESSOACONTRAPARTEID"].disable();\n  \n}\npublic enableForm5(): void {\n  this.disabledInputs.set("formCombobox5", false);\n  this.formCombobox5.controls["PESSOACONTRAPARTEID"].enable();\n}`,
    `<form>\n  <div class="row mb-3 pb-4 border-bottom">\n    <div class="col">\n      <label for="labelText6" class="form-label">Label</label>\n      <input type="text" id="labelText6" class="form-control" [(ngModel)]="labelText6" [ngModelOptions]="{standalone: true}" >\n    </div>\n    <div class="col">\n      <label for="mainPlaceholder6" class="form-label">MainInputPlaceholder</label>\n      <input type="text" id="mainPlaceholder6" class="form-control" [(ngModel)]="mainPlaceholder6" [ngModelOptions]="{standalone: true}" >\n    </div>\n    <div class="col">\n      <label for="searchPlaceholder6" class="form-label">SearchInputPlaceholder</label>\n      <input type="text" id="searchPlaceholder6" class="form-control" [(ngModel)]="searchPlaceholder6" [ngModelOptions]="{standalone: true}" >\n    </div>\n    <div class="col">\n      <label for="colorTheme6" class="form-label">ColorTheme</label>\n      <select id="colorTheme6" class="form-select" [(ngModel)]="colorTheme6" [ngModelOptions]="{standalone: true}" >\n        <option value="primary">Primary (azul)</option>\n        <option value="secondary">Secondary (cinza)</option>\n        <option value="success">Success (verde)</option>\n        <option value="danger">Danger (vermelho)</option>\n        <option value="warning">Warning (amarelo)</option>\n      </select>\n    </div>\n    <div class="col">\n      <label for="isRequired6" class="form-label">\n        <lib-icon iconName="info" iconSize="medium-small" iconColor="blue" tooltip="Em situações como esta que a obrigatoriedade do campo é condicional e dinâmica, a propriedade [libRequired] tem prioridade sobre o Validators.required do FormControl" />\n        Obrigatório?\n      </label>\n      <div class="form-check form-switch">\n        <input class="form-check-input" type="checkbox" role="switch" id="isRequired6"\n          [checked]="isRequired6" [(ngModel)]="isRequired6" [ngModelOptions]="{standalone: true}">\n      </div>\n    </div>\n  </div>\n\n  <div class="row mb-3">\n    <div class="col-6 offset-3">\n      <lib-combobox [labelText]="labelText6"\n        [mainPlaceholder]="mainPlaceholder6"\n        [searchPlaceholder]="searchPlaceholder6"\n        [theme]="colorTheme6"\n        [list]="pessoasList"\n        [libRequired]="isRequired6"\n        [control]="formCombobox6.controls['CRPPESSOAID']" />\n    </div>\n  </div>\n</form>`,
    `public labelText6?: string = "Parte";\npublic mainPlaceholder6?: string = "Selecione uma opção...";\npublic searchPlaceholder6?: string = "Pesquisa...";\npublic colorTheme6: string = "primary";\npublic isRequired6: boolean = false;\n\npublic get FormUtils(): typeof FormUtils { return FormUtils; }\npublic formCombobox6: FormGroup = new FormGroup({\n  // ...outros controls\n  CRPPESSOAID: new FormControl<string | null>(null)\n});`,
    `<form>\n  <div class="row mb-3">\n      <div class="col-6 offset-3">\n        <lib-combobox labelText="Pessoa" [list]="pessoasList" [control]="formCombobox7.controls['CRPPESSOAID']" >\n            <button btnLeft class="btn btn-sm btn-primary" tooltip="Abrir modal com listagem completa" (click)="modalUtils.openInitialStateModal(exampleModalRef)"> <lib-icon iconName="usuario-quadro" /> </button>\n            <button btnRight class="btn btn-sm btn-outline-primary" tooltip="Limpar valor selecionado" (click)="formCombobox7.controls['CRPPESSOAID'].setValue(null)"> <lib-icon iconName="lixeira" /> </button>\n        </lib-combobox>\n      </div>\n  </div>\n</form>\n\n<!-- #region TEMPLATE -->\n<ng-template #exampleModalRef> <example-modal /> </ng-template>\n<!-- #endregion TEMPLATE -->`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formCombobox7: FormGroup = new FormGroup({\n  // ...outros controls\n  CRPPESSOAID: new FormControl<string | null>(null)\n});`,
    `<p class="mb-0">Definir valor do combo para:</p>\n<div class="btn-group mb-3" role="group" aria-label="Grupo de botões para definição de valor do combobox abaixo">\n    <input type="radio" name="nomePessoa" class="btn-check" id="mariaOliveira" (change)="formCombobox9.controls['CRPPESSOAID'].setValue('77bcd182-785e-41bd-a127-b572cd12b3b9')">\n    <label class="btn btn-sm btn-outline-primary" for="mariaOliveira">Maria Oliveira</label>\n\n    <input type="radio" name="nomePessoa" class="btn-check" id="eduardoFernandes" (change)="formCombobox9.controls['CRPPESSOAID'].setValue('5f1fb37f-f543-4996-ae38-6332157000a8')">\n    <label class="btn btn-sm btn-outline-primary" for="eduardoFernandes">Eduardo Fernandes</label>\n\n    <input type="radio" name="nomePessoa" class="btn-check" id="julianaLima" (change)="formCombobox9.controls['CRPPESSOAID'].setValue('8f89e631-4195-47f9-9026-c9dfb0922f5f')">\n    <label class="btn btn-sm btn-outline-primary" for="julianaLima">Juliana Lima</label>\n    \n    <input type="radio" name="nomePessoa" class="btn-check" id="beatrizFaria" (change)="formCombobox9.controls['CRPPESSOAID'].setValue('6f03c252-a520-4bad-a090-6bac61eb4bc8')">\n    <label class="btn btn-sm btn-outline-primary" for="beatrizFaria">Beatriz Faria</label>\n\n    <input type="radio" name="nomePessoa" class="btn-check" id="patriciaMendes" (change)="formCombobox9.controls['CRPPESSOAID'].setValue('41434a7d-2172-44ba-b25d-3e626f6beb35')">\n    <label class="btn btn-sm btn-outline-primary" for="patriciaMendes">Patrícia Mendes</label>\n\n    <input type="radio" name="nomePessoa" class="btn-check" id="joaoSilva" (change)="formCombobox9.controls['CRPPESSOAID'].setValue('30be2135-dbfd-4b16-8920-56075d802ed5')">\n    <label class="btn btn-sm btn-outline-primary" for="joaoSilva">João Silva</label>\n\n    <input type="radio" name="nomePessoa" class="btn-check" id="erickCarvalho" (change)="formCombobox9.controls['CRPPESSOAID'].setValue('d4135a37-4f6f-4724-afe7-01482680bf5b')">\n    <label class="btn btn-sm btn-outline-primary" for="erickCarvalho">Erick Carvalho</label>\n\n    <input type="radio" name="nomePessoa" class="btn-check" id="limparRadio" (change)="formCombobox9.controls['CRPPESSOAID'].setValue(null)">\n    <label class="btn btn-sm btn-outline-primary" for="limparRadio">LIMPAR</label>\n</div>\n\n<form [formGroup]="formCombobox10">\n    <div class="row align-items-end">\n      <div class="col-4">\n          <lib-combobox labelText="Pessoa"\n            [list]="pessoasList"\n            [control]="formCombobox9.controls['CRPPESSOAID']" />\n      </div>\n      <div class="col">\n          <button class="btn btn-outline-primary" (click)="formCombobox9.controls['CRPPESSOAID'].disable()"> disable() </button>\n      </div>\n      <div class="col">\n          <button class="btn btn-outline-primary" (click)="formCombobox9.controls['CRPPESSOAID'].enable()"> enable() </button>\n      </div>\n      <div class="col">\n          <button class="btn btn-outline-primary" (click)="formCombobox9.controls['CRPPESSOAID'].markAsDirty()"> markAsDirty() </button>\n      </div>\n      <div class="col">\n          <button class="btn btn-outline-primary" (click)="formCombobox9.controls['CRPPESSOAID'].markAsTouched()"> markAsTouched() </button>\n      </div>\n      <div class="col me-0">\n          <button class="btn btn-outline-primary" (click)="validate()"> validate() </button>\n      </div>\n    </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formCombobox9: FormGroup = new FormGroup({\n  // ...outros controls\n  CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])\n});\n\n\npublic validate(): void { FormUtils.validateFields(this.formCombobox9) }`,
    `<form [formGroup]="formCombobox10">\n    <div class="row">\n      <div class="col-6">\n          <lib-combobox labelText="Empresa"\n            [list]="empresasList"\n            [control]="formCombobox10.controls['CRPEMPRESAID']" />\n      </div>\n\n      <div class="col-6">\n          <lib-combobox labelText="Estabelecimento"\n            [list]="estabelecimentosList"\n            [control]="formCombobox10.controls['CRPESTABELECIMENTOID']" />\n      </div>\n    </div>\n</form>`,
    `public get FormUtils(): typeof FormUtils { return FormUtils; }\n  \npublic formCombobox10: FormGroup = new FormGroup({\n  // ...outros controls\n  CRPEMPRESAID: new FormControl<string | null>(null, [Validators.required]),\n  CRPESTABELECIMENTOID: new FormControl<string | null>(null)\n});\n\n\nngOnInit(): void {\n  this.subscribeToValueChanges10();\n}\n\n\npublic getEstabelecimentosCombobox(): void {\n  this._subscriptions.add(\n    this._comboboxDemo.getEstabelecimentosCombobox(this.formCombobox10.controls['CRPEMPRESAID'].value).subscribe({\n      next: response => {\n        this.formCombobox10.controls['CRPESTABELECIMENTOID'].setValue(null);\n        this.estabelecimentosList = response.Records;\n      }\n    })\n  );\n}\n\nprivate subscribeToValueChanges10(): void {\n  this._subscriptions.add(\n    this.formCombobox10.controls["CRPEMPRESAID"].valueChanges.subscribe(() => {\n      this.getEstabelecimentosCombobox();\n    })\n  );\n}`,
  ];

  public get isCopied(): boolean { return this._isCopied; }
  public set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 5000) }
  }


  public labelText6?: string = "Parte";
  public mainPlaceholder6?: string = "Selecione uma opção...";
  public searchPlaceholder6?: string = "Pesquisa...";
  public colorTheme6: string = "primary";
  public isRequired6: boolean = false;


  public disabledInputs: Map<string, boolean> = new Map<string, boolean>();
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========
  
  // #region FORM BUILDER
  
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
    SITUACAOCONTRATOID: new FormControl<string[] | null>(null, [Validators.required]),
  });
  public get FormUtils(): typeof FormUtils { return FormUtils; }
  
  public formCombobox10: FormGroup = new FormGroup({
    // ...outros controls
    CRPEMPRESAID: new FormControl<string | null>(null, [Validators.required]),
    CRPESTABELECIMENTOID: new FormControl<string | null>(null)
  });
  public formCombobox9: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])
  });
  public formCombobox7: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null)
  });
  public formCombobox5: FormGroup = new FormGroup({
    // ...outros controls
    PESSOAPARTEID: new FormControl<string | null>(null),
    PESSOACONTRAPARTEID: new FormControl<string | null>(null)
  });
  public formCombobox6: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null)
  });
  public formCombobox4: FormGroup = new FormGroup({
    // ...outros controls
    PESSOAPARTEID: new FormControl<string | null>(null, [Validators.required]),
    PESSOACONTRAPARTEID: new FormControl<string | null>(null, [Validators.required])
  });
  public formCombobox3: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>('b8c75886-a599-4eb2-8b62-baee48c8afc8', [Validators.required])
  });
  public formCombobox2: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null, [Validators.required])
  });
  public formCombobox1: FormGroup = new FormGroup({
    // ...outros controls
    CRPPESSOAID: new FormControl<string | null>(null),
  });
  // public formCombobox8: FormGroup = new FormGroup({
  //   // ...outros controls
  //   CRPPESSOAID: new FormControl<string | null>(null)
  // });

  public pessoaControl2: FormControl<string | null> = new FormControl<string | null>(null);
  // #endregion FORM BUILDER

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _comboboxDemo: ComboboxDemonstracaoService,

    public modalUtils: ModalUtilsService,
    public utilsService: UtilsService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getSituacoesCombobox();
    this.getPessoasCombobox();
    this.getEmpresasCombobox();


    this.subscribeToValueChanges4();
    this.subscribeToValueChanges10();


    setTimeout(() => {
      this.isRequired6 = !this.isRequired6;
    }, 3000);

    setTimeout(() => {
      this.isRequired6 = !this.isRequired6;
    }, 6000);
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
      this._comboboxDemo.getEstabelecimentosCombobox(this.formCombobox10.controls['CRPEMPRESAID'].value).subscribe({
        next: response => {
          this.formCombobox10.controls['CRPESTABELECIMENTOID'].setValue(null);
          this.estabelecimentosList = response.Records;
        }
      })
    );
  }
  // #endregion GET

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  public validate(): void { FormUtils.validateFields(this.formCombobox9) }


  private subscribeToValueChanges4(): void {
    this._subscriptions.add(
      this.formCombobox4.controls["PESSOACONTRAPARTEID"].valueChanges.subscribe(value => {
        this.toastr.success(value, "Novo valor selecionado (valueChanges):");
      })
    );
  }
  private subscribeToValueChanges10(): void {
    this._subscriptions.add(
      this.formCombobox10.controls["CRPEMPRESAID"].valueChanges.subscribe(() => {
        this.getEstabelecimentosCombobox();
      })
    );
  }

  public disableForm5(): void {
    this.disabledInputs.set("formCombobox5", true);
    this.formCombobox5.controls["PESSOACONTRAPARTEID"].disable();
    
  }
  public enableForm5(): void {
    this.disabledInputs.set("formCombobox5", false);
    this.formCombobox5.controls["PESSOACONTRAPARTEID"].enable();
  }
  // #endregion ==========> UTILS <==========

}
