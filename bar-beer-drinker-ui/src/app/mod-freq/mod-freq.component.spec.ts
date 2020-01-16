import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFreqComponent } from './mod-freq.component';

describe('ModFreqComponent', () => {
  let component: ModFreqComponent;
  let fixture: ComponentFixture<ModFreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModFreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModFreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
