import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJsonContentComponent } from './get-json-content.component';

describe('GetJsonContentComponent', () => {
  let component: GetJsonContentComponent;
  let fixture: ComponentFixture<GetJsonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetJsonContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetJsonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
