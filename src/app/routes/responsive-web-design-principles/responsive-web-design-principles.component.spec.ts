import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWebDesignPrinciplesComponent } from './responsive-web-design-principles.component';

describe('ResponsiveWebDesignPrinciplesComponent', () => {
  let component: ResponsiveWebDesignPrinciplesComponent;
  let fixture: ComponentFixture<ResponsiveWebDesignPrinciplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveWebDesignPrinciplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveWebDesignPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
