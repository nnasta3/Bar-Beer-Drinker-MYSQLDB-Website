import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBordComponent } from './mod-bord.component';

describe('ModBordComponent', () => {
  let component: ModBordComponent;
  let fixture: ComponentFixture<ModBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
