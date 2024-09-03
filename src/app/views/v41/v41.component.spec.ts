import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../app.routes';

import { HomeComponent } from '../home/home.component';
import { V41Component } from './v41.component';


describe('V41Component', () => {
  let component: V41Component;
  let fixture: ComponentFixture<V41Component>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        V41Component,
        HomeComponent
      ],  // Configura o RouterModule com as rotas de teste e todos os componentes necessários
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(V41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/v41'", async () => {
    await router.navigate(['componentes']);
    fixture.detectChanges();
    expect(location.path()).toBe('/v41');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/v41');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
