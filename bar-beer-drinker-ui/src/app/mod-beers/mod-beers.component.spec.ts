import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBeersComponent } from './mod-beers.component';

describe('ModBeersComponent', () => {
  let component: ModBeersComponent;
  let fixture: ComponentFixture<ModBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
