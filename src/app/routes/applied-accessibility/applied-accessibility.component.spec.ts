import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedAccessibilityComponent } from './applied-accessibility.component';

describe('AppliedAccessibilityComponent', () => {
  let component: AppliedAccessibilityComponent;
  let fixture: ComponentFixture<AppliedAccessibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedAccessibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
