import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [
    CodeSnippetComponent
  ],
  templateUrl: './installation.component.html',
  styleUrl: './installation.component.scss'
})
export class InstallationComponent {
  // #region ==========> PROPERTIES <==========

  // #region PUBLIC
  public codeSnippet: string = `// Em uma estrutura de uma tela de Usuários, por exemplo\n// No arquivo usuarios.module.ts:\n@NgModule( {\n   declarations: [\n      // ...outros componentes\n      PainelUsuariosComponent,\n      FormularioUsuarioComponent\n   ],\n   imports: [\n      // ...outros imports\n      ProjectModule,\n      UsuariosRoutingModule\n   ],\n   exports: [\n         // ...\n   ]\n})\nexport class UsuariosModule { }`;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }
  // #endregion ==========> INITIALIZATION <==========

}
