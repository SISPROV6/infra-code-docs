import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../../app.routes';

import { HomeComponent } from '../../home/home.component';
import { CardsComponent } from './cards.component';


describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        CardsComponent,
        HomeComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/componentes/cards'", async () => {
    await router.navigate(['componentes/cards']);
    fixture.detectChanges();
    expect(location.path()).toBe('/componentes/cards');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/componentes/cards');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
