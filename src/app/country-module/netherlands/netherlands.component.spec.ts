import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetherlandsComponent } from './netherlands.component';

describe('NetherlandsComponent', () => {
  let component: NetherlandsComponent;
  let fixture: ComponentFixture<NetherlandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetherlandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetherlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
