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
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.scss'
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
