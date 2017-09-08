import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFootballTeamsComponent } from './top-football-teams.component';

describe('TopFootballTeamsComponent', () => {
  let component: TopFootballTeamsComponent;
  let fixture: ComponentFixture<TopFootballTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFootballTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFootballTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
