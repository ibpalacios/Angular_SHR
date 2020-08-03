import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientListComponent } from './pages/client-module/client-list/client-list.component';
import { TrackingOrderListComponent } from './pages/order-tracking-module/tracking-order-list/tracking-order-list.component';
import { DeviceDeliveryListComponent } from './pages/device-module/device-delivery-list/device-delivery-list.component';
import { DeviceDeliveryOperationComponent } from './pages/device-module/device-delivery-operation/device-delivery-operation.component';



const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'client-list', component: ClientListComponent},
  { path: 'tracking-order-list', component: TrackingOrderListComponent},
  { path: 'device-delivery-list', component: DeviceDeliveryListComponent},
  { path: 'device-delivery-operation', component: DeviceDeliveryOperationComponent},
  { path: '', pathMatch: 'full', redirectTo: 'principal' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
