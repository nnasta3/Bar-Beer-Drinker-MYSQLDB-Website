import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSellsComponent } from './mod-sells.component';

describe('ModSellsComponent', () => {
  let component: ModSellsComponent;
  let fixture: ComponentFixture<ModSellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModSellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
