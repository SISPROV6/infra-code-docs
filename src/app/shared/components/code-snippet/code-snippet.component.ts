import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { InfraModule } from 'ngx-sp-infra';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'code-snippet',
  standalone: true,
  imports: [
    CommonModule,
    InfraModule,
    TooltipModule,
    Highlight
  ],
  template: `
    <pre class="p-3"><div class="me-3 text-end"><lib-icon *ngIf="!isCopied; else copied" class="position-absolute" [copy-clipboard]="codeSnippet" iconColor="white" iconName="copiar" tooltip="Copiar" (click)="isCopied = true" /></div><code class="p-0" [highlight]="codeSnippet" [language]="codeLanguage"></code></pre>
    <ng-template #copied><lib-icon [copy-clipboard]="codeSnippet" class="position-absolute" iconColor="green" iconName="check" tooltip="Copiado!" /></ng-template>
  `,
  styles: `
    @import "../../../shared/styles/global.scss";
    pre { background-color: #0d1117 !important; }
  `
})
export class CodeSnippetComponent {
  private _isCopied: boolean = false;

  @Input({ alias: 'code', required: true }) public codeSnippet: string = "";
  @Input({ alias: 'language', required: true }) public codeLanguage: string = "";

  public get isCopied(): boolean { return this._isCopied; }
  public set isCopied(value: boolean) {
    this._isCopied = value;
    if (value) { setTimeout(() => { this._isCopied = false }, 3000) }
  }
}
