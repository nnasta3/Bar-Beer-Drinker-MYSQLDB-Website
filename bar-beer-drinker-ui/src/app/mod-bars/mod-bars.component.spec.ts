import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBarsComponent } from './mod-bars.component';

describe('ModBarsComponent', () => {
  let component: ModBarsComponent;
  let fixture: ComponentFixture<ModBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
