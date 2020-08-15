import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientListComponent } from './pages/client-module/client-list/client-list.component';
import { ClientRegistComponent } from './pages/client-module/client-regist/client-regist.component';
import { ClientEditComponent } from './pages/client-module/client-edit/client-edit.component';
import { OrderListComponent } from './pages/order-module/order-list/order-list.component';
import { OrderRegistComponent } from './pages/order-module/order-regist/order-regist.component';
import { OrderEditComponent } from './pages/order-module/order-edit/order-edit.component';
import { TrackingOrderListComponent } from './pages/order-tracking-module/tracking-order-list/tracking-order-list.component';
import { OrderTrackingOperationComponent } from './pages/order-tracking-module/order-tracking-operation/order-tracking-operation.component';
import { DeviceDeliveryListComponent } from './pages/device-module/device-delivery-list/device-delivery-list.component';
import { DeviceDeliveryOperationComponent } from './pages/device-module/device-delivery-operation/device-delivery-operation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guards/auth.guard';











@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginAdminComponent,
    DashboardComponent,
    ClientListComponent,
    ClientRegistComponent,
    ClientEditComponent,
    OrderListComponent,
    OrderRegistComponent,
    OrderEditComponent,
    TrackingOrderListComponent,
    OrderTrackingOperationComponent,
    NavbarComponent,
    FooterComponent,
    DeviceDeliveryListComponent,
    DeviceDeliveryOperationComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
