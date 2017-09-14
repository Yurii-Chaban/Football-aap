import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyComponent } from './turkey.component';

describe('TurkeyComponent', () => {
  let component: TurkeyComponent;
  let fixture: ComponentFixture<TurkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
