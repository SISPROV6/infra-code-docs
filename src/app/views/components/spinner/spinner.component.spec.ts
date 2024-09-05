import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../../app.routes';

import { HomeComponent } from '../../home/home.component';
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        SpinnerComponent,
        HomeComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/componentes/spinner'", async () => {
    await router.navigate(['componentes/spinner']);
    fixture.detectChanges();
    expect(location.path()).toBe('/componentes/spinner');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/componentes/spinner');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
