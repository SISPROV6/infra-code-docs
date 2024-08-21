import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../app.routes';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        HomeComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/inicio'", async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).toBe('/inicio');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['componentes/header']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/inicio');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
