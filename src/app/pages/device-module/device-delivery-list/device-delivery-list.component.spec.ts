import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDeliveryListComponent } from './device-delivery-list.component';

describe('DeviceDeliveryListComponent', () => {
  let component: DeviceDeliveryListComponent;
  let fixture: ComponentFixture<DeviceDeliveryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDeliveryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
