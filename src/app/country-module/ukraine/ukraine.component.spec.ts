import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkraineComponent } from './ukraine.component';

describe('UkraineComponent', () => {
  let component: UkraineComponent;
  let fixture: ComponentFixture<UkraineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkraineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkraineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
