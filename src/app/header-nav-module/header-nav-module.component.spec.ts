import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavModuleComponent } from './header-nav-module.component';

describe('HeaderNavModuleComponent', () => {
  let component: HeaderNavModuleComponent;
  let fixture: ComponentFixture<HeaderNavModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
