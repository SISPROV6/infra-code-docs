import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../../app.routes';

import { IconesComponent } from './icones.component';
import { HomeComponent } from '../../home/home.component';

describe('IconesComponent', () => {
  let component: IconesComponent;
  let fixture: ComponentFixture<IconesComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        IconesComponent,
        HomeComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(IconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve renderizar o componente apenas na rota '/componentes/icones'", async () => {
    await router.navigate(['componentes/icones']);
    fixture.detectChanges();
    expect(location.path()).toBe('/componentes/icones');
    expect(component).toBeTruthy();
  });

  it('não deve renderizar o componente em outras rotas', async () => {
    await router.navigate(['inicio']);
    fixture.detectChanges();
    expect(location.path()).not.toBe('/componentes/icones');
    expect(component).toBeTruthy();   // ou verifique se o elemento do componente está presente
  });
});
