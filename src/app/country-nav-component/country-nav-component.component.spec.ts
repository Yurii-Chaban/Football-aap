import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNavComponentComponent } from './country-nav-component.component';

describe('CountryNavComponentComponent', () => {
  let component: CountryNavComponentComponent;
  let fixture: ComponentFixture<CountryNavComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryNavComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
