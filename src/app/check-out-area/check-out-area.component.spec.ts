import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutAreaComponent } from './check-out-area.component';

describe('CheckOutAreaComponent', () => {
  let component: CheckOutAreaComponent;
  let fixture: ComponentFixture<CheckOutAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
