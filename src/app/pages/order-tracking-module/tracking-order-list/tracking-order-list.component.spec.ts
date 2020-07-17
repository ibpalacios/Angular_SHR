import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingOrderListComponent } from './tracking-order-list.component';

describe('TrackingOrderListComponent', () => {
  let component: TrackingOrderListComponent;
  let fixture: ComponentFixture<TrackingOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
