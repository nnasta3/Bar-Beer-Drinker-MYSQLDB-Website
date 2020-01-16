import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerInfoComponent } from './drinker-info.component';

describe('DrinkerInfoComponent', () => {
  let component: DrinkerInfoComponent;
  let fixture: ComponentFixture<DrinkerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
