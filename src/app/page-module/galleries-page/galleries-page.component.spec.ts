import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesPageComponent } from './galleries-page.component';

describe('GalleriesPageComponent', () => {
  let component: GalleriesPageComponent;
  let fixture: ComponentFixture<GalleriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
