import { Routes } from '@angular/router';

import { OrderingComponent } from 'ngx-sp-infra';

import { HomeComponent } from './views/home/home.component';
import { ComponentsComponent } from './views/components/components.component';
import { HeaderComponent } from './views/components/header/header.component';
import { CardsComponent } from './views/components/cards/cards.component';
import { ContainersComponent } from './views/components/containers/containers.component';
import { IconesComponent } from './views/components/icones/icones.component';
import { InputArquivoComponent } from './views/components/input-arquivo/input-arquivo.component';
import { MaskComponent } from './views/components/mask/mask.component';
import { PaginationComponent } from './views/components/pagination/pagination.component';
import { TabelaComponent } from './views/components/tabela/tabela.component';
import { ValidatorsComponent } from './views/components/validators/validators.component';
import { ModelsComponent } from './views/models/models.component';
import { StructureComponent } from './views/structure/structure.component';
import { TemplatesComponent } from './views/templates/templates.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ComboboxComponent } from './views/components/combobox/combobox.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  // Adicione mais rotas abaixo desta linha

  { path: 'inicio', component: HomeComponent, title: "Início" },
  { path: 'componentes', component: ComponentsComponent, title: "Componentes", children: [
    // { path: 'header', component: HeaderComponent },
    // { path: 'cards', component: CardsComponent },
    // { path: 'pagination', component: PaginationComponent },
    // { path: 'ordenation', component: OrderingComponent },
    // { path: 'icones', component: IconesComponent },
    // { path: 'validators', component: ValidatorsComponent },
    // { path: 'container-e-abas', component: ContainersComponent },
    // { path: 'table', component: TabelaComponent },
    // { path: 'mask', component: MaskComponent },
    // { path: 'input-arquivo', component: InputArquivoComponent },
    // { path: 'combobox', component: ComboboxComponent }
  ] },
  { path: 'componentes/header', component: HeaderComponent, title: "Header | Componentes" },
  { path: 'componentes/cards', component: CardsComponent, title: "Cards | Componentes" },
  { path: 'componentes/pagination', component: PaginationComponent, title: "Paginação | Componentes" },
  { path: 'componentes/ordering', component: OrderingComponent, title: "Ordenação | Componentes" },
  { path: 'componentes/icones', component: IconesComponent, title: "Ícones | Componentes" },
  { path: 'componentes/validators', component: ValidatorsComponent, title: "Validators | Componentes" },
  { path: 'componentes/container-e-abas', component: ContainersComponent, title: "Containers e Abas | Componentes" },
  { path: 'componentes/table', component: TabelaComponent, title: "Tabelas | Componentes" },
  { path: 'componentes/mask', component: MaskComponent, title: "Máscaras | Componentes" },
  { path: 'componentes/input-arquivo', component: InputArquivoComponent, title: "Input de arquivos | Componentes" },
  { path: 'componentes/combobox', component: ComboboxComponent, title: "Combobox | Componentes" },

  { path: 'templates', component: TemplatesComponent, title: "Templates" },
  { path: 'estrutura', component: StructureComponent, title: "Estrutura" },
  { path: 'models', component: ModelsComponent, title: "Models e Records" },

  { path: '**', component: NotFoundComponent, title: "Página não encontrada" }
];
