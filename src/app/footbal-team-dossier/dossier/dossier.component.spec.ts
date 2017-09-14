import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierComponent } from './dossier.component';

describe('DossierComponent', () => {
  let component: DossierComponent;
  let fixture: ComponentFixture<DossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
