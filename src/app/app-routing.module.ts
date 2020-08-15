import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientListComponent } from './pages/client-module/client-list/client-list.component';
import { TrackingOrderListComponent } from './pages/order-tracking-module/tracking-order-list/tracking-order-list.component';
import { DeviceDeliveryListComponent } from './pages/device-module/device-delivery-list/device-delivery-list.component';
import { OrderTrackingOperationComponent } from './pages/order-tracking-module/order-tracking-operation/order-tracking-operation.component';
import { DeviceDeliveryOperationComponent } from './pages/device-module/device-delivery-operation/device-delivery-operation.component';
import { OrderRegistComponent } from './pages/order-module/order-regist/order-regist.component';
import { OrderEditComponent } from './pages/order-module/order-edit/order-edit.component';
import { ClientEditComponent } from './pages/client-module/client-edit/client-edit.component';
import { ClientRegistComponent } from './pages/client-module/client-regist/client-regist.component';
import { OrderListComponent } from './pages/order-module/order-list/order-list.component';



const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'client-list', component: ClientListComponent, canActivate: [AuthGuard]},
  { path: 'order-list', component: OrderListComponent, canActivate: [AuthGuard]},
  { path: 'tracking-order-list', component: TrackingOrderListComponent, canActivate: [AuthGuard]},
  { path: 'order-tracking-operation', component: OrderTrackingOperationComponent, canActivate: [AuthGuard]},
  { path: 'device-delivery-list', component: DeviceDeliveryListComponent, canActivate: [AuthGuard]},
  { path: 'device-delivery-operation', component: DeviceDeliveryOperationComponent, canActivate: [AuthGuard]},
  { path: 'order-regist', component: OrderRegistComponent, canActivate: [AuthGuard]},
  { path: 'order-edit', component: OrderEditComponent, canActivate: [AuthGuard]},
   { path: 'client-edit/:id', component: ClientEditComponent, canActivate: [AuthGuard]},
  { path: 'client-regist', component: ClientRegistComponent, canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'principal' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
