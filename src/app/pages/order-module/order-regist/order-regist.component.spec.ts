import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRegistComponent } from './order-regist.component';

describe('OrderRegistComponent', () => {
  let component: OrderRegistComponent;
  let fixture: ComponentFixture<OrderRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
