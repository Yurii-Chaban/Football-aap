import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSubjectsComponent } from './top-subjects.component';

describe('TopSubjectsComponent', () => {
  let component: TopSubjectsComponent;
  let fixture: ComponentFixture<TopSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
