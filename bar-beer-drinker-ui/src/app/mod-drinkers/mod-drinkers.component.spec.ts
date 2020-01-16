import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDrinkersComponent } from './mod-drinkers.component';

describe('ModDrinkersComponent', () => {
  let component: ModDrinkersComponent;
  let fixture: ComponentFixture<ModDrinkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModDrinkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModDrinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
