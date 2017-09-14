import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieselseComponent } from './countrieselse.component';

describe('CountrieselseComponent', () => {
  let component: CountrieselseComponent;
  let fixture: ComponentFixture<CountrieselseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrieselseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrieselseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
