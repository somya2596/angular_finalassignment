import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentAreaComponent } from './right-content-area.component';

describe('RightContentAreaComponent', () => {
  let component: RightContentAreaComponent;
  let fixture: ComponentFixture<RightContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightContentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
