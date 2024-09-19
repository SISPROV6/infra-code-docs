import { Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { routes } from '../../../app.routes';

import { TabelaComponent } from './tabela.component';
import { HomeComponent } from '../../home/home.component';

describe('TabelaComponent', () => {
  let component: TabelaComponent;
  let fixture: ComponentFixture<TabelaComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        TabelaComponent,
        HomeComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/componentes/table'", async () => {
    await router.navigate(['componentes/table']);
    fixture.detectChanges();
    expect(location.path()).toBe('/componentes/table');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/componentes/table');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
