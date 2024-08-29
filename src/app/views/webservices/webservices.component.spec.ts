import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../app.routes';

import { HomeComponent } from '../home/home.component';
import { WebservicesComponent } from './webservices.component';

describe('WebservicesComponent', () => {
  let component: WebservicesComponent;
  let fixture: ComponentFixture<WebservicesComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        WebservicesComponent,
        HomeComponent
      ],  // Configura o RouterModule com as rotas de teste e todos os componentes necessários
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(WebservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/webservices'", async () => {
    await router.navigate(['webservices']);
    fixture.detectChanges();
    expect(location.path()).toBe('/webservices');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/webservices');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
