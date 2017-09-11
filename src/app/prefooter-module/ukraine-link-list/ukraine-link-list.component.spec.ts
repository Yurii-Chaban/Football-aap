import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkraineLinkListComponent } from './ukraine-link-list.component';

describe('UkraineLinkListComponent', () => {
  let component: UkraineLinkListComponent;
  let fixture: ComponentFixture<UkraineLinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkraineLinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkraineLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
