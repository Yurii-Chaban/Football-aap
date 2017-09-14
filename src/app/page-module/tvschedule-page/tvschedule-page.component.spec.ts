import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvschedulePageComponent } from './tvschedule-page.component';

describe('TvschedulePageComponent', () => {
  let component: TvschedulePageComponent;
  let fixture: ComponentFixture<TvschedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvschedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvschedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
