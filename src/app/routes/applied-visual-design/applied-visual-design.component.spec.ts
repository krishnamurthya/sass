import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedVisualDesignComponent } from './applied-visual-design.component';

describe('AppliedVisualDesignComponent', () => {
  let component: AppliedVisualDesignComponent;
  let fixture: ComponentFixture<AppliedVisualDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedVisualDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedVisualDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
