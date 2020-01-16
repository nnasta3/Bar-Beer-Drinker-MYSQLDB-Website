import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersDetailsComponent } from './drinkers-details.component';

describe('DrinkersDetailsComponent', () => {
  let component: DrinkersDetailsComponent;
  let fixture: ComponentFixture<DrinkersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
