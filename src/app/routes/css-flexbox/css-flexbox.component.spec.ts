import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFlexboxComponent } from './css-flexbox.component';

describe('CssFlexboxComponent', () => {
  let component: CssFlexboxComponent;
  let fixture: ComponentFixture<CssFlexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFlexboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
