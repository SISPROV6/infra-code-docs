import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/components/header/header.component';
import { CardsComponent } from './views/components/cards/cards.component';
import { ContainersComponent } from './views/components/containers/containers.component';
import { IconesComponent } from './views/components/icones/icones.component';
import { InputArquivoComponent } from './views/components/input-arquivo/input-arquivo.component';
import { MaskComponent } from './views/components/mask/mask.component';
import { TabelaComponent } from './views/components/tabela/tabela.component';
import { ValidatorsComponent } from './views/components/validators/validators.component';
import { ModelsComponent } from './views/models/models.component';
import { StructureComponent } from './views/structure/structure.component';
import { TemplatesComponent } from './views/templates/templates.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ComboboxComponent } from './views/components/combobox/combobox.component';
import { WebservicesComponent } from './views/webservices/webservices.component';
import { ModalsComponent } from './views/components/modals/modals.component';
import { SpinnerComponent } from './views/components/spinner/spinner.component';
import { DatabaseComponent } from './views/database/database.component';
import { V41Component } from './views/v41/v41.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { InstallationComponent } from './views/installation/installation.component';
import { UsageComponent } from './views/usage/usage.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  // Adicione mais rotas abaixo desta linha

  { path: 'inicio', component: HomeComponent, title: "Infra Code Docs" },
  
  { path: 'icones', component: IconesComponent, title: "Ícones | Elementos visuais" },
  
  { path: 'introducao', component: IntroductionComponent, title: "Introdução" },
  { path: 'instalacao', component: InstallationComponent, title: "Instalação" },
  { path: 'uso', component: UsageComponent, title: "Uso" },

  //{ path: 'componentes', component: ComponentsComponent, title: "Elementos visuais" },
  { path: 'componentes/header', component: HeaderComponent, title: "Header | Elementos visuais" },
  { path: 'componentes/cards', component: CardsComponent, title: "Cards | Elementos visuais" },
  { path: 'componentes/modais', component: ModalsComponent, title: "Cards | Modais" },
  { path: 'componentes/spinner', component: SpinnerComponent, title: "Spinner | Elementos visuais" },
  { path: 'componentes/validators', component: ValidatorsComponent, title: "Validators | Elementos visuais" },
  { path: 'componentes/containers', component: ContainersComponent, title: "Containers e Abas | Elementos visuais" },
  { path: 'componentes/tabela', component: TabelaComponent, title: "Tabelas | Elementos visuais" },
  { path: 'componentes/mascaras', component: MaskComponent, title: "Máscaras | Elementos visuais" },
  { path: 'componentes/input-arquivo', component: InputArquivoComponent, title: "Input de arquivos | Elementos visuais" },
  { path: 'componentes/combobox', component: ComboboxComponent, title: "Selects e Combobox | Elementos visuais" },

  { path: 'templates', component: TemplatesComponent, title: "Templates" },
  { path: 'estrutura', component: StructureComponent, title: "Estrutura" },
  { path: 'models', component: ModelsComponent, title: "Models e Records" },
  { path: 'database', component: DatabaseComponent, title: "Bases de Dados" },
  { path: 'v41', component: V41Component, title: "V41" },
  { path: 'webservices', component: WebservicesComponent, title: "Webservices (APIs)" },

  { path: '**', component: NotFoundComponent, title: "Página não encontrada" },
  { path: 'pagina-nao-encontrada', component: NotFoundComponent, title: "Página não encontrada" }
];
