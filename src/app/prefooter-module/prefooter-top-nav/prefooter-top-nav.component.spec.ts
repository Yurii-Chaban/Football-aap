import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFooterTopNavComponent } from './prefooter-top-nav.component';

describe('PreFooterTopNavComponent', () => {
  let component: PreFooterTopNavComponent;
  let fixture: ComponentFixture<PreFooterTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreFooterTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreFooterTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
