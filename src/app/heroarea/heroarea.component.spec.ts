import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroareaComponent } from './heroarea.component';

describe('HeroareaComponent', () => {
  let component: HeroareaComponent;
  let fixture: ComponentFixture<HeroareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
