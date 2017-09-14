import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthamericaComponent } from './northamerica.component';

describe('NorthamericaComponent', () => {
  let component: NorthamericaComponent;
  let fixture: ComponentFixture<NorthamericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthamericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
