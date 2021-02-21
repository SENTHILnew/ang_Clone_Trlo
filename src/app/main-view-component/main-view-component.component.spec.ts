import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponentComponent } from './main-view-component.component';

describe('MainViewComponentComponent', () => {
  let component: MainViewComponentComponent;
  let fixture: ComponentFixture<MainViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
