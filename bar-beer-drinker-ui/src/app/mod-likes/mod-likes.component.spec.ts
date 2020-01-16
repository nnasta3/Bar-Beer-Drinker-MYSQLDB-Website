import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLikesComponent } from './mod-likes.component';

describe('ModLikesComponent', () => {
  let component: ModLikesComponent;
  let fixture: ComponentFixture<ModLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
