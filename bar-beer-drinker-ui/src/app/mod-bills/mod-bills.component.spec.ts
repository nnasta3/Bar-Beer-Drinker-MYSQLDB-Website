import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBillsComponent } from './mod-bills.component';

describe('ModBillsComponent', () => {
  let component: ModBillsComponent;
  let fixture: ComponentFixture<ModBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
