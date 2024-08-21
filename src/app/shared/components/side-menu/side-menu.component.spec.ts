import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Criado automaticamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Eu que criei
  it('should initialize menu', () => {
    expect(component.menuStructure.length).toBeGreaterThan(0);
  });
});
