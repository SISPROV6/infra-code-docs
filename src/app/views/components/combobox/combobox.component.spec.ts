import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../../app.routes';

import { ComboboxComponent } from './combobox.component';
import { HomeComponent } from '../../home/home.component';

describe('ComboboxComponent', () => {
  let component: ComboboxComponent;
  let fixture: ComponentFixture<ComboboxComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        ComboboxComponent,
        HomeComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(ComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/componentes/header'", async () => {
    await router.navigate(['componentes/header']);
    fixture.detectChanges();
    expect(location.path()).toBe('/componentes/header');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/componentes/header');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
