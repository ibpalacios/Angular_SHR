import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDeliveryOperationComponent } from './device-delivery-operation.component';

describe('DeviceDeliveryOperationComponent', () => {
  let component: DeviceDeliveryOperationComponent;
  let fixture: ComponentFixture<DeviceDeliveryOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDeliveryOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDeliveryOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
